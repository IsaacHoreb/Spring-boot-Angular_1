//12.-Lo creamos como servicio
// ng g s empleados
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleados } from './empleados';

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  //14.- Agrego URL del Back-end
  private baseURL = "http://localhost:8080/miweb/v1/empleados";

  //14.1
  constructor(private httpClient: HttpClient) { }

  //14.2 Este metodo nos sirve para obtener los empleados
  obtenerListaDeEmpleados(): Observable<Empleados[]> {
    return this.httpClient.get<Empleados[]>(`${this.baseURL}`);
  }

}
