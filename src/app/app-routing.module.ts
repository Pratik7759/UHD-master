import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseComponent } from './choose/choose.component';




const routes: Routes = [
  { path: 'employees', component: ChooseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
