import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importamos HttpClientModule para las peticiones Http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mis-componentes/header/header.component';
import { AcercaDeComponent } from './mis-componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './mis-componentes/experiencia/experiencia.component';
import { EducacionComponent } from './mis-componentes/educacion/educacion.component';
import { HabilidadesComponent } from './mis-componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './mis-componentes/proyectos/proyectos.component';
import { LoginComponent } from './mis-componentes/login/login.component';
import { ExpItemComponent } from './mis-componentes/experiencia/exp-item/exp-item.component';
import { EduItemComponent } from './mis-componentes/educacion/edu-item/edu-item.component';
import { SkillItemComponent } from './mis-componentes/habilidades/skill-item/skill-item.component';
import { ProyectoItemComponent } from './mis-componentes/proyectos/proyecto-item/proyecto-item.component';
import { HeaderEditBtnsComponent } from './mis-componentes/edicion/header-edit-btns/header-edit-btns.component';
import { DeleteBtnComponent } from './mis-componentes/edicion/buttons/delete-btn/delete-btn.component';
import { EditBtnComponent } from './mis-componentes/edicion/buttons/edit-btn/edit-btn.component';
import { FooterEditSaveComponent } from './mis-componentes/edicion/footer-edit-save/footer-edit-save.component';
import { interceptorProvider } from './mis-servicios/Interceptor/interceptor.service';
import { ImgEditBtnsComponent } from './mis-componentes/edicion/img-edit-btns/img-edit-btns.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LoginComponent,
    ExpItemComponent,
    EduItemComponent,
    SkillItemComponent,
    ProyectoItemComponent,
    EditBtnComponent,
    DeleteBtnComponent,
    HeaderEditBtnsComponent,
    FooterEditSaveComponent,
    ImgEditBtnsComponent
  ],
  imports: [
    //añadimos el modulo HttpClient al array de imports para los servidores
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
