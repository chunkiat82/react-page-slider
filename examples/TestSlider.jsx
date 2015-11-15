import React from 'react';
import PageSlider from '../modules/react-page-slider.js';

class TestSlider extends React.Component {

  constructor() {
    super();
    this.state={ 'sliderActivated' : false };
    this._closeClick = this._closeClick.bind(this);
    this._handleClick = this._handleClick.bind(this);    
  }

  _closeClick(e) {
    e.preventDefault();
    this.setState({ 'sliderActivated' : false });
  }

  _handleClick(e) {
    e.preventDefault();
    this.setState({ 'sliderActivated' : true });
  }

  render() {
    const text = this.state.sliderActivated ? 'Activated' : 'not Activated';

    const customStyle = {
      backgroundColor: 'black'
    };

    return (      
      <div>        
        <div>
            <h1>{`Page Slider ${text}`}</h1>
            <button onClick={this._handleClick}>
                {'Click to activate Slider.'}
            </button>
        </div>
        <PageSlider customStyle={customStyle} show={this.state.sliderActivated} slideFrom="right">
            <div>
              {'This is overlay div'}
              <button onClick={this._closeClick}>
                {'Close'}
              </button>
            </div>
        </PageSlider>
      </div>
    );
  }
};

export default TestSlider;
