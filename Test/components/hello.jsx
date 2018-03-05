import React from 'react';
import { Link } from 'react-router-dom';
import Display from '../src/Render.jsx';


class Hello extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
};

export default Hello;