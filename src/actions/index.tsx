import * as constants from '../constants';

export interface IIncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface IDecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

export function incrementEnthusiasm(): IIncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM,
  };
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM,
  };
}

export interface IAddTodo {
  type: constants.ADD_TODO;
  id: number;
  text: string;
}

export interface IDeleteTodo {
  type: constants.DELETE_TODO;
  id: number;
}

export interface IToggleTodo {
  type: constants.TOGGLE_TODO;
  id: number;
}

export type TodoAction = IAddTodo | IDeleteTodo | IToggleTodo;

let nextId = 0;

export function addTodo(text: string): IAddTodo {
  nextId++;
  return { type: constants.ADD_TODO, id: nextId, text };
}

export function deleteTodo(id: number): IDeleteTodo {
  return { type: constants.DELETE_TODO, id };
}

export function toggleTodo(id: number): IToggleTodo {
  return { type: constants.TOGGLE_TODO, id };
}
