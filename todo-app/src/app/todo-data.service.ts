import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {
  todos: Todo[] = [];
  lastId: number = 0;
  constructor() { }

  addTodo(todo: Todo): TodoDataService {

    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos
        .filter(todo => todo.id === id)
        .pop();
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
        .filter(todo => todo.id !== id);
    return this;
  }

}
