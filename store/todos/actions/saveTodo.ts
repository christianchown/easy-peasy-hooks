import { effect } from "easy-peasy";
import { IModel } from "../../model";
import { ITodo } from "../interfaces/ITodo";
import { TodoService } from "../TodoService";

const todoService: TodoService = new TodoService();

const saveTodo = effect<IModel, ITodo>(async (dispatch, payload, getState) => {
  const saved = await todoService.save(payload);
  dispatch.todos.todoSaved(saved);
  const { lengthOfItems } = getState().todos;
  if (lengthOfItems > 10) {
    await todoService.reportBigUsage();
  }
  return lengthOfItems;
});

export default saveTodo;
