import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NullComponent } from 'ng-micro-frontend';

const routes: Routes = [{ component: NullComponent, path: '**' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
