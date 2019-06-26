import React, { Component } from 'react'
import MarkerItem from '../MarkerItem/MarkerItem';
import { connect } from 'react-redux'
class MarkerTable extends Component {
    showMarkers = () => {
        const { markers } = this.props;
        return markers.map((item, idx) => <MarkerItem  key={idx} marker={item.markerName}/>)
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

const mapStateToProps = ({markers: {markers}}) => ({
    markers
  })

export default connect(mapStateToProps)(MarkerTable);