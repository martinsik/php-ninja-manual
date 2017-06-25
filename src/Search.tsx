import * as React from 'react';
import Autocomplete from './Autocomplete';
import './styles/search.css';

export default class Search extends React.Component<{}, {}> {

  render() {
    return (
      <section className="search">
        <div>
          <label htmlFor="search-field">search:</label>
        </div>
        <div>
          <input type="text" id="search-field" />
          <Autocomplete />
        </div>
      </section>
    );
  }

}