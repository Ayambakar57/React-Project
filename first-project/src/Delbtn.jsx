import React from "react";

function DeleteButton({ id, onDelete, style }) {
    return (
        <button className="card_delete" onClick={() => onDelete(id)} style={style}>
            Delete
        </button>
    );
}

export default DeleteButton;