import * as React from 'react';
import '../../styles/autocomplete.css';

type AutocompleteProps = {
  terms: string[]
};

const Autocomplete = (props: AutocompleteProps) => {
  return (
    <ul className="autocomplete">
      {props.terms.map((term: string, index: number) => (
        <li key={index}><a href="">{term}</a></li>
      ))}
    </ul>
  );
};

export default Autocomplete;
