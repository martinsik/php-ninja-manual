import * as React from 'react';
import { VisibleAutocomplete } from '../autocomplete/VisibleAutocomplete';
import '../../styles/search.css';

export type SearchStateProps = {
  searchTerm: string,
  autocompleteVisible: boolean,
};

export type SearchDispatchProps = {
  onChangeSearchTerm: (term: string) => void,
  changeAutocompleteVisible: (visible: boolean) => void,
};

type SearchProps = SearchStateProps & SearchDispatchProps;

export const Search = (props: SearchProps) => {

  return (
    <section className="search">
      <div>
        <label htmlFor="search-field">search:</label>
      </div>
      <div>
        <input
          type="text"
          id="search-field"
          value={props.searchTerm}
          onBlur={() => props.changeAutocompleteVisible(false)}
          onFocus={() => props.changeAutocompleteVisible(true)}
          onChange={e => props.onChangeSearchTerm(e.target.value)}
        />
        {props.autocompleteVisible && <VisibleAutocomplete />}
      </div>
    </section>
  );
};
