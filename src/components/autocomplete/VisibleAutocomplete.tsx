import { connect } from 'react-redux';
import { AppState } from '../../types/AppState';
import { showDetail } from '../../actions/showDetail';
import { Autocomplete, AutocompleteStateProps, AutocompleteDispatchProps } from './Autocomplete';

const mapStateToProps = (state: AppState): AutocompleteStateProps => {
  let terms: string[] = [];

  const { list, searchTerm } = state;

  if (list) {
    if (searchTerm) {
      let started = false;
      let i = 0;

      for (; i < list.length; i++) {
        if (list[i].indexOf(searchTerm) === 0) {
          started = true;
          break;
        }
      }

      if (started) {
        while (terms.length < 100 && list[i].indexOf(searchTerm) === 0) {
          terms.push(list[i++]);
        }
      }
    } else {
      terms = state.list.slice(0, 10);
    }
  }

  return {
    terms,
  };
};

const mapDispatchToProps = (dispatch): AutocompleteDispatchProps => {
  return {
    onClick: (term: string) => dispatch(showDetail(term)),
  };
};

export const VisibleAutocomplete = connect(
  mapStateToProps,
  mapDispatchToProps
)(Autocomplete);
