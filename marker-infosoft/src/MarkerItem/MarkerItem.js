import React from 'react';
import { removeMarker } from '../actions/actionCreators';
import { connect } from 'react-redux';

const MarkerItem = ({marker, idx, removeMarker}) => {
    return  <li>
                {marker}
                <button onClick={() => removeMarker(idx)}>&times;</button>
            </li>
}

const mapDispatchToProps = dispatch => ({
    removeMarker: (idx) => dispatch(removeMarker(idx))
})

export default connect(null, mapDispatchToProps)(MarkerItem);