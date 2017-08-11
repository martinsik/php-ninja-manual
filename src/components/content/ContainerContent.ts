import { connect } from 'react-redux';
import { AppState } from '../../types/AppState';
import { Content, ContentStateProps, ContentDispatchProps } from './Content';
import { expandParameter } from '../../actions/toggleParameter';
import { showDetail } from '../../actions/showDetail';
import { hoverParameter } from '../../actions/hoverParameter';

const mapStateToProps = (state: AppState): ContentStateProps => {
  const name = state.selectedItem.name;
  const expandedParams = state.selectedItem.expandedParams;
  const detail = state.details[name];
  const hoveredParam = state.selectedItem.hoveredParam;

  return {
    detail,
    name,
    expandedParams,
    hoveredParam,
  };
};

const mapDispatchToProps = (dispatch): ContentDispatchProps => {
  return {
    onExpandParameterClick: (name: string) => dispatch(expandParameter(name)),
    onShowDetail: (name: string) => dispatch(showDetail(name)),
    onParameterHovered: (name?: string) => dispatch(hoverParameter(name ? name : null)),
  };
};

export const ContainerContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
