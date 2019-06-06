import React, {Component} from 'react';
import './App.css';
import MainMap from './Map/Map';
import CreateMarkerInput from './CreateMarkerInput/CreateMarkerInput';
import MarkerTable from './MarkerTable/MarkerTable';

class App extends Component {
  constructor(){
    super()

    this.state = {
      markers: ['Marker1', 'Marker2']
    }
  }

  onAddMarker = (value) => {
    this.setState({
      markers: [...this.state.markers, value]
    })
  }

  render() {
    return (
      <>
        <CreateMarkerInput addMarkerHandle={this.onAddMarker} />
        <MarkerTable markers={this.state.markers}/>
        <MainMap/>
      </>
    );
  }
  
}


export default App;
