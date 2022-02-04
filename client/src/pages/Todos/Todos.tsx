import React, { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

import FormAddTodo from './components/FormAddTodo';
import TodoList from './components/TodoList';
import { getTodosAsyncAction } from './redux/actions';

export const Todos: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAsyncAction());
  }, []);

  return (
    <>
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
    </>
  );
};
