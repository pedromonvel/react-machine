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
    {text: "Amar a Catalina", completed: true},
    {text: "Llorar con la llorona", completed: false},
    {text: "Vivir la vida feliz", completed: true},
    {text: "Tener mi primer empleo", completed: false},
    {text: "Ganar mas de 4 millones", completed: true}
  ]

  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState(''); 

  console.log('Los usuarios buscando todos de ' + searchValue)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

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
            searchValue={searchValue}
            setSearchValue={setSearchValue}
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
        />

        <ToDoList>
          {defaultTodos.map(todo => (
            <ToDoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </ToDoList>

        <HideTodoCompleted/>
      </section>
    </>
  )
}

export default App
