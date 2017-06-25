import { connect } from 'react-redux';
import { AppState } from '../states';
import Search from '../Search';

const mapStateToProps = (state: AppState) => {
  return {
    // active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    // onClick: () => {
    //   dispatch(setVisibilityFilter(ownProps.filter))
    // }
  };
};

const SearchDocumentation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchDocumentation;