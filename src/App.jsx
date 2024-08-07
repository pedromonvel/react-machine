import { useState } from 'react'
import './App.css'
import { ToDoCounter } from './ToDoCounter'
import { ToDoSearch } from './ToDoSearch'
import { ToDoList } from './ToDoList'
import { ToDoItem } from './ToDoItem'
import { CreateToDoButton } from './ToDoButton'
import { ToDoTitles } from './ToDoTitles'
import { ImageByCategory } from './SearchImage'

function App() {

  const defaultTodos = [
    {text: "Amar a Catalina", completed: true},
    {text: "Llorar con la llorona", completed: false},
    {text: "Vivir la vida feliz", completed: true},
    {text: "Tener mi primer empleo", completed: false}
  ]

  return (
    <>
      <section className='search-section'>
        <div className='search-box-section'>
          <ToDoTitles 
            pageTitles={'Create New Task'}
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
        <ToDoCounter 
          completed={16}
          total={25} 
        />

        <ToDoSearch 
          placeHolder={'Find your task...'}
          style={{width: '60%'}}
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
      </section>
    </>
  )
}

export default App
