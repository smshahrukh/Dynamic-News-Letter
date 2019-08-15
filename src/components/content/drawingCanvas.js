// DrawingCanvas
import React, { Component } from 'react'
import './drawingCanvas.scss'

class DrawingCanvas extends Component {
  render () {
    return (
      <div
        className='droppableSection'
        style={{
          backgroundColor: '#ececec'
        }}
      >
        <div className='drawingCanvas' />
      </div>
    )
  }
}

export default DrawingCanvas
