import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, concat, concatMap, map, Observable, throwError } from 'rxjs';
import { Jwt } from 'src/app/mis-classes/modelsDTO/jwt';
import { TokenService } from '../TokenService/token.service';

//Esta clase intercepta las peticiones HTTP y les pone el Header con el Token.

@Injectable({
  providedIn: 'root'
})

/*Este servicio se exporta luego como un Provider y analizára las comunicaciones Http que se realizen, sus principales funciones son: Añadir el token en cada comunicación y Solicitar un Reset del token si se recibe un error de autorización (Presumiblemente provocado por la caducidad del token).*/
export class InterceptorService implements HttpInterceptor{

  constructor(private tokenService:TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Si estamos logueados (existe token), lo añadimos al header.
    if(!this.tokenService.isLogged()){
      return next.handle(req);
    }

    let intReq = req;
    const token = this.tokenService.getToken()
    if(token != null){
      let jwt = new Jwt("");
      intReq = req.clone({headers:req.headers.set('Authorization',jwt.bearer+token)});
    }
    return next.handle(intReq).pipe(catchError((err:HttpErrorResponse)=>{
      if(err.status===401)
      {
          const jwt: Jwt = new Jwt(token!);

          /*Si se atrapa un error y hay un error 401, le pedimos que intente otra vez el intReq, pero con el header cambiado luego de refrescar el token.

          Aquí la forma de hacerlo es un tanto... rara. En lugar de devolver el next.handle(intReq) directamente, aquí lo hacemos por medio de un "pipe".Puede parecer raro pero la función pipe, aplicada a un observable no tiene porque retornar nada vinculado al "tipo" de este observable.

          Al retornar el next.hadle(intRep) por medio de un pipe, podria decirse que obligamos al sistema que espere a que el pipe se ejecute antes de continuar. De este modo "no se hacen consultas" con el token vencido mientras intentamos hacer el Reset, si no que "quedan en espera" para resolverse.

          PD: no puede formarse un bucle con atrapando el error 401 pues, si el token es inválido para el reset, se retorna error 500 y la función irá al "else" de esta función y se borrará del localStorage.
          */
          return this.tokenService.reset(jwt).pipe(concatMap((data:any)=>{            
            console.log("Refrescando token...")
            this.tokenService.saveToken(data);
            intReq = req.clone({headers:req.headers.set('Authorization',data.bearer+data.token)})

            return next.handle(intReq);
          }));
      }
      else{
       this.tokenService.logout() 
      }
      return throwError(err);
    }));
  }
}

//Lo exportamos como un Provider
export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}];