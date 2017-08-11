import * as React from 'react';
import '../../styles/content.css';
import { Detail, ParamGroup, Param } from '../../types/Detail';

export type ContentStateProps = {
  detail: Detail,
  name: string,
  hoveredParam: string,
  expandedParams: string[],
};

export type ContentDispatchProps = {
  onExpandParameterClick: (name: string) => void,
  onShowDetail: (name: string) => void,
  onParameterHovered: (name?: string) => void,
};

type ContentProps = ContentStateProps & ContentDispatchProps;

export function Content(props: ContentProps) {
  const { detail, hoveredParam, expandedParams } = props;

  const mergedParams: { [key: string]: Param } = {};

  detail.params.forEach((group: ParamGroup) => {
    const keys = Object.keys(mergedParams);
    group.list.forEach((param: Param) => {
      if (keys.indexOf(param.var) === -1) {
        mergedParams[param.var] = param;
      }
    });
  });

  const mergeParamNames = Object.keys(mergedParams);

  function getParamLiClasses(name: string): string[] {
    const classes: string[] = [];
    if (name === hoveredParam) {
      classes.push('hovered');
    }
    if (expandedParams.indexOf(name) !== -1) {
      classes.push('expanded');
    }
    return classes;
  }

  // console.log(detail);

  return (
    <section className="content">
      {detail.params.map((group: ParamGroup, i: number) => (
        <div key={i} className="synopsis">
          <span className="return-value">{group.ret_type}</span>&nbsp;
          <span className="name">{group.name}</span> (
          <ul>
            {group.list.map((param: Param, j: number) => {
              const comma = (j < group.list.length - 1 && ',');
              const content = ([
                <span key={1} className="return-value">{param.type}</span>,
                '\u00A0',
                <span key={2} className="var-name">{param.var}</span>,
                comma,
              ]);

              if (param.desc.length > 0) {
                return (<li
                  key={j}
                  onClick={() => props.onExpandParameterClick(param.var)}
                  onMouseOver={() => props.onParameterHovered(param.var)}
                  onMouseOut={() => props.onParameterHovered()}
                  className={(hoveredParam === param.var) ? 'hovered' : ''}
                >
                  {content}
                </li>);
              } else {
                return <li key={j}>{content}</li>;
              }
            })}
          </ul>
          )
        </div>
      ))}

      <p className="description">{detail.desc}</p>

      <ul className="parameters">
        {mergeParamNames.map((name: string, i: number) => {
          const param = mergedParams[name];

          return (
            <li
              key={i}
              onClick={() => props.onExpandParameterClick(param.var)}
              onMouseOver={() => props.onParameterHovered(param.var)}
              onMouseOut={() => props.onParameterHovered()}
              className={getParamLiClasses(param.var).join(' ')}
            >
              <span>{param.type} {param.var}</span>
              <p>{param.desc}</p>
            </li>
          );
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
    </section>
  );
}
