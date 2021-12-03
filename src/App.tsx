import React, { FC } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

import Todos from './pages/Todos';

const store = configureStore();

export const App: FC = () => (
  <Provider store={store}>
    <Todos />
  </Provider>
);
