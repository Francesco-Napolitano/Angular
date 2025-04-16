import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  todo = input.required<Todo>()
  // le modifiche qua sotto servono a migliorare l'UI ma non contengono logica
  todoToggled = output<Todo>()

  todoClicked() {
    this.todoToggled.emit(this.todo())
  }
}
