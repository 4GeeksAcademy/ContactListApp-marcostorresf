import React, {useState,useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {
  const [contacts, setContacts] = useState ([]);
  const {store, dispatch, fetchAgenda} =useGlobalReducer()

  useEffect(() => {
	fetchAgenda()
  }, [])

  useEffect(() => {
	setContacts(store.contacts)
  }, [store.contacts])
  
	return (
		<div className="text-center mt-5">
			{
			    contacts?.length > 0
			    ? contacts.map((contact, index) => (
				  <ContactCard key={index} contact={contact}/>
				))
				: <h1>Get some contacts</h1>
			}
			
		
		</div>
	);
}; 