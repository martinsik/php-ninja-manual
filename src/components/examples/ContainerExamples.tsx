import { connect } from 'react-redux';
import { AppState, View } from '../../types/AppState';
import { changeView } from '../../actions/changeView';
import { selectExample } from '../../actions/selectExample';
import { Examples, ExamplesStateProps, ExamplesDispatchProps } from './Examples';

const mapStateToProps = (state: AppState): ExamplesStateProps => {
  const examples = state.examples[state.selectedItem.name];
  const selectedExample = state.selectedExample;

  return {
    examples,
    selectedExample,
  };
};

const mapDispatchToProps = (dispatch): ExamplesDispatchProps => {
  return {
    onBack: () => dispatch(changeView(View.Detail)),
    onSelectExample: (index: number) => dispatch(selectExample(index)),
  };
};

export const ContainerExamples = connect(
  mapStateToProps,
  mapDispatchToProps
)(Examples);
