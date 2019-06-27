import React, { Component } from 'react'
import MarkerItem from '../MarkerItem/MarkerItem';
import { connect } from 'react-redux';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';

class MarkerTable extends Component {
    showMarkers = () => {
        const { markers } = this.props;
        return markers.map((item, idx) =>
            <MarkerItem  key={idx} idx={idx} marker={item.markerName}/>
         )
    }

    render() {
        
        return (
            <DragDropContext>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {this.showMarkers()}
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

export default connect(mapStateToProps)(MarkerTable);