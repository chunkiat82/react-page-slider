import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
(() => {
  	const app = document.createElement('div');

  	document.body.appendChild(app);

  	var cssId = 'myCss';  // you could encode the css path itself to generate id..
	if (!document.getElementById(cssId))
	{
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'https://raw.githubusercontent.com/daneden/animate.css/master/animate.min.css';
	    link.media = 'all';
	    head.appendChild(link);
	}

  	ReactDOM.render(<App />, app);
})();