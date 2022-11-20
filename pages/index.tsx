import React, {useState, useEffect} from 'react';
import supabase from '../utils/supabase';
import { InputTodoForm } from '../components/InputToDoForm';
import { TodoList} from '../components/TodoList';
import Container from "../components/Container";

const Home : React.FC = () => {
  return (
    <>
      <InputTodoForm />
      <TodoList />
      <Container />
    </>
  )
}

export default Home;
