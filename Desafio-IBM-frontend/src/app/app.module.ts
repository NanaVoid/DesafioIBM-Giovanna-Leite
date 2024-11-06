import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { appRoutes } from './app.routes';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HomepageComponent,
    ExtratoComponent,
    TransacoesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
