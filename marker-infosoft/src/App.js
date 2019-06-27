import React, {Component} from 'react';
import './App.css';
import MainMap from './Map/Map';

import MarkerTable from './MarkerTable/MarkerTable';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <>
        <div className="main-container">
          <MarkerTable/>
          <MainMap/>
        </div>
        
      </>
    );
  }
}

const mapStateToProps = ({markers}) => ({
  markers
})



export default connect(mapStateToProps)(App);
