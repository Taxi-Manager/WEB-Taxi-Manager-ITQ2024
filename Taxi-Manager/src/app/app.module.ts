import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
  //    AppComponent,
     // InventarioComponent,
    //  VentasComponent,
    //  ApartadosComponent,
    //  ProveedoresComponent,
   //   UsuariosComponent,
   //  SharedComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
      ],
      providers: [],
      bootstrap: []
    })
    export class AppModule { }
    

