import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleados } from '../empleados';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})

//9- agregamos los faltante, como el constructor, implementar el OnInit
export class ListarEmpleadosComponent implements OnInit {

  empleados: Empleados[]; //9.1 add

  //15.Agregamos al constructor despues de crear todo del backend y servicios
  constructor(private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados(); //15.2 Lo ingresamos al "ngOnInit"
    //9.2 
    /** QUINTAMOS YA CREADO EL 15**
    this.empleados = [{
      "id": 1,
      "nombres": "Isaac",
      "apellidos": "Calix",
      "email": "calienteXperra@gmail.com",
      "telefono": "9171003434",
      "direccion": "Cardenas"
    }];
    */
  }

  //15.1
  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

}
