import React, { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

// import { getTodoListRequest } from '../../redux/actions/todo';
import FormAddTodo from '../../elements/FormAddTodo';
// import TodoList from './TodoList';

export const Todos: FC = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTodoListRequest());
  // }, [dispatch]);

  return (
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
      {/* <TodoList />  */}
    </div>
  );
};
