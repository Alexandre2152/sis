import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { TesteComponent } from './teste/teste.component';
import { DataComponent } from './principal/data/data.component';

import { HttpClientModule } from '@angular/common/http';
import { PrincipalService } from './principal/principal.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TesteComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PrincipalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
