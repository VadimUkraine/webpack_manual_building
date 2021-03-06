import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todos.model';
import { TODO_NOT_FOUND } from './todos.constants';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Delete()
  async removeTodo(@Body('id') id: string): Promise<Todo[]> {
    const updatedTodos = this.todosService.removeTodoById(id);
    if (!updatedTodos) {
      throw new HttpException(TODO_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    return updatedTodos;
  }

  @Put()
  async updateTodo(@Body() updateTodoDto: UpdateTodoDto): Promise<Todo[]> {
    return this.todosService.updateTodoById(updateTodoDto);
  }

  @Post()
  async createTodo(@Body('text') text: string): Promise<Todo[]> {
    return this.todosService.createTodo(text);
  }

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return this.todosService.getAllTodos();
  }
}
