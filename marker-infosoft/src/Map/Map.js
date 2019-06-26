import React, { Component } from 'react';
import { YMaps, Map, Placemark, Polyline} from 'react-yandex-maps';

class MainMap extends Component {
    constructor() {
        super()
    }

    showMarkers = markersArr => markersArr.map((marker, idx) => (
        <Placemark key={idx} onDragEnd={(e) => this.onDragEndHandler(e, idx, marker)} options={{draggable: true}} geometry={marker.coords} />
    ))
      

    onDragEndHandler = (e, markerIdx, markerItem) => {
        const { onMarkerPositionChanged } = this.props;
        const coords = e.originalEvent.target.geometry.getCoordinates();
        onMarkerPositionChanged(coords, markerIdx, markerItem);
    }

    showPolylines = (markersArr) => {
        return markersArr.length >= 2 ? markersArr.map((item, idx, markers) => {
            if (idx >= markers.length - 1) return null;
            return <Polyline
                key={idx} 
                geometry={[item.coords, markers[idx + 1].coords]}
                options={{
                    balloonCloseButton: false,
                    strokeColor: '#000',
                    strokeWidth: 4,
                    strokeOpacity: 0.5,
                }}/>
        }) 
        : null;
    }

    render() {
        const { markers } = this.props;
        console.log(this.props);
        return (
            <YMaps >
                <Map onLoad={ymaps => console.log(ymaps)} width={800} height={600} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
                    {this.showMarkers(markers)}
                    {this.showPolylines(markers)}
                </Map>
            </YMaps>
        )
    }
    
    
}


export default MainMap;