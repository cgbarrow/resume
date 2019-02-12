import * as React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {plainToClass} from "class-transformer";
import "reflect-metadata";
import resumeJson from './store/store.json';
import {Anchor} from './models/Models';
import {Social} from './models/Models';

let menu = plainToClass(Anchor,resumeJson.resume.menu);
let social = plainToClass(Social,resumeJson.resume.social);

class App extends React.Component {
  public render() {

    return (
        <div>
          <Header anchorItems={menu} socialItems={social}/>
          <Main />
          <Footer />
        </div>
    );
  }
}

export default App;
