import './ToDoSearch.css'

function ToDoSearch({placeHolder, style}){
    return (
      <>
        <input style={style} className="inputs" type="text" placeholder={placeHolder} />
      </>
    )
  }

export {ToDoSearch}