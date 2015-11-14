import React, { PropTypes } from 'react';

class PageSlider extends React.Component {

  render() {
    const overlayStyle = {
      minWidth: '100%',
      minHeight: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      marginTop: '150%',
      position: 'fixed',
      background: '#000',
      boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.6)',
      zIndex: '2',
      WebkitTransition: 'all .8s ease-in-out',
      MozTransition: 'all .8s ease-in-out',
      OTransition: 'all .8s ease-in-out',
      transition: 'all .8s ease-in-out',
      top:0
    };

    const topcornerStyle = {
      position:'absolute',
      top:10,
      right:10
    };

    const slideUp = {
      marginTop: '0%',
      backgroundColor: '#009cde'
    };

    const style = this.props.show ? Object.assign({},overlayStyle,slideUp) : overlayStyle;

    return (
      <div style={style}>
        <a href="#" onClick={this.props.close} style={topcornerStyle}>
          {'Close'}
        </a>
        {this.props.children}
      </div>
    );
  }
}

PageSlider.propTypes = { 
  close: PropTypes.func,
  show: PropTypes.bool
};

PageSlider.defaultProps = { 
  close: (() => {}),
  show: false
};

export default PageSlider;
