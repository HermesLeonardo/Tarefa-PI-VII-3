import { Routes } from '@angular/router';
import { ClientesCadastroComponent } from './pages/clientes-cadastro/clientes-cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'clientes/cadastrar', pathMatch: 'full' },
  { path: 'clientes', children: [
      { path: 'cadastrar', component: ClientesCadastroComponent }
    ]
  }
];
