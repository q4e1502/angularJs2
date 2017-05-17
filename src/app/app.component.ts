import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>`,
  styleUrls: ['./style.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
}