import { Converter as MarkdownConverter } from 'showdown';

const converter = new MarkdownConverter({
  simpleLineBreaks: true,
});

export function makeMarkdown(source: string) {
  // transform `\n` to real line breaks
  source = source.replace(/\\n/g, '\n');

  return converter.makeHtml(source);
}
