import React, { Component } from 'react';
import './closedLeftMenu.scss';
 
class ClosedLeftMenu extends Component {
    render(){

        return (
            <div className="closedLeftMenu">
                <div className="menuButton">
                    <span className="spanText">File</span>
                </div>
                <div className="menuButton">
                    <span className="spanText">Photos</span>
                </div>
                <div className="menuButton">
                    <span className="spanText">Text</span>
                </div>
                <div className="menuButton menuButtonSelected">
                    <span className="spanText">Background</span>
                </div>
                <div className="menuButton">
                    <span className="spanText">Upload</span>
                </div>
            </div>
        )

    }

}
export default ClosedLeftMenu;