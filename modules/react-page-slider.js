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
      position: 'fixed',
      background: '#000',
      boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.6)',      
      WebkitTransition: 'all .8s ease-in-out',
      MozTransition: 'all .8s ease-in-out',
      OTransition: 'all .8s ease-in-out',
      transition: 'all .8s ease-in-out',
      top:0
    };

    const behaviour = {
      right: {
        hidden: {
          marginLeft: '100%'
        },
        shown: {
          marginLeft: '0%'
        }
      },
      bottom: {
        hidden: {
          marginTop: '100%'
        },
        shown: {
          marginTop: '0%'
        }
      },
      left: {
        hidden: {
          marginLeft: '-100%'
        },
        shown: {
          marginLeft: '0%'
        }
      },
      top: {
        hidden: {
          marginTop: '-100%'
        },
        shown: {
          marginTop: '0%'
        }
      }
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

    //extract only styles that are needed
    const { backgroundColor , zIndex } = this.props.customStyle || defaultStyle;

    const slideStyle = behaviour[this.props.slideFrom];

    //styles used when div is shown/ hidden
    const shownStyle = Object.assign({}, overlayStyle, slideStyle.shown, { backgroundColor, zIndex });
    const hiddenStyle = Object.assign({}, overlayStyle, slideStyle.hidden, { backgroundColor, zIndex });
    
    const style = this.props.show ? shownStyle  : hiddenStyle;

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
