import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Nav extends Component {
     state = {
          burgerActive: false,
          burgerEndClass: "navbar-menu",
          burgerBurgerClass: "navbar-burger burger"
     };

     onBurgerClick = event => {
          event.preventDefault();

          if (!this.state.burgerActive) {
               this.setState({
                    burgerActive: true,
                    burgerEndClass: "navbar-menu is-active navbarCustomActive",
                    burgerBurgerClass: "navbar-burger burger is-active"
               });
          } else {
               this.setState({
                    burgerActive: false,
                    burgerEndClass: "navbar-menu",
                    burgerBurgerClass: "navbar-burger burger"
               });
          }
     };

     render() {
          return (
               <nav
                    className="navbar is-black"
                    role="navigation"
                    aria-label="main navigation"
               >
                    <div className="navbar-brand">
                         <Link className="logo" to="/">
                              <b to="/">>Destiny Debate Hub</b>
                         </Link>

                         <a
                              role="button"
                              className={this.state.burgerBurgerClass}
                              aria-label="menu"
                              aria-expanded="false"
                              data-target="navbarBasicExample"
                              onClick={this.onBurgerClick}
                         >
                              <span aria-hidden="true" />
                              <span aria-hidden="true" />
                              <span aria-hidden="true" />
                         </a>
                    </div>

                    <div
                         id="navbarBasicExample"
                         className={this.state.burgerEndClass}
                    >
                         <div className="navbar-end">
                              {/* <Link className="navbar-item" to="/about">
                                   <a>about</a>
                              </Link> */}

                              <Link className="navbar-item" to="/featured">
                                   <a>featured</a>
                              </Link>
                              <Link className="navbar-item" to="/topics">
                                   <a>topics</a>
                              </Link>
                              <Link className="navbar-item" to="/press">
                                   <a>press</a>
                              </Link>
                         </div>
                         <div className="spacer"></div>
                    </div>
               </nav>
          );
     }
}

export default Nav;
