// src/components/Main.tsx

import * as React from 'react';

export interface Props {
  name: string;

}

function Main() {
  

  return (
    <div>
      <section className="about-area section-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="page-title">
                <h3>Who</h3>
                <h2>Am i&#63;</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-photo wow fadeInLeft img-full">
                <img src="images/about-photo.jpg" alt="" />
                <div className="about-desc">
                  <h2>Christopher Barrow</h2>
                  <p className="title">Passionate UX &amp; IT Professional</p>
                  <div className="about-address">
                    <p>
                      <strong>Nationality: </strong> Proudly Canadian!</p>
                    <p>
                      <strong>Address: </strong> 8454 Kelsey Crescent, NF</p>
                    <p>
                      <strong>Phone: </strong>(289) 219 0793</p>
                    <div className="share-menu">
                      <a href="https://twitter.com/cgordonbarrow" target="_blank">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/christophergbarrow/" target="_blank">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="https://github.com/cgbarrow/resume" target="_blank">
                        <i className="fa fa-github"></i>
                      </a>
                      <a href="mailto:christopherbarrow@gmail.com">
                        <i className="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text wow fadeIn">
                <h3>I have held many positions in my career, but at their core there has been a single constant: a passion to think differently.
                            </h3>
                <p>It has been suggested in more than one tech circle that skill sets such as entrepreneurship, innovation and disruption can
                    only be cultivated in start-ups; free from the bureaucratic processes of large traditional organizations. These are not
                    skill sets. They are a mind set. They come from the soul. They are a result of one's passion to think outside of what is considered to be rationale
                            or safe.</p>
                <p>Passion is what allows me to think differently regardless of my working environment. Passion enables me to embrace change. Passion drives me to take risks, learn from my failures, and lead by example.</p>
                <p>
                  <a href="#" className="check alignleft">Passion innovates and inspires. A perfect fit for Manager, Innovation Lab, LTC Digital Garage.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
