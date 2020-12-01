import { VagaService } from './../../../services/vaga.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesaService } from './../../../services/mesa.service';
import * as moment from 'moment';

@Component({
  selector: 'app-mesa-list',
  templateUrl: './mesa-list.component.html',
  styleUrls: ['./mesa-list.component.css']
})
export class MesaListComponent implements OnInit {
  mesas: any[] = [];
  ready = false;
  idSelecionado = 0;
  constructor(private mesaService: MesaService, private vagaService: VagaService, private router: Router) { }

  ngOnInit(): void {
    this.readMesas();

    const idMesa = window.localStorage.getItem('idMesa');
    if (idMesa) {
      this.idSelecionado = +idMesa;
    }
  }

  readMesas() {
    this.mesaService.read().subscribe(res => {
      this.mesas = res.mesas.sort() as Array<any>;
      this.ready = true;
    });
  }

  updateUI() {
    this.readMesas();
  }

  onMesaClick(id: number, ocupada: boolean) {
    console.log(id);
    if (ocupada) {
      return;
    }
    this.router.navigate([`/mesas/${id}`]);
  }

  async onSubmit() {
    const cpf = window.localStorage.getItem('cpf');
    const idMesa = window.localStorage.getItem('idMesa');
    console.log(!(idMesa && cpf));
    if (!(idMesa && cpf)) {
      alert('Mesa ou CPF não preenchidos.');
      return;
    }
    const { mesa } = await this.mesaService.readById(idMesa).toPromise();
    console.log(mesa);
    const vaga = {
      empresa: mesa.empresa,
      mesa,
      cpf,
      expiresIni: new Date(),
      expires: moment(new Date()).add(10, 'm').toDate(),
      confirmada: false
    };
    console.log('vaga');
    console.log(vaga);
    console.log('Criando vAGA');
    this.vagaService.create(vaga).subscribe(res => {
      console.log('res');
      console.log(res);
      window.localStorage.setItem('vagaId', res.vaga.id);
      this.router.navigate([`/vagas/qrcode`]);
    }, err => {console.log(err); });
  }
}
