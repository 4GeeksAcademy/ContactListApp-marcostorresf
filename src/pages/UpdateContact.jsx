import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getContacts, updateContact } from "../hooks/actions.js";

export const UpdateContact = () => {
  const { id } = useParams();
  const [currentContact, setCurrentContact] = useState({name:"", phone:"", email:"", address:"", id:""})
  const {store, dispatch, updateContact, getContacts} = useGlobalReducer()
  const navigate = useNavigate();

  useEffect(() => {
   getContacts()
  }, [])
  
  useEffect(() => {
      let contact = store.contacts?.filter((contact, index) => {return contact.id == id})
      
      if (contact.length > 0) {
         setCurrentContact(contact[0])
      }
      
      
   }, [store.contacts])
   
   const handleUpdateContact = (e) => {
       e.preventDefault();
       updateContact(currentContact);
       navigate("/")

   }
    return (
      <div className="text-center mt-5">
         <div className="input-group mb-3">
             <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
             <input 
                onChange={(e) => setCurrentContact({...currentContact, name: e.target.value })}
                placeholder={currentContact?.name}
                type="text" 
                className="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default"
             />
          </div>
          <div className="input-group mb-3">
             <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
             <input
                onChange={(e) => setCurrentContact({...currentContact, phone: e.target.value })}
                placeholder={currentContact?.phone}
                type="text" 
                className="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default"
                />
          </div>
          <div className="input-group mb-3">
             <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
             <input 
                onChange={(e) => setCurrentContact({...currentContact, email: e.target.value })}
                placeholder={currentContact?.email}
                type="text" 
                className="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default"
                />
          </div>
          <div className="input-group mb-3">
             <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
             <input 
                onChange={(e) => setCurrentContact({...currentContact, address: e.target.value })}
                placeholder={currentContact?.address}
                type="text" 
                className="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default"
                />
          </div>
          <button className="btn btn-success" onClick={(e) => handleUpdateContact(e) }>Update</button>
      </div>
  );
}; 