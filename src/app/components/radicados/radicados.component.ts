import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radicados',
  templateUrl: './radicados.component.html',
  styles: []
})
export class RadicadosComponent implements OnInit {
  estados = [
    {
      estado: 'creación de radicado',
      fecha: '24/01/2019',
    },
    {
      estado: 'trsaferencia de radicado',
      fecha: '25/01/2019',
    },
    {
      estado: 'En proceso de aprobación',
      fecha: '26/01/2019',
    },
    {
      estado: 'aprobado',
      fecha: '26/01/2019',
    }
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.estados);
  }

}
