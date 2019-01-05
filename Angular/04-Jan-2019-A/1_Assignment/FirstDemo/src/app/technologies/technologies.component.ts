import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  technologies = ['Angular', 'Node JS', 'Android', 'Big data', 'Artificial', 'Intelligence'];
  constructor() { }

  ngOnInit() {
  }

}
