import { connect } from 'react-redux';
import { AppState } from '../../types/AppState';
import { Content, ContentStateProps, ContentDispatchProps } from './Content';
import { expandParameter } from '../../actions/toggleParameter';

const mapStateToProps = (state: AppState): ContentStateProps => {
  const name = state.selectedItem.name;
  const expandedParams = state.selectedItem.expandedParams;
  const detail = state.details[name];

  return {
    detail,
    name,
    expandedParams,
  };
};

const mapDispatchToProps = (dispatch): ContentDispatchProps => {
  return {
    onExpandParameterClick: (name: string) => dispatch(expandParameter(name)),
  };
};

export const ContainerContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
