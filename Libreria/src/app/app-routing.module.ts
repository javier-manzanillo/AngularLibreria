import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoLibrosComponent } from './components/admin/listado-libros/listado-libros.component';
import { DetallesLibroComponent } from './components/detalles-libro/detalles-libro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libro/:id', component: DetallesLibroComponent },
  { path: 'admin/listado-libros', component: ListadoLibrosComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
