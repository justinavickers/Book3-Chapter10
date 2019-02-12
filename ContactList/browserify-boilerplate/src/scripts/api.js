const APIfunctions={
  getContacts(){
   return fetch("http://localhost:3000/contacts")
    .then(contacts => contacts.json())
  },
  //how we are sending things into the JSON folder from user input
  postContacts(obj){
     return fetch("http://localhost:3000/contacts", {
      method:"POST",
      headers : {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
  },

  deleteContacts(id) {
    return fetch(`http://localhost:3000/contacts/${id}`, {
      method:"DELETE"
    })
  }
  }
  export default APIfunctions