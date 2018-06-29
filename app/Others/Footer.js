import React, { Component } from "react";
import { Link } from "react-router-dom";

import './others.css';

class Footer extends Component {
  render() {
    return (
        <footer className="mastfoot mt-auto text-center">
            <div className="inner">
                <p><small>node-react-boilerplate On</small> <a href="https://github.com/monzoor/node-react-boilerplate"> Github</a>, <small>by</small> <a href="https://www.facebook.com/mtamal">Monzoor</a>.</p>
            </div>

        </footer>
    );
  }
}

export default Footer;
