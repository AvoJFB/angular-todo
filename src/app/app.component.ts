import { Component } from '@angular/core';

import { Todo } from './todo';

import { todos } from './data';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Todo App';
}
