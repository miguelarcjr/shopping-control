import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpfComponent } from './views/cpf/cpf.component';
import { MesaListComponent } from './views/mesas/mesa-list/mesa-list.component';

const routes: Routes = [
  {
    path: 'login', component: CpfComponent,
  },
  {
    path: 'mesas', component: MesaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
