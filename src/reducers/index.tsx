import { combineReducers } from 'redux';
import { EnthusiasmAction, TodoAction } from '../actions';
import {
  ADD_TODO,
  DECREMENT_ENTHUSIASM,
  DELETE_TODO,
  INCREMENT_ENTHUSIASM,
  TOGGLE_TODO,
} from '../constants';
import { IStoreState, TodosState } from '../types';

const initialEnthusiasmState: IStoreState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

function enthusiasm(
  state: IStoreState = initialEnthusiasmState,
  action: EnthusiasmAction
): IStoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1),
      };
  }
  return state;
}

const initialTotosState: TodosState = [
  { id: 1, text: 'hogehoge', completed: false },
];

function todos(
  state: TodosState = initialTotosState,
  action: TodoAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

export const sampleApp = combineReducers({
  enthusiasm,
  todos,
});
