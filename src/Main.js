import React, { Component } from "react";
import { Route, NavLink, HashRouter, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <Link className="logo" to="/">
              Varun Venkatesh
            </Link>
          </div>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />

            <Route path="/About" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
