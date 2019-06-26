import React, {Component} from 'react';
import './App.css';
import MainMap from './Map/Map';
import CreateMarkerInput from './CreateMarkerInput/CreateMarkerInput';
import MarkerTable from './MarkerTable/MarkerTable';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <>
        <CreateMarkerInput />
        <MarkerTable/>
        <MainMap/>
      </>
    );
  }
  
}

const mapStateToProps = ({markers: {markers}}) => ({
  markers
})



export default connect(mapStateToProps)(App);
