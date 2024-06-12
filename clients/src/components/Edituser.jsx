import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Edituser() {
  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    state:'',
    dsg:"",
    message:""
    })
    const navigate=useNavigate("")
    const {id}=useParams()
    // console.log(id)

    async function getUsers() {
      try {
      let mydata = await axios.get(`http://localhost:8000/user/${id}`);
      setUser(mydata.data.data);
      } catch (error) {
        alert(error.response.data.message)
      }
    }

  function handlerUser(e){
      // console.log(e.target.name,e.target.value)
      const {name,value}=e.target;
      setUser((prev)=>{
        return{...user,[name]:value}
      })
  }

  async function submitData(e){
    e.preventDefault()
    // console.log(user)
    try {
      let res= await axios.put(`http://localhost:8000/user/${id}`,user)
      let data=res.data.data
      alert(`
      Name : ${data.username}
      Email: ${data.email}
      Phone: ${data.phone}
      State: ${data.state}
      Designation: ${data.dsg}
      message: ${data.message}
      `)
      navigate("/")
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  useEffect(()=>{
    getUsers();
  },[])
  return (
    <div className='container mt-5'>
    <h1 className='w-100 bg-dark p-2 text-light text-center'>Edit User</h1>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="username">UserName</label>
          <input type="text"  name='username' value={user.username} className='form-control' id="username" onChange={handlerUser}/>
        </div>
        <div className="col-md-6">
          <label htmlFor="email">Email</label>
          <input type='email' name='email' id="email" value={user.email} className='form-control' onChange={handlerUser}/>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6 ">
          <label htmlFor="phone">Phone</label>
          <input type="text" className='form-control' id='phone' value={user.phone} name='phone' onChange={handlerUser}/>
        </div>
        <div className="col-md-6">
          <label htmlFor="state">State</label>
          <input type="text" className='form-control' value={user.state} name='state' id='state'onChange={handlerUser}/>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6 ">
          <label htmlFor="dsg">Designation</label>
          <input type="text" className='form-control'value={user.dsg} name='dsg' id='dsg' onChange={handlerUser}/>
        </div>
        <div className="col-md-6">
          <label htmlFor="message">Message</label>
          <input type="text" className='form-control' value={user.message} name='message' id='message' onChange={handlerUser}/>
        </div>
      </div>
      <div className="row">
        <Link className="btn btn-success w-25" onClick={submitData}>Submit</Link>
      </div>
    </div>
  )
}
