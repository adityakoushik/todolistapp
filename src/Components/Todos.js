import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="container mb-3">
            <h3 className="text-center my-3">Todos List</h3>
            <ul class="list-group">
                {props.todos.map((todo) => {
                    return( 
                        <>
                            <li class="list-group-item list-group-item-success">
                                <TodoItem todo={todo} />
                            </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}
