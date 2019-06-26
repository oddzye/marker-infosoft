import React, {Component} from 'react';
import './App.css';
import MainMap from './Map/Map';
import CreateMarkerInput from './CreateMarkerInput/CreateMarkerInput';
import MarkerTable from './MarkerTable/MarkerTable';

class App extends Component {
  constructor(){
    super()

    this.state = {
      markers: []
    }
  }

  onMarkerPositionChanged = (coords, idx, item) => {
    this.setState((state) => ({
      markers: [
        ...state.markers.slice(0, idx),
        {value: item.value, coords},
        ...state.markers.slice(idx + 1)
      ]
    }))
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
        <MainMap onMarkerPositionChanged={this.onMarkerPositionChanged} markers={markers}/>
      </>
    );
  }
  
}


export default App;
