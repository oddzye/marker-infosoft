import React, { Component } from 'react'
import MarkerItem from '../MarkerItem/MarkerItem';
import { connect } from 'react-redux';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import { reorderMarkerList } from '../actions/actionCreators';
import CreateMarkerInput from '../CreateMarkerInput/CreateMarkerInput';
import './MarkerTable.css'

class MarkerTable extends Component {
    showMarkers = () => {
        const { markers } = this.props;
        return markers.map((item, idx) =>
            <MarkerItem  key={idx} idx={idx} marker={item.markerName}/>
         )
    }

    dragEndHandler = result => {
        const { reorderMarkerList } = this.props;
        if (!result.destination) {
            return;
        }

        reorderMarkerList(result.source.index, result.destination.index)
    }

    render() {
        return (
            <div className="marker-from__container">
                <CreateMarkerInput />
                <DragDropContext onDragEnd={this.dragEndHandler}>
                <Droppable droppableId="droppable">
                    {provided => (
                        <ul
                            className="marker-list"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {this.showMarkers()}
                            {provided.placeholder}
                        </ul>
                        
                    )}
                </Droppable> 
                </DragDropContext> 
            </div>
        )
    }
}

const mapStateToProps = ({markers}) => ({
    markers
  })

const mapDispatchToProps = dispatch => ({
    reorderMarkerList: (startIndex, endIndex) => dispatch(reorderMarkerList(startIndex, endIndex))
})



export default connect(mapStateToProps, mapDispatchToProps)(MarkerTable);