import axios from '../../../api';

class TodoService {
  getAllTodos = async () => {
    try {
      const url = '/api/todos';
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      throw new Error(`${(err as Error).message}`);
    }
  };

  createTodo = async (payload: { id: string; text: string }) => {
    try {
      const url = '/api/todos';
      const response = await axios.post(url, payload);
      return response.data;
    } catch (err) {
      throw new Error(`${(err as Error).message}`);
    }
  };

  deleteTodoById = async (id: string) => {
    try {
      const url = '/api/todos';
      const response = await axios.delete(url, { data: { id } });
      return response.data;
    } catch (err) {
      throw new Error(`${(err as Error).message}`);
    }
  };

  updateTodoById = async (payload: { id: string; text: string }) => {
    try {
      const url = '/api/todos';
      const response = await axios.put(url, payload);
      return response.data;
    } catch (err) {
      throw new Error(`${(err as Error).message}`);
    }
  };
}

export default new TodoService();
