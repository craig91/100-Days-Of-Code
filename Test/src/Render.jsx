import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Hello from '../components/hello.jsx';
import Seconds from '../components/seconds.jsx';

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
       </div>
    </Router>,
    document.getElementById('root')
);