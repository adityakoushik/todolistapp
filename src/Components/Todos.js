import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="container mb-3">
            <h3 className="text-center my-3">Todos List</h3>
            {/* Below code is a if condition with for loop */}
            {props.todos.length === 0 ? 'No todos to display' :
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }
            {/* <ul className="list-group">
                {props.todos.map((todo) => {
                    return( 
                        <>
                            <li className="list-group-item list-group-item-success">
                                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                            </li>
                        </>
                    )
                })}
            </ul> */}
        </div>
    )
}
