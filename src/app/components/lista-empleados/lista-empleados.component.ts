import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/model/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit{
  empleados: Empleado[] = [];
  
  constructor(private empleadoService:EmpleadoService, private router:Router){ }

  ngOnInit(): void {
    this.listarEmpleados();
  }

  private listarEmpleados():void{
    this.empleadoService.listarEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

  actualizarEmpleado(id:number):void{
    this.router.navigate(['actualizar-empleado/', id]);
  }

  eliminarEmpleado(id:number):void{
    this.empleadoService.eliminarEmpledo(id).subscribe(dato =>{
      this.listarEmpleados();
    });
  }
}
