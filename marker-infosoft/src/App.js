import React, {Component} from 'react';
import './App.css';
import MainMap from './Map/Map';
import CreateMarkerInput from './CreateMarkerInput/CreateMarkerInput';
import MarkerTable from './MarkerTable/MarkerTable';

class App extends Component {
  constructor(){
    super()

    this.state = {
      markers: [{value: 'Marker1', coords: [55.756, 37.576]}, {value: 'Marker2', coords: [55.752, 37.571]}]
    }
  }

  onAddMarker = (value) => {
    this.setState({
      markers: [...this.state.markers, {value: value, coords: [55.75, 37.57]}]
    })
  }

  render() {
    const { markers } = this.state; 
    return (
      <>
        <CreateMarkerInput addMarkerHandle={this.onAddMarker} />
        <MarkerTable markers={markers}/>
        <MainMap markers={markers}/>
      </>
    );
  }
  
}


export default App;
