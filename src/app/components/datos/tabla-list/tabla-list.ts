import { Component } from '@angular/core';
import { datos } from '../../../models/datos';
import { ServDatosJson } from '../../../services/serv-datos-json';

@Component({
  selector: 'app-tabla-list',
  imports: [],
  templateUrl: './tabla-list.html',
  styleUrl: './tabla-list.css',
})
export class TablaListComponent { 

  dataSource = [
    {
      "id": 1,
      "nombre": "Recorrido al Parque Historico e Isla Santay",
      "categoria": "Excursión",
      "descripcion": "Disfruta un recorrido completo por las áreas naturales...",
      "precio": 45
    },
    {
      "id": 2,
      "nombre": "Paseo en Catamarán por el Río Guayas",
      "categoria": "Paseo",
      "descripcion": "Vive una experiencia relajante a bordo de un catamarán...",
      "precio": 20
    },
    {
      "id": 3,
      "nombre": "Recorrido por los museos de Guayaquil y el Malecón 2000",
      "categoria": "Excursión",
      "descripcion": "Explora los principales museos de la ciudad...",
      "precio": 45
    }
  ];
 

}

