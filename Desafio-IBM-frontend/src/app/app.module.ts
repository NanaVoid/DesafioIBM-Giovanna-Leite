import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule  } from '@angular/core';
import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { TransacoesComponent} from './transacoes/transacoes.component';
import { appRoutes } from './app.routes';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        ExtratoComponent,
        TransacoesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
