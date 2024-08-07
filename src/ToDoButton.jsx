import "./ToDoButton.css"

function CreateToDoButton({textButton}) {
    return(
        <>
            <section className="button-section">
                <button className="button">{textButton}</button>
            </section>
        </>
    )
}

export {CreateToDoButton}