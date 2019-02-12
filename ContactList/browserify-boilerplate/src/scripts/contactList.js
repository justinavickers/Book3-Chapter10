//displays all contacts
//importing contact collection
import APIfunctions from "./api"
import contactDiv from "./contact"
//Targeting the ID we will inject things into the DOM
let domEntry = document.querySelector("#submit")
function contactList(parsedContacts) {
  parsedContacts.forEach(contact => {
    console.log(contact)
    //creating each contact inside its new div
    let contactContents = contactDiv(contact)
    console.log(domEntry)
    //sending the new div to the HTML thru its entry point
    domEntry.innerHTML += contactContents
  })
establishDeleteFunctions(parsedContacts)
}

function establishDeleteFunctions(contacts) {
  contacts.forEach(contact => {
    const button = document.getElementById("deleteButton" + contact.id)
    button.addEventListener("click", async () => {
     await APIfunctions.deleteContacts(contact.id)
    domEntry.innerHTML = ""
    contactListToDom()
    })
  })
}
// //the function that uses the functions prior to extract information from the JSON.
//then take that information and turn it into a Div and lastly injecting it into the DOM.
const contactListToDom = () => {
  APIfunctions.getContacts().then(parsedContacts => contactList(parsedContacts))

}

export default contactListToDom