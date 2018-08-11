import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions';
import TodoList from '../components/TodoList';
import { IReduxState } from '../types';

export function mapStateToProps(state: IReduxState) {
  return { todos: state.todos };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TodoAction>) {
  return {
    onButtonClick: (id: number) => dispatch(actions.deleteTodo(id)),
    onTodoClick: (id: number) => dispatch(actions.toggleTodo(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
