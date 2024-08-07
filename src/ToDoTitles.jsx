import './ToDoTitles.css'

function ToDoTitles({pageTitles, style}) {
    return(
        <h1 style={style} className='page-titles'>
            {pageTitles}
        </h1>
    )
}

export {ToDoTitles}