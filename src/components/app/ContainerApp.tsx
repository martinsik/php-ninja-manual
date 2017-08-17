import { connect } from 'react-redux';
import { AppState } from '../../types/AppState';
import { App, AppStateProps, AppDispatchProps } from './App';

const mapStateToProps = (state: AppState): AppStateProps => {
  const hasItemSelected = Boolean(state.selectedItem.name);
  const examples = state.examples[state.selectedItem.name];
  const view = state.view;

  return {
    hasItemSelected,
    view,
    examples,
  };
};

const mapDispatchToProps = (dispatch): AppDispatchProps => {
  return {
  };
};

export const ContainerApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
