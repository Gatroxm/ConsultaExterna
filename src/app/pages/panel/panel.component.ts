import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styles: []
})
export class PanelComponent implements OnInit {
  consultas: any;
  estado: boolean = false;
  data = [
    {
      'nombre': 'Consulta médica',
      'fecha': '24/01/2019',
      'usuario': 'Alejandro amalla',
      'serial': '6546518165321811-a',
      'estados': [
        {
          'estado': 'creación de radicado',
          'fecha': '24/01/2019',
        },
        {
          'estado': 'trsaferencia de radicado',
          'fecha': '25/01/2019',
        },
        {
          'estado': 'En proceso de aprobación',
          'fecha': '26/01/2019',
        }
      ],
      'archivo': ''
    }
  ];

  ngOnInit() {
    if (this.data) {
      this.estado = true;
      this.consultas = this.data;
  console.log(data[0].estados)

    }

  }

}
