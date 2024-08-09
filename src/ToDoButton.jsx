import "./ToDoButton.css"

function CreateToDoButton({textButton}) {
/*     const [clickButton, setClickButton] = React.useState('');  */

    return(
        <>
            <section className="button-section">
                <button 
                    className="button" 
                    onClick={(event)=> {
                        console.log('Le diste click')
                        console.log(event);
                        console.log(event.target)
                        }
                    }
                    >{textButton}</button>
            </section>
        </>
    )
}

export {CreateToDoButton}