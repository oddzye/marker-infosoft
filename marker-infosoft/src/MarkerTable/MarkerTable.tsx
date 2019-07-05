import React from 'react'
import MarkerItem from '../MarkerItem/MarkerItem';
import { connect } from 'react-redux';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import { reorderMarkerList } from '../actions/actionCreators';
import CreateMarkerInput from '../CreateMarkerInput/CreateMarkerInput';
import PropTypes from 'prop-types';
import './MarkerTable.css'





const MarkerTable = (props) => {
        return (
            <div className="marker-from__container">
                <CreateMarkerInput />
                <DragDropContext onDragEnd={(result) => dragEndHandler(result, props)}>
                <Droppable droppableId="droppable">
                    {provided => (
                        <ul
                            className="marker-list"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {showMarkers(props)}
                            {provided.placeholder}
                        </ul>
                        
                    )}
                </Droppable> 
                </DragDropContext> 
            </div>
        )
    
}

const dragEndHandler = (result, props) => {
    const { reorderMarkerList } = props;
    if (!result.destination) {
        return;
    }

    reorderMarkerList(result.source.index, result.destination.index)
}

const showMarkers = (props) => {
    const { markers } = props;
    return markers.map((item, idx) =>
        <MarkerItem  key={idx} idx={idx} marker={item.markerName}/>
     )
}

const mapStateToProps = ({markers}) => ({
    markers
  })

const mapDispatchToProps = dispatch => ({
    reorderMarkerList: (startIndex, endIndex) => dispatch(reorderMarkerList(startIndex, endIndex))
})

MarkerTable.propTypes = {
    markers: PropTypes.array.isRequired,
    reorderMarkerList: PropTypes.func.isRequired
}



export default connect(mapStateToProps, mapDispatchToProps)(MarkerTable);