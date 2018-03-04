import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import Hello from '../components/hello.jsx';
import Seconds from '../components/seconds.jsx';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
      <div>
        {this.props.children}
      </div>
    )
  }
}


ReactDOM.render(
    <Router>
      <Route path='/' component={Display}>
       {/* <IndexRoute component={Hello} /> */}
       <Route path = '/Hello' component={Hello} />
       <Route path = '/Timer' component={Seconds} />
      </Route>
    </Router>,
    document.getElementById('root')
);