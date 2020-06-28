import React, {useState} from "react";
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {useLocation} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

import {nav} from "../../data";
import logo from "../../images/logo/logo.png";
import logoAlt from "../../images/logo/logo-alt.png";

export const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  let location = useLocation();

  const scrollToTop = () => {
    document.getElementById("top").scrollIntoView();
  }

  return (
    <nav className={"navigation fixed-top" + (location.pathname !== "/SET-Hacks/" ? " alt" : "")}>
      <div className="container p-0">
        <Navbar light expand={"lg"}>
          <HashLink to="/SET-Hacks/" onClick={scrollToTop} className="brand navbar-brand mr-auto">
            <img src={(location.pathname !== "/SET-Hacks/" ? logoAlt : logo)} height="50" width="auto" alt="SET Hacks Logo"/>
          </HashLink>
          <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar className="ml-auto">
              {nav.map((item) => (
                  <NavItem key={item.name}>
                    <HashLink smooth to={item.target} className="nav-link link">
                      {item.name}
                    </HashLink>
                  </NavItem>
              ))}
              <NavItem>
                <NavLink
                    href="https://docs.google.com/forms/d/e/1FAIpQLScympeV459hUZBsdHdKGLD48_QO2w2C0wg0MiEReZwVaUKfow/viewform"
                    className="button"
                    style={(location.pathname !== "/SET-Hacks/" ? {color: "#5243aa"} : {color: "#fff"})}>
                  Register
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </nav>
  );
}
