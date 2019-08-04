// DrawingCanvas
import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import './drawingCanvas.scss'

class DrawingCanvas extends Component {
  render () {
    return (
      <Droppable droppableId='droppable-1' type='PERSON'>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              backgroundColor: snapshot.isDraggingOver ? '#ccc' : '#ececec'
            }}
            {...provided.droppableProps}
          >
            <div className='drawingCanvas' />
          </div>
        )}
      </Droppable>
    )
  }
}

export default DrawingCanvas
