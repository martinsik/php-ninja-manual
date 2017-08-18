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
    const editor = ace.edit('example-editor');
    editor.session.setMode('ace/mode/php');
    editor.setFontSize('15px');
    editor.$blockScrolling = Infinity;
    // We need to set the font family and size also here to match CSS.
    editor.setOptions({
      fontFamily: 'Inconsolata',
    });
    this.editor = editor;

    this.setEditorSource(this.defaultSource);
  }

  componentWillUnmount() {
    this.editor.destroy();
  }

  render() {
    this.defaultSource = this.props.example.source;
    if (this.editor) {
      this.setEditorSource(this.props.example.source);
    }

    return (
      <div id="example-editor" />
    );
  }

  private setEditorSource(source: string) {
    const phpSource = '<?php\n' + source;
    this.editor.setValue(phpSource);
    this.editor.clearSelection();
  }

}
