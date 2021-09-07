import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import App from './components/app';


function MainApp(props){
	return(
		<App />
	);
}

ReactDOM.render(<MainApp />, document.getElementById('app'));