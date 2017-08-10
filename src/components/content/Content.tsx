import * as React from 'react';
import '../../styles/content.css';
import { Detail, ParamGroup, Param } from '../../types/Detail';

export type ContentStateProps = {
  detail: Detail,
  name: string,
  expandedParams: string[],
};

export type ContentDispatchProps = {
  onExpandParameterClick: (name: string) => void,
};

type ContentProps = ContentStateProps & ContentDispatchProps;

export const Content = (props: ContentProps) => {
  const detail = props.detail;
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

  return (
    <section className="content">
      {detail.params.map((group: ParamGroup, i: number) => (
        <div key={i} className="synopsis">
          <span className="return-value">{group.ret_type}</span>&nbsp;
          <span className="name">{group.name}</span> (
          <ul>
            {group.list.map((param: Param, j: number) => (
              <li key={j}>
                <span className="return-value">{param.type}</span>&nbsp;
                <span className="var-name">{param.var}</span>
                {j < group.list.length - 1 && <i>,&nbsp;</i>}
              </li>
            ))}
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
              className={props.expandedParams.indexOf(param.var) !== -1 ? 'expanded' : ''}
              onClick={() => props.onExpandParameterClick(param.var)}
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
              <li key={i}><a href="#">{name}</a>{i < detail.seealso.length - 1 && ', '}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
