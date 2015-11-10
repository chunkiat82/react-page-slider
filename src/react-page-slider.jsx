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
            visibility: 'hidden'
        }

        const topcornerStyle = {
            position:'absolute',
            top:10,
            right:10
        }

        const classes = this.props.show ? 'slideUp' : ''

        return (
            <div style={this.props.overlayStyle || overlayStyle} className={classes}>
                <a href="#" style={topcornerStyle} onClick={this.props.close}>Close</a>
                {this.props.children}
            </div>
        );
    }
}
