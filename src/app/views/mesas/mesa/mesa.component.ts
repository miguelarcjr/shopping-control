import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MesaService } from './../../../services/mesa.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {
  mesa: any = {
    id: 0,
    quantidadelimite: 0
  };

  constructor(private router: Router, private mesaService: MesaService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.readById(id);
  }

  // tslint:disable-next-line: typedef
  readById(id: number|string) {
    this.mesaService.readById(id).subscribe(res => {this.mesa = res.mesa; });
  }

  onReject(): void {
    setTimeout(() => {this.router.navigate(['/mesas']); }, 300);
  }
  onConfirm(): void {
    window.localStorage.setItem('idMesa', this.mesa.id);
    setTimeout(() => {this.router.navigate(['/mesas']); }, 300);
  }

}
