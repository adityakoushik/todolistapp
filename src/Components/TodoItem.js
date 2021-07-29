import React from 'react'

// Below code is called destructure - {todo}
export const TodoItem = ({todo}) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button type="button" class="btn btn-sm btn peach-gradient waves-effect">Delete</button>
        </div>
    )
}
