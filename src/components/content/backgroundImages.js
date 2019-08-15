// BackgroundImages
import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
export default class BackgroundImages extends Component {
  render () {
    const imagesArray = [
      { url: 'https://www.fillmurray.com/640/360' },
      { url: 'https://dummyimage.com/640x360/fff/aaa' },
      { url: 'https://loremflickr.com/640/360' },
      { url: 'https://placekitten.com/408/287' },
      { url: 'https://www.fillmurray.com/640/360' },
      { url: 'https://www.placecage.com/640/360' },
      { url: 'http://placeimg.com/640/360/any' },

      { url: 'https://placebear.com/640/360' },
      { url: 'https://imgplaceholder.com/640x360' },
      { url: 'https://placezombie.com/640x360' },
      { url: 'https://www.fillmurray.com/640/360' },
      { url: 'https://dummyimage.com/640x360/fff/aaa' },
      { url: 'https://loremflickr.com/640/360' },
      { url: 'https://placekitten.com/408/287' },
      { url: 'https://www.fillmurray.com/640/360' },
      { url: 'https://www.placecage.com/640/360' },
      { url: 'http://placeimg.com/640/360/any' }
    ]
    return (
      <div className='slideContent'>
        {imagesArray.map(image => {
          return (
            <Draggable draggableId='draggable-1' index={0}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className='draggableThumb'
                >
                  <img src={image.url} />
                </div>
              )}
            </Draggable>
          )
        })}
      </div>
    )
  }
}
