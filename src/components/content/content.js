import React, { Component } from 'react'
import './content.css'
import SlidingPane from './slidingPane'
import ClosedLeftMenu from './closedLeftMenu'
import DrawingCanvas from './drawingCanvas'
import SlideContent from './slideContent'
import BackgroundImages from './backgroundImages'
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

class Content extends Component {
  state = {
    isModalOpen: false,
    selectedMenuOption: 'background'
  }

  toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }
  selectMenuOption = menuItem => {
    console.log('selectMenuOption', menuItem)
    this.setState({
      selectedMenuOption: menuItem,
      isModalOpen: !this.state.isModalOpen
    })
  }

  onBeforeDragStart = () => {
    /* ... */
  }

  onDragStart = () => {
    /* ... */
  }
  onDragUpdate = () => {
    /* ... */
  }
  onDragEnd = () => {
    // the only one that is required
  }

  render () {
    const selectedOptionContent = {
      background: <BackgroundImages />
    }[this.state.selectedMenuOption]
    return (
      <section className='mainSection'>
        <DragDropContext
          onBeforeDragStart={this.onBeforeDragStart}
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
        <Droppable droppableId='droppable' type='DRAWING'>
            {(provided, snapshot) => (
            <div
                className='droppableSection'
                ref={provided.innerRef}
                style={{
                backgroundColor: snapshot.isDraggingOver
                    ? '#ccc'
                    : '#ececec'
                }}
                {...provided.droppableProps}
            >
                <div className='menuSection'>
                    <ClosedLeftMenu selectMenuOption={this.selectMenuOption} />
                </div>
                    {this.state.isModalOpen && (
                    <SlidingPane
                        id='modal'
                        isOpen={this.state.isModalOpen}
                        onClose={this.toggleState}
                    >
                        <SlideContent content={selectedOptionContent} />
                    </SlidingPane>
                    )}
                <div className='canvasSection'>
                    <div className='drawingCanvas' />
                </div>
            </div>
            )}
        </Droppable>
        </DragDropContext>
      </section>
    )
  }
}

export default Content
