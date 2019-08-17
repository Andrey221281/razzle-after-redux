import React from 'react';
import express from 'express';
import { render } from '@jaredpalmer/after';
import helmet from 'helmet';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import configureStore from './store';
import Document from './Document';
import routes from './routes';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const store = configureStore();
console.disableYellowBox = true;

const server = express();
server
  .disable('x-powered-by')
  .use(helmet())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    try {
      const serverState = store.getState();

      const customRenderer = node => {
        const App = <Provider store={store}>{node}</Provider>;
        return { html: renderToString(App) };
      };

      const html = await render({
        req,
        res,
        routes,
        assets,
        document: Document,
        // Anything else you add here will be made available
        // within getInitialProps(ctx)
        // e.g a redux store...
        serverState,
        customRenderer
      });
      res.send(html);
    } catch (error) {
      res.json(error);
    }
  });

export default server;
