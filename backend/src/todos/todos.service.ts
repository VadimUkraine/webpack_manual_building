import { Injectable } from '@nestjs/common';
import { Todo } from './todos.model';
import { todos } from './todos';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  async getAllTodos(): Promise<Todo[]> {
    return todos;
  }

  async removeTodoById(id: string): Promise<Todo[]> {
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
    return todos;
  }

  async updateTodoById({ text, id }: UpdateTodoDto): Promise<Todo[]> {
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].text = text;
    return todos;
  }

  async createTodo(text: string): Promise<Todo[]> {
    todos.push(new Todo(text, Date.now().toString()));
    return todos;
  }
}
