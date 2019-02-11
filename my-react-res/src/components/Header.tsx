// src/components/Top.tsx

import * as React from 'react';

function Header() {

  return (
    <header className="header-area" id="home">
      <div className="header-bg"></div>
      <div className="menu-icon">
        <div id="nav-icon1">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="mainmenu-area">
            <nav className="mainmenu" id="mainmenu">
                <ul className="nav navbar-nav" data-style="padding-left:10px !important;">
                    <li className="active">
                        <a href="#home">home</a>
                    </li>
                    <li>
                        <a href="#about">who am I</a>
                    </li>
                    <li>
                        <a href="#tibits">tibits</a>
                    </li>
                    <li>
                        <a href="#skills">skills</a>
                    </li>
                    <li>
                        <a href="#experience">experience</a>
                    </li>
                    <li>
                        <a href="#learning">learning</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </nav>
            <div className="social-menu">
                <a href="https://twitter.com/cgordonbarrow" target="_blank">
                    <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/christophergbarrow/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/cgbarrow/resume" target="_blank">
                    <i className="fa fa-github"></i>
                </a>
            </div>
        </div>
        <div className="header-text-area">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 col-md-offset-1">
                        <div className="header-text wow fadeInUp">
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">Hello&#33;&#33;</h1>
                            <p className="wow fadeInUp"> &nbsp;
                                <span id="type"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;



