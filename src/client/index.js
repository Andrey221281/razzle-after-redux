import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import './client.css';
import './ant.less';
// eslint-disable-next-line
import routes from '../routes';
import configureStore from '../store';

const store = configureStore(window.__PRELOADED_STATE__);

ensureReady(routes)
  .then(data =>
    hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <After data={data} routes={routes} />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    )
  )
  .catch(err => console.log(err));

if (module.hot) {
  module.hot.accept();
}
