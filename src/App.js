import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import DetailPage from './pages/DetailPage'
// import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TodoList />} />
      <Route path='/detail/:id' element={<DetailPage />} />
      <Route path='*' element={<>주소가 올바르지 않습니다.</>} />
    </Routes>
  );
};
export default App;
