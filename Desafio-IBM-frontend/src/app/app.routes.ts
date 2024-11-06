import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { TransacoesComponent } from './transacoes/transacoes.component';

export const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'transacoes', component: TransacoesComponent }
];
