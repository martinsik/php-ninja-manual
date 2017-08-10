import * as React from 'react';
import { ContainerSearch } from '../search/ContainerSearch';
import { ContainerContent } from '../content/ContainerContent';
import '../../styles/app.css';

export type AppStateProps = {
  hasItemSelected: boolean,
};

export type AppDispatchProps = {
};

type AppProps = AppStateProps & AppDispatchProps;

export const App = (state: AppProps) => {
  return (
    <div className="browser app">
      <ContainerSearch />
      {state.hasItemSelected && <ContainerContent />}
    </div>
  );
};
