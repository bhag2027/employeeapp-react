import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddEmployee = () => {
    const [data,changeData] = useState({
        "id":"",
    "name":"",
    "job":"",
    "salary":"",
    
        
    })
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8082/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                    
                } else {
                    alert("error")
                    
                }
            }
        )
    }
    
  return (
    <div>
        <NavBar/>
                 <h1 align="center"><u>EMPLOYEE DETAILS</u></h1>
         <div className="container">
            
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Job</label>
                            <input type="text" className="form-control" name='job' value={data.job} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Salary</label>
                             <textarea className="form-control" name='salary' value={data.salary} onChange={inputHandler}></textarea>
                        </div>
                       
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default AddEmployee