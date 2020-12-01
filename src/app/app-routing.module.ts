import { ScannerComponent } from './views/scanner/scanner.component';
import { VagaQrcodeComponent } from './views/vagas/vaga-qrcode/vaga-qrcode.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpfComponent } from './views/cpf/cpf.component';
import { MesaListComponent } from './views/mesas/mesa-list/mesa-list.component';
import { MesaComponent } from './views/mesas/mesa/mesa.component';

const routes: Routes = [
  {
    path: '', component: CpfComponent,
  },
  {
    path: 'login', component: CpfComponent,
  },
  {
    path: 'mesas', component: MesaListComponent
  },
  {
    path: 'mesas/:id', component: MesaComponent
  },
  {
    path: 'vagas/qrcode', component: VagaQrcodeComponent
  },
  {
    path: 'scanner', component: ScannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
