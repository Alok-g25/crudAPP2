import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function User() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    state: "",
    dsg: "",
    message: "",
  });
  const { id } = useParams();
  let navigate=useNavigate("");

  async function getUsers() {
    try {
      let mydata = await axios.get(`http://localhost:8000/user/${id}`);
      setUser(mydata.data.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  function deleteUser(id){
    // console.log(id)
    try {
       axios.delete(`http://localhost:8000/user/${id}`)
       alert("data delete successfully")
       navigate("/")
      } catch (error) {
        alert(error.response.data.message)
      }
}
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card p-2">
        <div>
          <img
            src="/profile.jpeg"
            alt="profile Image"
            width={100}
            height={100}
            className="rounded-circle"
          />
          <p>
            <b>Name :</b> {user.username}
          </p>
          <p>
            <b>Email :</b> {user.email}
          </p>
          <p>
            <b>Phone :</b> {user.phone}
          </p>
      
          <p>
            <b>State :</b> {user.state}
          </p>
          <p>
            <b>Designation :</b> {user.dsg}
          </p>
          <p>
            <b>Message :</b> {user.message}
          </p>

          <div>
            <Link to={`/edit/${user._id}`} className="btn btn-success me-2">
              <EditIcon />
            </Link>
            <Link onClick={()=>deleteUser(user._id)} className="btn btn-danger">
              <DeleteIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
