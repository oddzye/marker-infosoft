import React, { Component } from 'react';
import { YMaps, Map, Placemark, Polyline} from 'react-yandex-maps';
import { markerPositionChanged } from '../actions/actionCreators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const MainMap = (props) => {
    const { markers } = props;
    return (
        <YMaps >
            <Map width={1200} height={700} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
                {showMarkers(markers, props)}
                {showPolylines(markers)}
            </Map>
        </YMaps>
    )
}

const onDragEndHandler = (e, markerIdx, markerItem, props) => {
    const { markerPositionChanged } = props;
    const coords = e.originalEvent.target.geometry.getCoordinates();
    markerPositionChanged(coords, markerIdx, markerItem);
}

const showMarkers = (markersArr, props) => markersArr.map((marker, idx) => (
    <Placemark  
        modules={['geoObject.addon.balloon']} 
        properties={{ balloonContent: marker.markerName}} 
        key={idx}
        onDragEnd={(e) => onDragEndHandler(e, idx, marker, props)} 
        options={{draggable: true}}
        geometry={marker.coords} 
    />
))

const showPolylines = markersArr => {
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

const mapStateToProps = ({markers}) => ({
    markers
  })

const mapDispatchToProps = dispatch => ({
    markerPositionChanged: (coords, markerIdx, markerItem) => dispatch(markerPositionChanged(coords, markerIdx, markerItem))
})

MainMap.propTypes = {
    markers: PropTypes.array.isRequired,
    markerPositionChanged: PropTypes.func.isRequired
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MainMap);