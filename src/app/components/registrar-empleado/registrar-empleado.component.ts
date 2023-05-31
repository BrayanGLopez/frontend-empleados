import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/model/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent {

  empleado:Empleado = new Empleado();

  constructor(private empleadoService:EmpleadoService, private router:Router){ }

  private guardarEmpleado(){
    this.empleadoService.registrarEmpleado(this.empleado).subscribe(dato => {
      this.irALaLsitaDeEmpleados();
    }, error => console.log(error));
  }

  private irALaLsitaDeEmpleados():void{
    this.router.navigate(['/empleados']);
  }

  onSubmit():void{  
    this.guardarEmpleado();
  }
}
