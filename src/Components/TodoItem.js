import React from 'react'

// Below code is called destructure - {todo}
export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h4>
                {todo.title}
                <button type="button" className="btn btn-sm btn peach-gradient waves-effect" onClick={() => {(onDelete(todo))}}>Delete</button>
            </h4>
            <p>
                {todo.desc}
            </p>
        </div>
    )
}
