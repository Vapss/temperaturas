import { Component, OnInit } from '@angular/core';
import { CustomerModel } from './customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {
  titulo = 'Calculadora de Temperaturas';
  numero: number = 0;
  numero2: number = 0;
  numero3: number = 0;

  resultadosFahrenACentigrados: number = 0;
  resCentigradosAFarenheit: number = 0;
  resCentigradosAKelvin: number = 0;
  resKelvinACentigrados: number = 0;
  resKelvinAFahrenheit: number = 0;
  
  fac: number = 0;
  fal: number = 0;

  constructor() { }

  ngOnInit() {
  }

  centigradosAFarenheit(): void {
    this.resCentigradosAFarenheit = (this.numero * 1.8) + 32;
  }


  centigradosAKelvin(): void {
    this.resCentigradosAKelvin = + 273.15;
  }

  Grads1(): void {
    this.resCentigradosAFarenheit=  (this.numero * 1.8) + 32;
    this.resCentigradosAKelvin = (this.numero  + 273.15);
  }

  Grad2(): void {
    this.resKelvinACentigrados = (this.numero2  - 273.15);
    this.resKelvinAFahrenheit =     1.8*((this .numero2 ) - 273.15)
  }

  Grad3(): void {
    this.fac = (this.numero3-32)/1.8;
    this.fal =   (5/9)*((this.numero3) - 32) + 273.15;
  }
}