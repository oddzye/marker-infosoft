import React from 'react';
import { YMaps, Map, Placemark, Polyline} from 'react-yandex-maps';

const MainMap = (props) => {
    console.log(props.markers)
    return (
        <YMaps>
            <Map width={800} height={600} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
                {showMarkers(props.markers)}
                {showPolylines(props.markers)}
            </Map>
        </YMaps>
    )
}

const showMarkers = (markersArr) => {
    return markersArr.map(item => <Placemark options={{draggable: true}} geometry={item.coords} />)
}

const showPolylines = (markersArr) => {
    return markersArr.length >= 2 ? markersArr.map((item, idx, markers) => <Polyline 
                    geometry={[item.coords, markers[idx].coords]}
                    options={{
                        balloonCloseButton: false,
                        strokeColor: '#000',
                        strokeWidth: 4,
                        strokeOpacity: 0.5,
                    }}/>) : null;
}


export default MainMap;