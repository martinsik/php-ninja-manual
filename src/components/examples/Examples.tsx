import * as React from 'react';
import { Example } from '../../types/Example';
import { Editor } from './Editor';

import '../../styles/examples.css';

export type ExamplesStateProps = {
  examples: Example[];
  selectedExample: number;
};

export type ExamplesDispatchProps = {
  onBack: () => void
  onSelectExample: (index: number) => void,
};

type ExamplesProps = ExamplesStateProps & ExamplesDispatchProps;

export function Examples(props: ExamplesProps) {
  return (
    <section className="examples">
      <p>{props.selectedExample + 1}. {props.examples[props.selectedExample].title}</p>

      <Editor example={props.examples[props.selectedExample]} />

      <ul className="list">
        {props.examples.map((example: Example, i: number) => (
            <li
              key={i}
              onClick={() => props.onSelectExample(i)}
              className={props.selectedExample === i ? 'active' : ''}
            >
              {i + 1}. {example.title}
            </li>
        ))}
      </ul>

      <button className="examples" onClick={() => props.onBack()}>Back</button>
    </section>
  );
}
