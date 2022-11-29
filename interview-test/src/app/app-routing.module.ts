import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewComponent } from './pages/interview/interview.component';



const routes: Routes = [

{
  path:"interview-1",
  component:InterviewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
