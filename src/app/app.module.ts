import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpfComponent } from './views/cpf/cpf.component';
import { MesaListComponent } from './views/mesas/mesa-list/mesa-list.component';
import { MesaComponent } from './views/mesas/mesa/mesa.component';
import { VagaQrcodeComponent } from './views/vagas/vaga-qrcode/vaga-qrcode.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScannerComponent } from './views/scanner/scanner.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    CpfComponent,
    MesaListComponent,
    MesaComponent,
    VagaQrcodeComponent,
    ScannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    NgxQRCodeModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
