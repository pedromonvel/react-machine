import './ToDoSearch.css'

function ToDoSearch({placeHolder, icon, style}){
    return (
      <>
        <div className='input-wrapper'>
          <input style={style} className="inputs" type="text" placeholder={placeHolder} /> 
          {icon && <span className="input-icon">{icon}</span>}
        </div>
      </>
    )
  }

export {ToDoSearch}