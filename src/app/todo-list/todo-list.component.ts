import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';


@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  toggle(todo: Todo) {
    this.todoService.toggleTodo(todo);
  }
}
