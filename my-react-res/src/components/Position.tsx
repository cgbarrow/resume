// src/components/Main.tsx

import * as React from 'react';
import { PositionInfo } from '../models/Models';

export interface Props {
  projectItem: PositionInfo;
}

class Position extends React.Component<Props, object> {

  render() {
    return (
      <div className="row project">
        <div className="col-xs-12 col-md-7">
          <div className="single-project">
            <div className="project-photo">
              <img src={'images/' + this.props.projectItem.image} alt={this.props.projectItem.alt} />
            </div>
            <div className="project-details wow fadeInLeft" data-style="opacity: .9">
              <h3>{this.props.projectItem.title}</h3>
              <p>{this.props.projectItem.par1}</p>
              <p>{this.props.projectItem.par2} </p>
              <p>{this.props.projectItem.par3}</p>
              <a target="_blank" href={this.props.projectItem.link}>{this.props.projectItem.ltext}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Position;
