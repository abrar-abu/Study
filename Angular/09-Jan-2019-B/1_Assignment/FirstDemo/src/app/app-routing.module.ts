import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EMPReviewComponent } from './empreview/empreview.component';
import { ShowDataComponent } from './show-data/show-data.component';

const routes: Routes = [
  {path : 'employee', component:EMPReviewComponent},
  { path: 'show', component:ShowDataComponent},
  //Add on default path
  { path: '', component:EMPReviewComponent},
  // It is our Widcard component
  // {path : '**', component:ShowDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
