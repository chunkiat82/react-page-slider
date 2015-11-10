import React from 'react';
import PageSlider from '../src/react-page-slider.jsx';

export default class TestSlider extends React.Component{

  constructor() {
    super();
    this.state={'sliderActivated' : false};
    this._handleClick = this._handleClick.bind(this);
    this._closeClick = this._closeClick.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
    this.setState({'sliderActivated' : true});
  }

  _closeClick(e){
    e.preventDefault();
    this.setState({'sliderActivated' : false});
  }

  render() {
    var text = this.state.sliderActivated ? 'Activated' : 'not Activated';
    var clickText = this.state.sliderActivated ? 'hide' : 'show';

    var centered = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }

    return (      
      <div>
        <PageSlider show={this.state.sliderActivated} close={this._closeClick}>
            <div style={centered}>This is overlay div</div>
        </PageSlider>
        <h1>Page Slider {text}</h1>
        <button onClick={this._handleClick}>
            Click to activate Slider.
        </button>
      </div>
    );
  }
};