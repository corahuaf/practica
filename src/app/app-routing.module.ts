import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './usuarios/contact/contact.component';
import { Pag1Component } from './usuarios/pag1/pag1.component';
import { Pag2Component } from './usuarios/pag2/pag2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pag1',
    component: Pag1Component
  },
  {
    path: 'pag2',
    component: Pag2Component
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
