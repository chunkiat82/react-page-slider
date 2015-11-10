import React from 'react';

export default class PageSlider extends React.Component {

    
    render() {
    	const overlayStyle = {
        	position: 'fixed',
        	top: 0,
        	left: 0,
        	background: 'rgba(0, 0, 0, 0.6)',
        	zIndex: 5,
        	width: '100%',
        	height: '100%',
        	display: this.props.show ? 'block': 'none'
    	}
    	return <div style={overlayStyle}>HIDDEN</div>;
    }
}
