/// <reference path="../../../node_modules/@types/ace/index.d.ts" />
import * as React from 'react';
import { Example } from '../../types/Example';
import { AppState } from '../../types/AppState';

export type EditorStateProps = {
  example: Example;
};

export class Editor extends React.Component<EditorStateProps, AppState> {

  private editor: AceAjax.Editor;
  private defaultSource: string;

  componentDidMount() {
    console.log('componentDidMount');
    this.editor = ace.edit('example-editor');
    this.editor.setValue('<?php\n' + this.defaultSource);
    this.editor.session.setMode('ace/mode/php');
  }

  componentWillUnmount() {
    this.editor.destroy();
    console.log('componentWillUnmount');
  }

  render() {
    this.defaultSource = this.props.example.source;

    return (
      <div id="example-editor" />
    );
  }

}
