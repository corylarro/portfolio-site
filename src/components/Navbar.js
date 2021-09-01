import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';



function SiteNav(props) {
    return (
        <div>
            <Navbar color="dark" sticky="top">
                <NavbarBrand className="text-white " href="/">Cory Larro</NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink className="text-white" href="/">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="/">Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="/">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="/">Contact</NavLink>
                    </NavItem>
                    <div className="bg-light">
                        <a className="btn btn-social-icon btn-github" href="https://github.com/corylarro"><i className="fa fa-github" /></a>{' '}
                        <a className="btn btn-social-icon btn-linkedin" href="https://twitter.com/CoryLarro"><i className="fa fa-linkedin" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/CoryLarro"><i className="fa fa-twitter" /></a>{' '}
                    </div>
                </Nav>
            </Navbar>
        </div>
    );
}

export default SiteNav;
