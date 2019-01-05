import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = ['Angular :- ng-book2-angular-5-r67', 'Node JS :- ', 'Typescript :- Learning TypeScript' ];
  constructor() { }

  ngOnInit() {
  }

}
