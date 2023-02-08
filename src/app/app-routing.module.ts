import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  // {path: 'about',
  // component: AboutComponent,},
  {path: 'list',
  component: ListComponent,},
  {path: 'detail/:id',
  component: DetailComponent,},
  {
    path: 'create',
  component: CreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
