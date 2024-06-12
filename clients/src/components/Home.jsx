import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function Home() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      let mydata = await axios.get("http://localhost:8000/user");
    setUsers(mydata.data.data);
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  
    function deleteUser(id){
      // console.log(id)
      try {
         axios.delete(`http://localhost:8000/user/${id}`)
         alert("data delete successfully")
        getUsers();
      } catch (error) {
        alert(error.response.data.message)
      }
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-4">
        <Link to="/add" className="btn btn-primary mb-3 w-25"> <AddIcon />ADD</Link>
          <h3 className="bg-dark text-light p-3 text-center">Users Data</h3>
        </div>
        <div className="row mt-3 table-responsive">
          <table className="table table-success table-striped table-hover text-center">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length?
                        users.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <Link to={`/user/${item._id}`} className="btn btn-primary me-2"><VisibilityIcon /></Link>
                                        <Link to={`/edit/${item._id}`} className="btn btn-success me-2"><EditIcon /></Link>
                                        <Link onClick={()=>deleteUser(item._id)} className="btn btn-danger"><DeleteIcon /></Link>
                                    </td>
                                </tr>
                            )
                        })
                    :""
                }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
