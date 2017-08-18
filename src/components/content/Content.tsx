import * as React from 'react';
import * as classnames from 'classnames';
import { makeMarkdown } from '../../utils/markdown';
import '../../styles/content.css';
import { Detail, ParamGroup, Param } from '../../types/Detail';

export type ContentStateProps = {
  detail: Detail,
  name: string,
  hoveredParam: string,
  examplesCount: number,
  expandedDescription: boolean,
  expandedParams: string[],
};

export type ContentDispatchProps = {
  onExpandParameterClick: (name: string) => void,
  onShowDetail: (name: string) => void,
  onParameterHovered: (name?: string) => void,
  onToggleDescription: () => void,
  onShowExamples: () => void,
};

type ContentProps = ContentStateProps & ContentDispatchProps;

export function Content(props: ContentProps) {
  const { detail, hoveredParam, expandedParams } = props;
  const mergedParams: { [key: string]: Param } = {};

  // console.log(detail);

  detail.params.forEach((group: ParamGroup) => {
    const keys = Object.keys(mergedParams);
    group.list.forEach((param: Param) => {
      if (keys.indexOf(param.var) === -1) {
        mergedParams[param.var] = param;
      }
    });
  });

  const mergeParamNames = Object.keys(mergedParams);
  const forceLongDescription = detail.long_desc.length < 100;
  let description = forceLongDescription || props.expandedDescription ? detail.long_desc : detail.desc;

  return (
    <section className="content">
      {detail.params.map((group: ParamGroup, i: number) => (
        <div key={i} className="synopsis">
          <span className="return-value">{group.ret_type}</span>&nbsp;
          <span className="name">{group.name}</span> (
          <ul>
            {group.list.map((param: Param, j: number) => {
              const classes = classnames({
                hovered: hoveredParam === param.var,
              });

              const content = ([
                <span key={1} className="return-value">{param.type}</span>, '\u00A0',
                <span key={2} className="var-name">{param.var}</span>, (j < group.list.length - 1 && ','),
              ]);

              if (param.desc.length > 0) {
                return (
                  <li
                    key={j}
                    onClick={() => props.onExpandParameterClick(param.var)}
                    onMouseOver={() => props.onParameterHovered(param.var)}
                    onMouseOut={() => props.onParameterHovered()}
                    className={classes}
                  >
                    {content}
                  </li>);
              } else {
                return <li key={j} className="inactive">{content}</li>;
              }
            })}
          </ul>)
        </div>
      ))}

      <div className="description">
        <div dangerouslySetInnerHTML={{__html: makeMarkdown(description)}}/>
        {!forceLongDescription && detail.long_desc.length > 0 &&
          <a
            href="#"
            className="more-less"
            onClick={e => {
              props.onToggleDescription();
              e.preventDefault();
            }}
          >{props.expandedDescription ? 'show less' : 'show more'}
          </a>
        }
      </div>

      <ul className="list">
        {mergeParamNames.map((name: string, i: number) => {
          const param = mergedParams[name];
          const classes = classnames({
            hovered: hoveredParam === param.var,
            active: expandedParams.indexOf(name) !== -1,
          });
          const content = ([
            <span key={1}>{param.type} {param.var}</span>,
            <p key={2} dangerouslySetInnerHTML={{__html: makeMarkdown(param.desc)}}/>
          ]);

          if (param.desc.length > 0) {
            return (
              <li
                key={i}
                onClick={() => props.onExpandParameterClick(param.var)}
                onMouseOver={() => props.onParameterHovered(param.var)}
                onMouseOut={() => props.onParameterHovered()}
                className={classes}
              >
                {content}
              </li>);
          } else {
            return <li key={i} className="inactive">{content}</li>;
          }
        })}
      </ul>

      <p className="return">{detail.ret_desc}</p>

      {detail.seealso && detail.seealso.length > 0 && (
        <div className="see-also">
          See also: <ul>
            {detail.seealso.map((name: string, i: number) => (
              <li key={i}>
                <a href="#" onClick={e => { props.onShowDetail(name); e.preventDefault(); }}>
                  {name}
                </a>
                {i < detail.seealso.length - 1 && ', '}
              </li>
            ))}
          </ul>
        </div>
      )}

      {props.examplesCount > 0 ? (
        <button className="examples" onClick={() => props.onShowExamples()}>
          Show {props.examplesCount} example{props.examplesCount > 1 ? 's' : ''}
        </button>
      ) : ''}
    </section>
  );
}
