import { connect } from 'react-redux';
import { AppState } from '../../types/AppState';
import { showDetail } from '../../actions/showDetail';
import { changeSearchTerm } from '../../actions/changeSearchTerm';
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
    onClick: (term: string, e: React.MouseEvent<HTMLAnchorElement>) => {
      dispatch(showDetail(term));
      dispatch(changeSearchTerm(term));
      e.preventDefault();
    }
  };
};

export const VisibleAutocomplete = connect(
  mapStateToProps,
  mapDispatchToProps
)(Autocomplete);
