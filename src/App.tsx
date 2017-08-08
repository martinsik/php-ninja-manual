import * as React from 'react';
import InteractiveSearch from './components/search/InteractiveSearch';
import Content from './Content';
import './styles/app.css';

export interface AppState {
  language: string;
  list: string[];
  searchTerm: string;
  autocompleteVisible: boolean;
}

export function App() {
  return (
    <div className="browser app">
      <InteractiveSearch />
      <Content />
    </div>
  );
}
