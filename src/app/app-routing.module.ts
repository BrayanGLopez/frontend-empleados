import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './components/actualizar-empleado/actualizar-empleado.component';

const routes: Routes = [
  {path: 'empleados', component: ListaEmpleadosComponent},
  {path: 'registrar-empleado', component: RegistrarEmpleadoComponent},
  {path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent},
  {path: '', redirectTo:'empleados', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
