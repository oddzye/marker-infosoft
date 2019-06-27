import React from 'react';
import { removeMarker } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import './MarkerItem.css'

const MarkerItem = ({marker, idx, removeMarker}) => {
    return  (
        <Draggable draggableId={marker} index={idx}>
            {provided => (
                <li 
                    className="marker-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {marker}
                    <button className="marker-btn" onClick={() => removeMarker(idx)}>&times;</button>
                </li>
            )}
            
        </Draggable>
    )
            
}

const mapDispatchToProps = dispatch => ({
    removeMarker: (idx) => dispatch(removeMarker(idx))
})

export default connect(null, mapDispatchToProps)(MarkerItem);