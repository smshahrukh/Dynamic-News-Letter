import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import SlideHeader from './slideHeader';
import SlideContent from './slideContent';
import BackgroundImages from './backgroundImages';

import 'react-sliding-pane/dist/react-sliding-pane.css';
import './slidingPane.scss';
 
class SlidingImagePane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpenLeft: false
        };
    }
 
    componentDidMount() {
        Modal.setAppElement(this.el);
    }
 
    render() {
        const {
            selectedMenuOption
        } = this.props;
        const selectedOptionContent = {
            "background": <BackgroundImages />,
        }[selectedMenuOption];
        return <div ref={ref => this.el = ref}>
            <div className="close_slider_button">
                <div onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                    &lt;
                </div>
            </div>
            <SlidingPane
                className="leftSlidingPane"
                isOpen={ this.state.isPaneOpenLeft }
                from='left'
                width='350px'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <div>
                    <SlideHeader />
                    <SlideContent content={selectedOptionContent} />

                </div>
            </SlidingPane>
        </div>;
    }
}

export default SlidingImagePane;