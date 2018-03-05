import React from 'react';
import Display from '../src/Render.jsx';
import { Link } from 'react-router-dom';

class FsNav extends React.Component {
    render() {
        return (
            <div>
                <div id="side-nav" className="Nav">
                    <center><a href="javascript:void(0)" className="closebtn" onClick={this.onClose}>Close</a></center>
                    <center><a href="#">Home</a></center>
                    <br />
                    <center><a href="#">About</a></center>
                    <br />
                    <center><a href="#">Contact</a></center>
                    <br />
                    <center><a href="#">Blog</a></center>
                </div>

                <button onClick={this.onOpen}>Click Here</button>
                <br />
                <Link to='/'> Home </Link>

                <div id="main">
                    <center><h1>Full width navigation</h1></center>
                </div>
            </div>
        )
    }

    onOpen() {
        document.getElementById("side-nav").style.width = "100%";
    }
    onClose() {
        document.getElementById("side-nav").style.width = "0%"
    }
}

export default FsNav;