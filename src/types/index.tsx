export interface IStoreState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface ITodo {
  id: number;
  completed: boolean;
  text: string;
}

export type TodosState = ITodo[];

export interface IReduxState {
  enthusiasm: IStoreState;
  todos: TodosState;
}
