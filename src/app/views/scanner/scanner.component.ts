import { VagaService } from './../../services/vaga.service';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;
  hasDevices: boolean;
  qrResultString: string;
  processando = false;

  constructor(private vagaService: VagaService) { }

  ngOnInit(): void {

  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    console.log(devices);
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onDeviceSelectChange() {
    const device = this.availableDevices[1];
    this.currentDevice = device || null;
    console.log(this.currentDevice);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    console.log(resultString);
    this.playAudio();
    if (!this.processando) {
      this.confirmarVaga(resultString);
    }
  }

  confirmarVaga(idVaga: string) {
    this.processando = true;
    this.vagaService.readById(idVaga).toPromise().then(
      res => {
        const { vaga } = res;
        vaga.confirmado = true;
        this.vagaService.update(idVaga, vaga).toPromise().then(res => {
          alert('VAGA CONFIRMADA!');
          this.processando = false;
        });
      }
    ).catch(err => {
      alert('ATENÇÃO! Sua vaga expirou!');
    });
  }

  playAudio() {
    const audio = new Audio();
    /* audio.src = "../assets/sound/beep.mp3"; */
    audio.src = '../../../assets/sound/beep.mp3';
    audio.load();
    audio.play();
  }

}
