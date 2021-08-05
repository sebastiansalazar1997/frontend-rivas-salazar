import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {SliderModule} from 'primeng/slider';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CardModule} from 'primeng/card';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { AuthorComponent } from './author/author.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AuthorComponent,
    NotFoundComponent,
    MainComponent,
    AccessDeniedComponent,
    UnderMaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormBuilder,
    HttpClientModule ,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    SliderModule,
    InputSwitchModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
