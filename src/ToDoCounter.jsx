import './ToDoCounter.css'

function ToDoCounter({total, completed}){
    return (
      <>
        <h1 className='counter-h1'>
          Has completado {completed} de {total} ToDos
        </h1>
      </>
    )
  }

  export {ToDoCounter}