import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit {

  cpf: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToMesaList(): void {
    console.log(this.cpf.length)
    if(this.validarCpf(this.cpf)) {
      this.router.navigate(['/mesas'])
    } else {
      alert("CPF INVÁLIDO!")
    }
  }

  validarCpf(cpf: string): Boolean {
    return cpf.length == 11
  }

}
