import React, { Component } from 'react'
import MarkerItem from '../MarkerItem/MarkerItem';

class MarkerTable extends Component {
    constructor() {
        super()
    }

    showMarkers = () => {
        const { markers } = this.props;
        return markers.map(item => <MarkerItem marker={item.value}/>)
    }

    render() {
        
        return (
            <>
                <ul>
                    {this.showMarkers()}
                </ul>
            </>
        )
    }
}

export default MarkerTable;