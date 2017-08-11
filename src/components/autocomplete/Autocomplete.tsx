import * as React from 'react';
import '../../styles/autocomplete.css';

export type AutocompleteStateProps = {
  terms: string[],
};

export type AutocompleteDispatchProps = {
  onClick: (term: string) => void,
};

type AutocompleteProps = AutocompleteStateProps & AutocompleteDispatchProps;

export const Autocomplete = (props: AutocompleteProps) => {
  return (
    <ul className="autocomplete">
      {props.terms.map((term: string, i: number) => (
        <li key={i}>
          <a href="#" onClick={e => { props.onClick(term); e.preventDefault(); }}>{term}</a>
        </li>
      ))}
    </ul>
  );
};
