import React from 'react'
import { useState } from 'react'
import './App.css'
import { ToDoCounter } from './ToDoCounter'
import { ToDoSearch } from './ToDoSearch'
import { ToDoList } from './ToDoList'
import { ToDoItem } from './ToDoItem'
import { CreateToDoButton } from './ToDoButton'
import { ToDoTitles } from './ToDoTitles'
import { ImageByCategory } from './SearchImage'
import { HideTodoCompleted } from './ToDoHide'

function App() {

  const searchIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#6b6b6b">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );

  const defaultTodos = [
    {text: "El hombre en busca de sentido", completed: true},
    {text: "El alma del exito", completed: false},
    {text: "El hombre mas rico que jamas existio", completed: true},
    {text: "Encuentra tu persona vitamina", completed: false},
    {text: "Detalles que enamoran", completed: true}
  ]

  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState(''); 

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const withoutAccent = (text) => {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    } //Esto lo hice para que al buscar con tildes tambien aparezcan
    const todoText = withoutAccent(todo.text.toLocaleLowerCase());
    const searchText = withoutAccent(searchValue.toLocaleLowerCase());
    return todoText.includes(searchText);
  });

  const todoComplete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  

  return (
    <>
      <section className='search-section'>
        <div className='search-box-section'>
          <ToDoTitles 
            pageTitles={'Create New Pendig Book'}
            style={{ marginBottom: '16px' }}
          />

          <ToDoSearch 
            placeHolder={'Add a new task...'}
            style={{marginBottom: '16px', width: '80%'}}
          />

          <CreateToDoButton 
            textButton={"Agregar"}
          />
        </div>

        <ImageByCategory 
          imageCollage={"books-collage"}
          altImg={"Anime Background"}
        />
      </section>

      <section className='todo-section'>
        <ToDoTitles 
              pageTitles={"Your ToDo's"}
              style={{ margin: '16px 0px 0px 0px', fontSize: '33px' }}
            />

        <ToDoCounter 
          completed={completedTodos}
          total={totalTodos} 
          todoType={"books"}
        />

        <ToDoSearch 
          placeHolder={'Find your task...'}
          style={{width: '60%'}}
          icon={searchIcon}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <ToDoList>
          {searchedTodos.map(todo => (
            <ToDoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => todoComplete(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </ToDoList>

        <HideTodoCompleted/>
      </section>
    </>
  )
}

export default App
