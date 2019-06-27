import React, { Component } from 'react';
import { YMaps, Map, Placemark, Polyline} from 'react-yandex-maps';
import { markerPositionChanged } from '../actions/actionCreators';
import { connect } from 'react-redux';
class MainMap extends Component {

    showMarkers = markersArr => markersArr.map((marker, idx) => (
        <Placemark  
            modules={['geoObject.addon.balloon']} 
            properties={{ balloonContent: marker.markerName}} 
            key={idx}
            onDragEnd={(e) => this.onDragEndHandler(e, idx, marker)} 
            options={{draggable: true}}
            geometry={marker.coords} 
        />
    ))
      
    onDragEndHandler = (e, markerIdx, markerItem) => {
        const { markerPositionChanged } = this.props;
        const coords = e.originalEvent.target.geometry.getCoordinates();
        markerPositionChanged(coords, markerIdx, markerItem);
    }

    showPolylines = (markersArr) => {
        const drawPolylinesMinMarkersCount = 2; 
        return markersArr.length >= drawPolylinesMinMarkersCount ? markersArr.map((item, idx, markers) => {
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
        return (
            <YMaps >
                <Map width={1200} height={700} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
                    {this.showMarkers(markers)}
                    {this.showPolylines(markers)}
                </Map>
            </YMaps>
        )
    }
    
    
}

const mapStateToProps = ({markers}) => ({
    markers
  })

const mapDispatchToProps = dispatch => ({
    markerPositionChanged: (coords, markerIdx, markerItem) => dispatch(markerPositionChanged(coords, markerIdx, markerItem))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(MainMap);