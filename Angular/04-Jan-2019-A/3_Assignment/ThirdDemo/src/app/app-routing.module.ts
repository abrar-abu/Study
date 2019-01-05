import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'technologies' , component : TechnologiesComponent },
  { path: 'books' , component : BooksComponent },
  { path: '', component: TechnologiesComponent},
  {path : '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
