// src/components/Header.tsx
import * as React from 'react';
import {Anchor} from '../models/Models';
import {Social} from '../models/Models';

export interface Props {
    anchorItems: Anchor[];
    socialItems: Social[];
}
class Header extends React.Component<Props, object> {

    render() {
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
                            {
                                this.props.anchorItems.map(function (a,index) { return <li key={index}><a key={index} href={'#' + a.link}>{a.text}</a></li> })
                            }
                        </ul>
                    </nav>
                    <div className="social-menu">
                    {
                          this.props.socialItems.map(function (s, index) {
                            return (
                            <a key={index} href={s.link} target="_blank">
                              <i key={index} className={s.css}></i>
                            </a>)
                          })
                        }
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


}

export default Header;



