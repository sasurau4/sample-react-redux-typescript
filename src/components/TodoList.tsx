import * as React from 'react';
import { TodosState } from '../types';
import Todo from './Todo';

export interface ITodoListProps {
  todos: TodosState;
  onTodoClick: (id: number) => void;
  onButtonClick: (id: number) => void;
}

export default ({ todos, onTodoClick, onButtonClick }: ITodoListProps) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        onTodoClick={() => onTodoClick(todo.id)}
        onButtonClick={() => onButtonClick(todo.id)}
        {...todo}
      />
    ))}
  </ul>
);
