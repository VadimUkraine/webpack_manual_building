import React, { FC } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';

const store = configureStore();

export const App: FC = () => (
  <Provider store={store}>
    <div>TS will be here</div>
  </Provider>
);
