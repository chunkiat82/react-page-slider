import React from 'react';

export default class PageSlider extends React.Component {


	constructor() {
	    super();
	    this._handleClick = this._handleClick.bind(this);
	}

	_handleClick(){
		console.log("props");
		console.log(this.props);
		
		this.setState({close :true});

		console.log("show");
		console.log(this.state);
	}

	componentWillMount(){
		this.state={show:this.props.show || false};		
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log("shouldComponentUpdate");
		console.log(nextState);
		if(nextState.close){
			nextState.close = false;
			nextState.show = false;
		}else{
			nextState.show= nextProps.show;
		}		
		return true;
	}

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

    	const classes = this.state.show ? 'slideUp' : ''

    	return (
    		<div style={this.props.overlayStyle || overlayStyle} className={classes}>
    			<a href="#" style={topcornerStyle} onClick={this._handleClick}>Close</a>
    			{this.props.children}
    		</div>
    	);
    }
}
