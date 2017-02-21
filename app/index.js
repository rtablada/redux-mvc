import 'whatwg-fetch';

import store from './store';
import App from './app';

const appEl = document.querySelector('.app');

const app = new App(appEl, store);

app.created();
