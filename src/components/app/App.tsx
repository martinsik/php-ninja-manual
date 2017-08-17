import * as React from 'react';
import { View } from '../../types/AppState';
import { Example } from '../../types/Example';
import { ContainerSearch } from '../search/ContainerSearch';
import { ContainerContent } from '../content/ContainerContent';
import { ContainerExamples } from '../examples/ContainerExamples';
import '../../styles/app.css';

export type AppStateProps = {
  hasItemSelected: boolean,
  view: View,
  examples: Example[],
};

export type AppDispatchProps = {
};

type AppProps = AppStateProps & AppDispatchProps;

export const App = (props: AppProps) => {
  return (
    <div className="browser app">
      <ContainerSearch />
      {props.view === View.Detail && props.hasItemSelected && <ContainerContent />}
      {props.view === View.Examples && <ContainerExamples />}
    </div>
  );
};
