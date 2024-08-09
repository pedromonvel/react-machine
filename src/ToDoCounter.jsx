import './ToDoCounter.css'

function ToDoCounter({total, completed, todoType}){
    return (
      <>
        <h1 className='counter-h1'>
          Completed {completed} of {total} {todoType}
        </h1>
      </>
    )
  }

  export {ToDoCounter}