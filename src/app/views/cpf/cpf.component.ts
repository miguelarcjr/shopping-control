import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit {

  cpf = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.localStorage.clear();
  }

  navigateToMesaList(): void {
    console.log(this.cpf.length);
    if (this.validarCpf(this.cpf)) {
      window.localStorage.setItem('cpf', this.cpf);
      this.router.navigate(['/mesas']);
    } else {
      alert('CPF INVÁLIDO!');
    }
  }

  validarCpf(cpf: string): Boolean {
    return cpf.length == 11;
  }

}
