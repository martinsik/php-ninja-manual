import { connect } from 'react-redux';
import { AppState } from '../../types/AppState';
import { changeSearchTerm } from '../../actions/changeSearchTerm';
import { scheduleChangeAutocompleteVisible } from '../../actions/scheduleChangeAutocompleteVisible';
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
    changeAutocompleteVisible: (visible: boolean) => dispatch(scheduleChangeAutocompleteVisible(visible)),
  };
};

export const ContainerSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
