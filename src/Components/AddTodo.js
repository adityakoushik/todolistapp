import React, { useState } from 'react';

export const AddTodo = (props) => {
    
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = () => {

    }
    return (
        <div className="container my-3">
            <div className="card">
                <h5 className="card-header info-color white-text text-center py-4">
                    <strong>Add Your Todo</strong>
                </h5>
                <div className="card-body px-lg-5">
                    <form className="text-center" style={{color: '#757575'}} onSubmit={submit}>
                        <p>Add Todos from here</p>
                        <div className="md-form mt-3">
                            <input type="text" value={title} id="todotitle" className="form-control" />
                            <label for="todotitle">Todo title</label>
                        </div>
                        <div className="md-form mt-3">
                            <input type="text" value={desc} id="desc" className="form-control" />
                            <label for="desc">Todo Description</label>
                        </div>
                        <button className="btn btn-outline-info btn-rounded z-depth-0 my-4 waves-effect" type="submit">Add Todo</button>
            
                    </form>
                    
            
                </div>
            
            </div>
        </div>
    )
}
