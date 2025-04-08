import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact }) => {

  const { store, dispatch } = useGlobalReducer()

  return (

 
    <div className="card mx-3 bg-dark text-white" style={{ "width": "18rem" }}>
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">{contact.phone}</p>
        <p className="card-text">{contact.email}</p>
        <p className="card-text">{contact.address}</p>
        <Link className="btn btn-outline-info mx-2" to={`/update/${contact.id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
        <Link className="btn btn-outline-danger mx-2" to={`/delete/${contact.id}`}><i class="fa-solid fa-trash"></i></Link>
      </div>
    </div>
  
  );
}; 