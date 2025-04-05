export const fetchAgenda = async (dispatchEvent, payload) => {
    let response = await fetch ("https://playground.4geeks.com/contact/agendas/marcostorresf")
    let data = await response.json();

    if (data.detail == `Agenda "marcostorresf" doesn't exist.`){
        createAgenda(); 
    }
    dispatch({
        type: "set_agenda",
        payload: {agenda: data.slug, contacts: data.contacts },
    });
}

export const createAgenda = async (dispatch, payload) => {
    let response = await fetch ("https://playground.4geeks.com/contact/agendas/marcostorresf", {
        method: "POST",
        headers: {"Content-type":"application/json"}
    })
    let data = await response.json()
    fetchAgenda()

}
export const getContacts = async (dispatchEvent, payload) => {
    let response = await fetch ("https://playground.4geeks.com/contact/agendas/marcostorresf/contacts")
    let data = await response.json();

  
    dispatch({
        type: "get_contacts",
        payload: {contacts: data.contacts },
    });
}