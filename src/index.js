import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Sections from './Sections';


ReactDOM.render(<App sections={Sections}/>, document.getElementById('root'));


serviceWorker.unregister();
