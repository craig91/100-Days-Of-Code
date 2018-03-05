import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Hello from '../components/hello.jsx';
import Seconds from '../components/seconds.jsx';
import FsNav from '../components/fs_Navigation.jsx';

import '../css/_main.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
      <div>
        <Link to="/hello">Hello</Link>
        <br />
        <Link to="/Timer">Timer</Link>
        <br />
        <Link to="/Navi">Full Width Navigation</Link>
        {this.props.children}
      </div>
    )
  }
}


ReactDOM.render(
    <Router>
      <div>
        <Route exact path='/' component={Display} />
        <Route path = '/Hello' component={Hello} />
        <Route path = '/Timer' component={Seconds} />
        <Route path = '/Navi' component={FsNav} />
       </div>
    </Router>,
    document.getElementById('root')
);