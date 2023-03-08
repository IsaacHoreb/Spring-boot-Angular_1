import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';

//16.- Agregamos las rutas
const routes: Routes = [
  { path: 'empleados', component: ListarEmpleadosComponent },
  { path: '', redirectTo: 'empleados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
