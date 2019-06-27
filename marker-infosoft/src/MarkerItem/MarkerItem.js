import React from 'react';
import { removeMarker } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

const MarkerItem = ({marker, idx, removeMarker}) => {
    return  (
        <Draggable draggableId="draggable" index={idx}>
            {(provided) => (
                <li ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                >
                    {marker}
                    <button onClick={() => removeMarker(idx)}>&times;</button>
                </li>
            )}
            
        </Draggable>
    )
            
}

const mapDispatchToProps = dispatch => ({
    removeMarker: (idx) => dispatch(removeMarker(idx))
})

export default connect(null, mapDispatchToProps)(MarkerItem);