import * as React from 'react';

export interface IProps {
  text: string;
  completed: boolean;
  onTodoClick?: () => void;
  onButtonClick?: () => void;
}

export default ({ text, completed, onTodoClick, onButtonClick }: IProps) => (
  <div>
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <p onClick={onTodoClick}>{text}</p>
      <button onClick={onButtonClick}>DELETE TODO!</button>
    </li>
  </div>
);
