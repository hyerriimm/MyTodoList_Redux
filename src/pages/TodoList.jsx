import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Layout from '../components/Layout';
import List from '../components/List';

const TodoList = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: 'W4 리액트 숙련',
  //     body: '라우터와 리덕스를 적용해봅시다.',
  //     isDone: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'W3 리액트 입문',
  //     body: '리액트 기초를 공부해봅시다.',
  //     isDone: true,
  //   },
  // ]);

  // todos={todos} setTodos={setTodos} 

  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default TodoList;