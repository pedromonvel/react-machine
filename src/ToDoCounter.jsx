import './ToDoCounter.css'

function ToDoCounter({total, completed, todoType}){
    return (
      
      total == completed ? 

        <h1 className='counter-h1'>Congratulations! You have completed all your tasks!</h1>
        :
        <h1 className='counter-h1'>
          Completed {completed} of {total} {todoType}
        </h1>
      
    );
  }

  export {ToDoCounter}