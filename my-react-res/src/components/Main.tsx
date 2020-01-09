// src/components/Main.tsx

import * as React from 'react';
import Position from '../components/Position';
import {PositionInfo} from "../models/Models";
import { Bio } from '../models/Models';
import { Social } from '../models/Models';

export interface Props {
  bio: Bio;
  socialItems: Social[];
  positionItems: PositionInfo[];
}

class Main extends React.Component<Props, object> {

  render() {
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
                    <h2>{this.props.bio.name}</h2>
                    <p className="title">{ this.props.bio.title}</p>
                    <div className="about-address">
                      <p>
                        <strong>Nationality: </strong> { this.props.bio.address.nationality}</p>
                      <p>
                        <strong>Address: </strong> { this.props.bio.address.city + ", " + this.props.bio.address.province }</p>
                      <p>
                        <strong>Phone: </strong><a href={'tel:' + this.props.bio.address.phonenumber}>{this.props.bio.address.phonetext}</a></p>
                      <div className="share-menu">
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
              <div className="col-xs-12 col-md-6">
                <div className="about-text wow fadeIn">
                  <h3>{this.props.bio.tagline}</h3>
                  <p>{this.props.bio.par1}</p>
                  <p>{this.props.bio.par2}</p>
                  <p>
                    <a href="#" className="check alignleft">{this.props.bio.pitch}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-area section-padding black-bg" id="tibits">
          <div className="container img-full">
            
            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <h3>tibits</h3>
                  <h2>Highlights</h2>
                </div>
              </div>
            </div>

            <div>
            {
              this.props.positionItems.map(function (p, index) {
                return (
                  <Position key={index} projectItem={p}/>)
              })
            }
            </div>

          
            <div className="row">
              <div className="col-xs-12 text-center">
                <a href="#" id="project_more" className="battn see-more">See more tibits</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Main;
