import React from 'react';
import {Navbar, Nav, NavItem, NavLink, Jumbotron} from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';



function SiteNav(props) {
    return (
        <div>
            <Jumbotron fluid>
                <br />
                <h1 className="display-1 text-left">Cory Larro</h1>
                <br />
            <Navbar sticky="top">
                <Nav>
                    <NavItem>
                        <NavLink className="text-dark" href="/">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-dark" href="/">Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-dark" href="/">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-dark" href="/">Contact</NavLink>
                    </NavItem>
                        <a className="btn btn-social-icon btn-github" href="https://github.com/corylarro"><i className="fa fa-github" /></a>{' '}
                        <a className="btn btn-social-icon btn-linkedin" href="https://twitter.com/CoryLarro"><i className="fa fa-linkedin" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/CoryLarro"><i className="fa fa-twitter" /></a>{' '}
                    
                </Nav>
            </Navbar>
            </Jumbotron>
        </div>
    );
}

export default SiteNav;
