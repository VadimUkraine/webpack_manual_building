import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import FormAddTodo from './components/FormAddTodo';
import TodoList from './components/TodoList';

export const Todos: FC = () => (
  <div>
    <Helmet>
      <meta
        name="description"
        content="Todos with Docker, Nest and Typescript"
      />
      <meta name="theme-color" content="#F4F4F4" />
      <link rel="canonical" href="http://localhost:4200" />
      <title>TS-TodoList</title>
    </Helmet>
    <FormAddTodo />
    <TodoList />
  </div>
);
