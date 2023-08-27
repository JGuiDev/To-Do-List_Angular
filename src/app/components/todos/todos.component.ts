import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[]; // Tipando Array da Interface
  inputTodo!: string;

  constructor() {}
  ngOnInit(): void {
    /* Adicionando os primeiros elementos ao Todo */
    this.todos = [
      {
        content: 'Primeira Tarefa',
        completed: false,
      },
      {
        content: 'Segunda Tarefa',
        completed: true,
      },
    ];
  }

  /* Alterando a classe da tarefa concluída  */
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo, // Adicionar o texto a lista
      completed: false,
    });

    this.inputTodo = '';
  }
}
