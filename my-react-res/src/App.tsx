import * as React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
  public render() {
    return (
        <div>
          <Header/>
          <Main name="React And TypeScript" enthusiasmLevel={10} />
          <Footer />
        </div>
    );
  }
}

export default App;
