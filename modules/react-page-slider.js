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


  calculateSlidingStyle() {

    let oneHundred = 110;
    switch (this.props.slideFrom) {
      case 'left':
        oneHundred *= -1;
      case 'right':
        return { hidden: { marginLeft: oneHundred+'%', visibility:'hidden' }, shown: { marginLeft: '0%', visibility:'' } };
      case 'top':
        oneHundred *= -1;
      case 'bottom':
      default:
        return { hidden: { marginTop: oneHundred+'%', visibility:'hidden' }, shown: { marginTop: '0%', visibility:'' } };
    }
  }

  calculateOuterStyle() {

    const overlayStyle = {
      minWidth: '100%',
      minHeight: '100%',
      overflowY: 'auto', //to be checked
      overflowX: 'hidden', //to be checked     
      position: 'fixed',
      background: '#000',
      boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.6)',      
      WebkitTransition: 'all 1s ease-in-out',
      MozTransition: 'all 1s ease-in-out',
      OTransition: 'all 1s ease-in-out',
      transition: 'all 1s ease-in-out',
      top:0
    };

    const defaultStyle = {
      backgroundColor : '#009cde', 
      zIndex: '2'
    };

    const { backgroundColor , zIndex } = this.props.customStyle || defaultStyle;
    const behaviour = this.calculateSlidingStyle();
    const shownStyle = Object.assign({}, overlayStyle, behaviour.shown, { backgroundColor, zIndex });
    const hiddenStyle = Object.assign({}, overlayStyle, behaviour.hidden, { backgroundColor, zIndex });
    
    return this.props.show ? shownStyle  : hiddenStyle;
  }

  calculateInnerStyle() {

    const centered = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    };

    return this.props.innerStyle || centered;
  }

  render() {
    //extract only styles that are needed
    const outerStyle = this.calculateOuterStyle();
    const innerStyle = this.calculateInnerStyle();    
    const closeDiv = this.renderCloseDiv();

    return (
      <div style={outerStyle}>
        {closeDiv}        
        <div style={innerStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

PageSlider.propTypes = { 
  close: PropTypes.func,
  closeStyle: PropTypes.object,
  closeText: PropTypes.string,
  customStyle: PropTypes.object,
  innerStyle: PropTypes.object,
  show: PropTypes.bool.isRequired,
  slideFrom: React.PropTypes.oneOf([ 'right', 'bottom', 'left', 'top' ])
};

PageSlider.defaultProps = { 
  close: undefined,
  closeStyle: undefined,
  closeText: '',
  customStyle: undefined,
  innerStyle: undefined,
  show: false,
  slideFrom: 'bottom'
};

export default PageSlider;
