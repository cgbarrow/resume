import * as React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {plainToClass} from "class-transformer";
import "reflect-metadata";
import resumeJson from './store/store.json';
import {Anchor} from './models/Models';
import {Social} from './models/Models';
import {Bio} from './models/Models'; 
import {PositionInfo} from './models/Models'; 

let menu = plainToClass(Anchor,resumeJson.resume.menu);
let social = plainToClass(Social,resumeJson.resume.social);
let bio = plainToClass(Bio,resumeJson.resume.bio);
let positions = plainToClass(PositionInfo,resumeJson.resume.positions);

class App extends React.Component {
  public render() {

    return (
        <div>
          <Header anchorItems={menu} socialItems={social}/>
          <Main bio={bio} socialItems={social} positionItems={positions}/>
          <Footer socialItems={social}/>
        </div>
    );
  }
}

export default App;
