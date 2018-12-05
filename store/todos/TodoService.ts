import { ITodo } from "./interfaces/ITodo";
export class TodoService {
  public save = (payload: ITodo) =>
    new Promise<ITodo>((resolve) => {
      localStorage.setItem(payload.todo, payload.todo);
      resolve(payload);
    })
  /**
   * async reportBigUsage
   */
  public async reportBigUsage(): Promise<boolean> {
    return new Promise<boolean>((resolve) => resolve(true));
  }
}
