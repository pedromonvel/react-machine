import "./ToDoItem.css"

function ToDoItem({text}){
    return (
      <>
        
          <li>
            <div className="todoItemContainer">
              <span className="checkbox-section">
                <input type="checkbox" />
              </span>
              <p className="todo-text">{text}</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
          </li>
        
      </>
    )
}

export {ToDoItem}