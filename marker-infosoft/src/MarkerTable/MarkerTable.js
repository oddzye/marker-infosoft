import React, { Component } from 'react'
import MarkerItem from '../MarkerItem/MarkerItem';
import { connect } from 'react-redux';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import { reorderMarkerList } from '../actions/actionCreators';

class MarkerTable extends Component {
    showMarkers = () => {
        const { markers } = this.props;
        return markers.map((item, idx) =>
            <MarkerItem  key={idx} idx={idx} marker={item.markerName}/>
         )
    }
    getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "lightblue" : "lightgrey",
        padding: 8,
        width: 250
      });

    DragEndHandler = result => {
        const { reorderMarkerList } = this.props;
        if (!result.destination) {
            return;
        }

        reorderMarkerList(result.source.index, result.destination.index)
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.DragEndHandler}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={this.getListStyle(snapshot.isDraggingOver)}
                    >
                        {this.showMarkers()}
                        {provided.placeholder}
                    </ul>
                    
                )}
            </Droppable> 
            </DragDropContext> 
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