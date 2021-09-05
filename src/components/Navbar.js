import React from 'react';
import {Navbar, Nav, NavItem, Jumbotron} from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { Link } from 'react-router-dom';



function SiteNav(props) {
    return (
        <div>
            <Jumbotron fluid sticky="top">
                <br />
                <h1 className="display-1 text-left font-link">Cory Larro</h1>
            <Navbar sticky="top">
                <Nav>
                    <NavItem>
                        <Link className="text-dark navBarLink font-link" to="/about">About</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="text-dark navBarLink font-link" to="/skills">Tech Stack</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="text-dark navBarLink font-link" to="/projects">Projects</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="text-dark navBarLink font-link" to="/contact">Contact</Link>
                    </NavItem>
                </Nav>
            </Navbar>
            </Jumbotron>
        </div>
    );
}

export default SiteNav;

