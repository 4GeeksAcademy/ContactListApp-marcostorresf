import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact }) => {

  const { store, dispatch } = useGlobalReducer()

  return (

    <div className="card mx-2" style={{ "width": "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">{contact.phone}</p>
        <p className="card-text">{contact.email}</p>
        <p className="card-text">{contact.address}</p>
        <Link className="btn btn-dark mx-2" to={`/update/${contact.id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
        <Link className="btn btn-danger mx-2" to={`/delete/${contact.id}`}><i class="fa-solid fa-trash"></i></Link>
      </div>
    </div>

  );
}; 