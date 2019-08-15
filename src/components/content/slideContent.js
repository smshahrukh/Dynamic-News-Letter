// SlideContent
import React, { Component } from 'react'
import './slideContent.scss';

export default class SlideContent extends Component {
    render() {
        const {
            content
        } = this.props;
        return (
            <React.Fragment> { content } </React.Fragment>
        )
    }
}