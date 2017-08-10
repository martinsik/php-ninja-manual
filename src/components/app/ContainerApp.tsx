import { connect } from 'react-redux';
import { AppState } from '../../types/AppState';
import { App, AppStateProps, AppDispatchProps } from './App';

const mapStateToProps = (state: AppState): AppStateProps => {
  return {
    hasItemSelected: Boolean(state.selectedItem.name),
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
