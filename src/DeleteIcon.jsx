import React from "react";
/* import { TodoIcon } from './TodoIcon' */
import { IoCloseCircleOutline } from "react-icons/io5";

function DeleteIcon({ onClick }) {
    return (
        <IoCloseCircleOutline
            className='Icon Icon-delete'
            type="delete"
            onClick={onClick}
        />
    )
}

export { DeleteIcon };