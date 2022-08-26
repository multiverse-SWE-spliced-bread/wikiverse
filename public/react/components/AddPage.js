import React, {useState, useEffect} from "react";
import apiURL from '../api';


export const AddPage = ({setCurrentPageView}) => {

    const [formInputs, setFormInputs] = useState({})

    async function sumbitHandler (e) {
        e.preventDefault()
        try {
            const response = await fetch(`${apiURL}/wiki`, {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json",
                    "accept" : "application/json",
                    },
                body: JSON.stringify(formInputs)
                
            })
            const data = await response.json()
            console.log(data)
            
            setFormInputs({})
            e.target.reset()
        
        } catch (err) {
            console.log(err)

            }
        
        }
    
    function onChangeHandler (e) {
        let formData = formInputs
        formData[e.target.name] = e.target.value
        setFormInputs(formData)
        console.log(formInputs)
    }

    return <div>
        <form id="newPage" onSubmit={sumbitHandler}>
            <div className="input-group">
                <label htmlFor="title">Title</label>
                <input name="title" value={formInputs.title} onChange={onChangeHandler}></input>
            </div>
            <div className="input-group">
                <label htmlFor="slug">url_slug</label>
                <input name="slug" value={formInputs.slug} onChange={onChangeHandler}></input>
            </div>

            <div className="input-group">
                <label htmlFor="content">content</label>
                <input name="content" value={formInputs.content} onChange={onChangeHandler}></input>
            </div>

            <div className="input-group">
                <label htmlFor="name" value={formInputs.name} >name</label>
                <input name="name" value={formInputs.name} onChange={onChangeHandler}></input>
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input name="email" value={formInputs.email} onChange={onChangeHandler}></input>
            </div>
            <div className="form-button-group">
            <button form="newPage">Submit</button>
            <button type="button" onClick={()=> setCurrentPageView(0)}>Back</button>
            </div>

        </form>
    </div>
}