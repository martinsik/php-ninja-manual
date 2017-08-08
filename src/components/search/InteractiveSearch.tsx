import { connect } from 'react-redux';
import { AppState } from '../../App';
import { changeSearchTerm } from '../../actions/changeSearchTerm';
import { changeAutocompleteVisible } from '../../actions/changeAutocompleteVisible';
import { Search, SearchDispatchProps, SearchStateProps } from './Search';

const mapStateToProps = (state: AppState): SearchStateProps => {
  const { searchTerm, autocompleteVisible } = state;

  return {
    searchTerm,
    autocompleteVisible,
  };
};

const mapDispatchToProps = (dispatch): SearchDispatchProps => {
  return {
    onChangeSearchTerm: (term: string) => dispatch(changeSearchTerm(term)),
    changeAutocompleteVisible: (visible: boolean) => dispatch(changeAutocompleteVisible(visible)),
  };
};

const InteractiveSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default InteractiveSearch;
