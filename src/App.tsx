import * as React from 'react';
import Search from './Search';
import Content from './Content';
import './styles/app.css';

// const logo = require('./logo.svg');

export default class App extends React.Component<{}, {}> {

  // componentDidMount() {
  //   console.log(this.props);
  //   console.log(this.context.store);
  //   // this.props.getAuth()
  // }

  render() {
    return (
      <div className="browser app">
        <Search />
        <Content />
      </div>
    );
  }

}
