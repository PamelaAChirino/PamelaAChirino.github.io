import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  public dataWorks=[
    {
      title: "Veterinaria",
      descripcion:"React",
      url:"one",
      image:"../../../assets/img/veterinaria.jpg",
      alt:"Proyecto de veterinaria"
    },
  ]

}
