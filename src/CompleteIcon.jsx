import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";

function CompleteIcon ({onClick, completed}) {
    return (
        <FaRegSquareCheck 
            className="checkbox-section"
            type="check"
            color={completed ? '#0bd20b' : 'white'}
            onClick={onClick}
        />
    )
};

export {CompleteIcon}; 