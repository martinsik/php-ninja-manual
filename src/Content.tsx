import * as React from 'react';
import './styles/content.css';

export default class Content extends React.Component<{}, {}> {

  render() {
    return (
      <section className="content">
        <p className="synopsis">
          <span className="return-value">mixed</span>
          <span className="name">str_replace</span> (
          <span className="return-value">mixed</span>
          <span className="var-name">$search</span> ,
          <span className="return-value">mixed</span>
          <span className="var-name">$replace</span> ,
          <span>mixed $subject</span>
          <span className="optional">[, int &npm;$count ]</span>
          )</p>

        <p className="description">Replace all occurrences of the search string with the replacement string</p>

        <ul className="parameters">
          <li>
            <span>mixed $search</span>
            <p>The value being searched for, otherwise known as the needle. An array may be used to designate multiple needles.</p>
          </li>
          <li className="expanded">
            <span>mixed $replace</span>
            <p>The replacement value that replaces found search values. An array may be used to designate multiple replacements.</p>
          </li>
          <li>
            <span>mixed $replace</span>
            <p>The replacement value that replaces found search values. An array may be used to designate multiple replacements.</p>
          </li>
        </ul>

        <p className="return">Lorem ipsum...</p>

        <div className="see-also">
          See also:
          <ul>
            <li><a href="#">str_ireplace</a>, </li>
            <li><a href="#">str_ireplace</a>, </li>
            <li><a href="#">str_ireplace</a></li>
          </ul>
        </div>
      </section>
    );
  }

}