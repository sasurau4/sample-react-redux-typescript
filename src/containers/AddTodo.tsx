import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions';

export interface IProps {
  onSubmit: (s: string) => void;
}

class AddTodo extends React.Component<IProps, { input: string }> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      input: '',
    };
  }
  public onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    // if not, call @@INIT/redux
    e.preventDefault();
    if (!this.state.input.trim()) {
      return;
    }
    this.props.onSubmit(this.state.input);
    this.setState({
      input: '',
    });
  };
  public onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      input: e.currentTarget.value,
    });
  };

  public render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input value={this.state.input} onChange={this.onInputChange} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch: Dispatch<actions.TodoAction>) {
  return {
    onSubmit: (s: string) => dispatch(actions.addTodo(s)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
