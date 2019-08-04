import React, { Component } from 'react';
import './content.css';
import SlidingImagePane from './slidingPane';
import ClosedLeftMenu from './closedLeftMenu';
import DrawingCanvas from './drawingCanvas';
import { DragDropContext } from 'react-beautiful-dnd';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMenuOption: 'background'
        }
    }
    selectMenuOption = (menuItem) => {
        console.log("selectMenuOption", menuItem)
        this.setState({
            selectedMenuOption: menuItem
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
        return (
            <section>
                <DragDropContext
                    onBeforeDragStart={this.onBeforeDragStart}
                    onDragStart={this.onDragStart}
                    onDragUpdate={this.onDragUpdate}
                    onDragEnd={this.onDragEnd}
                >
                    <ClosedLeftMenu selectMenuOption={this.selectMenuOption} />
                    <SlidingImagePane selectedMenuOption={this.state.selectedMenuOption} />

                    <DrawingCanvas />
                </DragDropContext>
            </section>
        )
    }
}

export default Content;
