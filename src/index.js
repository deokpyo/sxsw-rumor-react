import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import { Main } from './components/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
