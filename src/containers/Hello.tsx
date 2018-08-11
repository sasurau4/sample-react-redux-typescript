import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions';
import Hello from '../components/Hello';
import { IReduxState } from '../types';

export function mapStateToProps(state: IReduxState) {
  return {
    enthusiasmLevel: state.enthusiasm.enthusiasmLevel,
    name: state.enthusiasm.languageName,
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>
) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
