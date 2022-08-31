import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

const FIREBASE_DATA = {
  apiKey: "AIzaSyBpKKepX5Iu7I-ucI6bjLJNzD2odIxEwEc",
  authDomain: "proyecto-de-imagenes.firebaseapp.com",
  projectId: "proyecto-de-imagenes",
  storageBucket: "proyecto-de-imagenes.appspot.com",
  messagingSenderId: "1090566699413",
  appId: "1:1090566699413:web:bb216b9079bb9317f29e9c",
  measurementId: "G-85XF7XGB4Z"
}

firebase.initializeApp(FIREBASE_DATA);

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService {

  storareRef = firebase.app().storage().ref();

  constructor() {
  }

  private async subirImagen(nombreImg: string, imgBase64: any):Promise<string|null>{
    try {
      const respuesta = await this.storareRef.child("/ImagenesPortfolio/" + nombreImg).putString(imgBase64, 'data_url');
      //Esperamos que nos devuelva una dirección de descarga (es una promesa).
      return await respuesta.ref.getDownloadURL();
    } catch (err) {
      alert("Error al subir la imagen");
      return null;
    }    
  }

  cargarImagen(fileInputEvent: any,callback:Function) {
    let imgFile = fileInputEvent.target.files;
    let reader = new FileReader();
    let nombreImg = 'img';

    reader.readAsDataURL(imgFile[0]);
    reader.onloadend = () => {
      return this.subirImagen(nombreImg + '_' + Date.now(), reader.result)
    };
  }
  async cargaImagen(
    fileInputEvent: any,
    callback:(a:string)=>void,
    callbackError:()=>void)
    {
    let imgFile = fileInputEvent.target.files[0];
    let fileReader = new FileReader();
    let nombreImg = 'img';
    fileReader.onloadend = async () => {
      await this.subirImagen(nombreImg + '_' + Date.now(), fileReader.result).then(
        res =>{
          if(res) callback(res);
          else callbackError();
        }
      );
    }
    fileReader.readAsDataURL(imgFile);    
  }
  async cargaImagenDesdeFile(
    file: any,
    callback:(a:string)=>void,
    callbackError:()=>void)
    {
      let imgFile = file;
      let fileReader = new FileReader();
      let nombreImg = 'img';
      fileReader.onloadend = async () => {
        return await this.subirImagen(nombreImg + '_' + Date.now(), fileReader.result).then(
          url =>{
            if(url) callback(url);
            else callbackError();
          }
        );
      }
      fileReader.readAsDataURL(imgFile);
  }

  async readFile(file: any):Promise<string>{
    return await new Promise((res, rej) => {
      var fr = new FileReader();  
      let nombreImg = 'img';

      fr.onload = async () => {
        await this.subirImagen(nombreImg + '_' + Date.now(), fr.result).then(resp=>{
          res(resp??"")
        }).catch(err=> rej(err));
      };
      fr.readAsDataURL(file);
    });
  }
}
