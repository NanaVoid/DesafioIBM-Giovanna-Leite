import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { appRoutes } from './app.routes';

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
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
