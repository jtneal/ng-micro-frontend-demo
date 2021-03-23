import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteFactory } from 'ng-micro-frontend';

const routes: Routes = [
  RouteFactory.createRoute('mfe1', 'http://localhost:4210'),
  RouteFactory.createRoute('mfe2', 'http://localhost:4220'),
  RouteFactory.createRoute('mfe3', 'http://localhost:4230'),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
