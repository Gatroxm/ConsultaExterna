import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styles: []
})
export class PanelComponent implements OnInit {
  consultas: any;
  data = [
    {
      nombre: 'Consulta médica',
      fecha: '24/01/2019',
      usuario: 'Alejandro amalla',
      serial: '6546518165321811-a',
      archivo: '',
      estados: [
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
      ]
    },
    {
      nombre: 'Consulta médica',
      fecha: '24/01/2019',
      usuario: 'Alejandro amalla',
      serial: '6546518165321811-a',
      archivo: '',
      estados: [
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
      ]
    },
    {
      nombre: 'Consulta médica',
      fecha: '24/01/2019',
      usuario: 'Alejandro amalla',
      serial: '6546518165321811-a',
      archivo: '',
      estados: [
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
      ]
    },
    {
      nombre: 'Consulta médica',
      fecha: '24/01/2019',
      usuario: 'Alejandro amalla',
      serial: '6546518165321811-a',
      archivo: '',
      estados: [
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
      ]
    }
  ];

  ngOnInit() {
    if (this.data) {
      this.consultas = this.data;
      console.log(this.consultas[0].estados);
    }

  }

}
