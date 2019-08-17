import React from 'react';
import express from 'express';
import { render } from '@jaredpalmer/after';
import helmet from 'helmet';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import configureStore from '../store';
import Html from './Html';
// eslint-disable-next-line
import routes from '../routes';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

console.disableYellowBox = true;

const server = express();
server
  .disable('x-powered-by')
  .use(helmet())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    try {
      const store = configureStore();
      const serverState = store.getState();

      const customRenderer = node => {
        const App = <Provider store={store}>{node}</Provider>;
        return { html: renderToString(App), serverState };
      };

      const html = await render({
        req,
        res,
        routes,
        assets,
        document: Html,
        customRenderer
      });
      res.send(html);
    } catch (error) {
      res.json(error);
    }
  });

export default server;
