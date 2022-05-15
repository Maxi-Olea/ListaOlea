import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students = [
    {
      nombre: 'Ricardo',
      apellido: 'Perez',
      nota: 8,
      curso: 'Angular'
    },
    {
      nombre: 'Martina',
      apellido: 'Juarez',
      nota: 10,
      curso: 'React'
    },
    {
      nombre: 'Jose',
      apellido: 'Garcia',
      nota: 3,
      curso: 'Vue'
    },
    {
      nombre: 'Sergio',
      apellido: 'Gimenez',
      nota: 7,
      curso: 'Node'
    },
    {
      nombre: 'Gimena',
      apellido: 'Perez',
      nota: 8,
      curso: 'React'
    },
    {
      nombre: 'Facundo',
      apellido: 'Lopez',
      nota: 6,
      curso: 'Angular'
    },
    {
      nombre: 'Victoria',
      apellido: 'Suarez',
      nota: 5,
      curso: 'Node'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
