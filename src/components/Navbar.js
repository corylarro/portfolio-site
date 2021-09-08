import React from 'react';
import {Navbar, Nav, NavItem } from 'reactstrap';
import 'bootstrap-social/bootstrap-social.css';




function SiteNav(props) {
    return (
        <Navbar sticky="top" className="site-nav d-flex justify-content-around">
            <Nav>
                <NavItem>
                    <a className="navBarLink font-link" style={{ textDecoration: 'none' }} href="#about">About</a>
                </NavItem>
                <NavItem>
                    <a className="navBarLink font-link" style={{ textDecoration: 'none' }} href="#stack">Tech Stack</a>
                </NavItem>
                <NavItem>
                    <a className="navBarLink font-link" style={{ textDecoration: 'none' }} href="#projects">Projects</a>
                </NavItem>
                <NavItem>
                    <a className="navBarLink font-link" style={{ textDecoration: 'none' }} href="#contact">Contact</a>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default SiteNav;

