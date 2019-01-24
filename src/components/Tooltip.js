import React, { Component, createElement, Children } from 'react';


const parentStyle = {
    position: 'relative'
};

const tipStyle = {
    position: 'absolute',
    bottom: -70,
    left: '50%',
    transform: 'translate(-50%, 100%)',
    marginBottom: -10,
    color: '#fff',
    paddingTop: 10,
    width: 100,
    textAlign: 'center'
};

const triangleStyle = {
    position: 'absolute',
    width: '20px',
    height: '10px',
    top: '-10px',
    left: '50%',
    marginLeft: '-10px',
    fill: '#efefef'
};

export default class Tooltip extends Component {
    static defaultProps = {
        component: 'span',
        style: {}
    };

    state = {
        show: false
    };


    render() {
        return createElement(this.props.component, {
            style: { ...parentStyle, ...this.props.style },
            ref: el => this.el = el,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
        }, this.props.children, this.state.show && <Tip>{this.props.text}</Tip>)
    }

    _handleMouseEnter() {
        this.setState({ show: true });
    }
    handleMouseEnter = this._handleMouseEnter.bind(this);

    _handleMouseLeave() {
        this.setState({ show: false });
    }
    handleMouseLeave = this._handleMouseLeave.bind(this);
}

const Tip = ({ children }) => (
    <div style={tipStyle}>
        <svg style={triangleStyle} viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 0 100 L 50 0 L 100 100 Z" />
        </svg>
        {children}
    </div>
);