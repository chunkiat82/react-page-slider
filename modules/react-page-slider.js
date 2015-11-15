import React, { PropTypes } from 'react';

class PageSlider extends React.Component {

  constructor() {
    super();
    this.renderCloseDiv=this.renderCloseDiv.bind(this);    
  }

  renderCloseDiv() {    
    if (this.props.close) {
      return (<a href="#" onClick={this.props.close} style={this.props.closeStyle}>
        {this.props.closeText || 'Close'}
      </a>);
    }
  }

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
      WebkitTransition: 'all .8s ease-in-out',
      MozTransition: 'all .8s ease-in-out',
      OTransition: 'all .8s ease-in-out',
      transition: 'all .8s ease-in-out',
      top:0
    };

    const slideUp = {
      marginTop: '0%'
    };

    const centered = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    };

    const defaultStyle = {
      backgroundColor : '#009cde', 
      zIndex: '2'
    };

    const { backgroundColor , zIndex } = this.props.customStyle || defaultStyle;

    const style = this.props.show ? Object.assign({},overlayStyle, slideUp, { backgroundColor , zIndex } ) : overlayStyle;

    return (
      <div style={style}>
        {this.renderCloseDiv()}        
        <div style={this.props.innerStyle || centered}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

PageSlider.propTypes = { 
  close: PropTypes.func,
  closeStyle: PropTypes.shape,
  closeText: PropTypes.string,
  customStyle: PropTypes.shape,
  innerStyle: PropTypes.shape,
  show: PropTypes.bool.isRequired
};

PageSlider.defaultProps = { 
  close: undefined,
  closeStyle: undefined,
  closeText: '',
  customStyle: undefined,
  innerStyle: undefined,
  show: false
};

export default PageSlider;
