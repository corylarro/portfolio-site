import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5 className="font-link pt-3">Links</h5>
                        <ul className="list-unstyled">
                            <li><a className="text-white font-link" style={{ textDecoration: 'none' }} href="#about">About</a></li>
                            <li><a className="text-white font-link" style={{ textDecoration: 'none' }} href="#stack">Tech Stack</a></li>
                            <li><a className="text-white font-link" style={{ textDecoration: 'none' }} href="#projects">Projects</a></li>
                            <li><a className="text-white font-link" style={{ textDecoration: 'none' }} href="#contact" >Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5 className="font-link pt-3">Let's Connect</h5>
                        <a className="btn btn-social-icon btn-github" href="https://github.com/corylarro"><i className="fa fa-github text-white" /></a>{' '}
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/cory-larro/"><i className="fa fa-linkedin text-white" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/CoryLarro"><i className="fa fa-twitter text-white" /></a>{' '}
                    </div>
                    <div className="col-sm-4 text-center">
                    <h5 className="font-link pt-3">Email</h5>
                        <a role="button" className="btn btn-link text-white" href="mailto:cory.larro@gmail.com"><i className="fa fa-envelope-o" /> cory.larro@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;