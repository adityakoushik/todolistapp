import React, { useState } from 'react';

export const AddTodo = (props) => {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description should not blank");
        }else{
            props.addTodo(title, desc);

            setTitle("");
            setDesc("");
        }
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
                            <input type="text" value={title} id="todotitle" onChange={(e)=>{setTitle(e.target.value)}} className="form-control" />
                            <label htmlFor="todotitle">Todo title</label>
                        </div>
                        <div className="md-form mt-3">
                            <input type="text" value={desc} id="desc" onChange={(e)=>{setDesc(e.target.value)}} className="form-control" />
                            <label htmlFor="desc">Todo Description</label>
                        </div>
                        <button className="btn btn-outline-info btn-rounded z-depth-0 my-4 waves-effect" type="submit">Add Todo</button>
            
                    </form>
                    
            
                </div>
            
            </div>
        </div>
    )
}
