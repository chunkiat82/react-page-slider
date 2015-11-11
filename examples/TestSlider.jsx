import React from 'react';
import PageSlider from '../modules/react-page-slider.jsx';

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

    const centered = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    };

    return (      
      <div>        
        <div>
            <h1>{`Page Slider ${text}`}</h1>
            <button onClick={this._handleClick}>
                {'Click to activate Slider.'}
            </button>
        </div>
        <PageSlider close={this._closeClick} show={this.state.sliderActivated}>
            <div style={centered}>{'This is overlay div'}</div>
        </PageSlider>
      </div>
    );
  }
};

export default TestSlider;
