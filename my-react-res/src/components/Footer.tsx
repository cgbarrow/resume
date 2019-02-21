// src/components/Footer.tsx

import * as React from 'react';
import { Social } from '../models/Models';

export interface Props {
    socialItems: Social[];
}

class Footer extends React.Component<Props, object> {

    render() {
        return (
            <footer className="footer-area padding-top black-bg">
                <div className="contact-area  section-padding" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="page-title">
                                    <h3>Like What You See?</h3>
                                    <h2>Contact</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="contact-info">
                                <a href="tel:289-219-0793"><h3>289 219 0793</h3></a>
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
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-area">
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <p>Resume maintained on
                    <a href="https://github.com/cgbarrow/resume" target="_blank"> GitHub</a></p>
                                <p>Copyright &copy; {new Date().getFullYear()} Christopher Barrow.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;



