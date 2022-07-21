import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ProyectoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
