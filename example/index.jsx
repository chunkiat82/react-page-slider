import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
(() => {
    const app = document.createElement('div');

    document.body.appendChild(app);

    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = 'myCss';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://www.justinaguilar.com/animations/css/animations.css';//./animate.css';//;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css';//https://raw.githubusercontent.com/daneden/animate.css/master/animate.min.css';
    link.media = 'all';
    head.appendChild(link);

    ReactDOM.render(<App />, app);
})();