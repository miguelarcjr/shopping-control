import { VagaService } from './../../../services/vaga.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import * as moment from 'moment';


@Component({
  selector: 'app-vaga-qrcode',
  templateUrl: './vaga-qrcode.component.html',
  styleUrls: ['./vaga-qrcode.component.css']
})
export class VagaQrcodeComponent implements OnInit, AfterViewInit {
  elementType = NgxQrcodeElementTypes.CANVAS;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'teste';
  tempo: string = null;
  constructor(private vagaService: VagaService) {
    const vagaId = window.localStorage.getItem('vagaId');
    this.value = vagaId;
  }

  ngOnInit(): void {
    this.getVaga();
  }

  ngAfterViewInit() {

  }

  getVaga() {
    this.vagaService.readById(this.value).subscribe(res => {
      this.tempo = moment(res.vaga.expires).format('LT');
      console.log('this.tempo');
      console.log(this.tempo);
    });
  }

}
