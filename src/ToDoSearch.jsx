import React from 'react';
import './ToDoSearch.css'

function ToDoSearch({placeHolder, icon, style, searchValue, setSearchValue}){
    return (
      <>
        <div className='input-wrapper'>
          <input 
            style={style} 
            className="inputs" 
            type="text" 
            placeholder={placeHolder}
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
              }
            }
            /> 
          {icon && <span className="input-icon">{icon}</span>}
        </div>
      </>
    )
  }

export {ToDoSearch}