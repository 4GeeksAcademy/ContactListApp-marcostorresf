import React, {useState,useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {

  const {store, dispatch, fetchAgenda} =useGlobalReducer()

  useEffect(() => {
	fetchAgenda()

  }, [])
  
  
   console.log(store.contacts)
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				
			</p>
		</div>
	);
}; 