import React from 'react';
import { render } from 'react-dom';
import App from './app';

//styles
import './assets/styles/index.scss';

const root = document.getElementById('root');

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	root
);