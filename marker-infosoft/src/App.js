import React, {Component} from 'react';
import './App.css';
import MainMap from './Map/Map';
import MarkerTable from './MarkerTable/MarkerTable';


class App extends Component {
  render() {
    return (
        <div className="main-container">
          <MarkerTable/>
          <MainMap/>
        </div>
    );
  }
}

export default App;
