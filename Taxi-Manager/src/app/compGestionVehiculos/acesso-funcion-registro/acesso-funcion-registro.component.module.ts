import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcessoFuncionRegistroComponent } from './acesso-funcion-registro.component';

@NgModule({
  declarations: [AcessoFuncionRegistroComponent],
  imports: [
    CommonModule
  ],
  exports: [AcessoFuncionRegistroComponent] // Aquí exportamos el componente para que otros módulos lo puedan utilizar
})
export class AcessoFuncionRegistroModule { }
