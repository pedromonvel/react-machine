import "./ToDoItem.css"

function ToDoItem({text}){
    return (
      <>
        <li>
          <span>V</span>
          <p>{text}</p>
          <span>X</span>
        </li>
      </>
    )
}

export {ToDoItem}