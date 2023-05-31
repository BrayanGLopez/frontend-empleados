import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../model/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //path de servicio spring
  private baseURL:string = 'https://charming-theory-production.up.railway.app/api/v1/empleados';

  constructor(private httpClient:HttpClient) { }

  //obtener empleados desde spring
  listarEmpleados():Observable<Empleado[]>{   
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  //Guardar empleado nuevo
  registrarEmpleado(empleado:Empleado):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, empleado);
  }

  //Actualizar empleado
  actualizarEmpleado(id:number, empleado:Empleado):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado);
  }

  //Obtener empleado por id
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  //Eliminar empleado
  eliminarEmpledo(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
