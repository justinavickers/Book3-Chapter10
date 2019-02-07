//displays all contacts
//importing contact collection
import APIfunctions from "./contactCollection"
import contactDiv from "./contact"
//Targeting the ID we will inject things into the DOM
let domEntry = document.querySelector("#submit")
function contactList(parsedContacts) {
  parsedContacts.forEach(contact=>{
    console.log(contact)
    //creating each contact inside its new div
    let contactContents = contactDiv(contact)
    console.log(domEntry)
    //sending the new div to the HTML thru its entry point
    domEntry.innerHTML+=contactContents
  })
}
//clearing the Dom each time we load the page
function clearContacts(){
  domEntry.innerHTML = ""
}
//the function that uses the functions prior to extract information from the JSON.
//then take that information and turn it into a Div and lastly injecting it into the DOM.
const contactListToDom = () => {
  clearContacts()
  APIfunctions.getContacts().then(parsedContacts => contactList(parsedContacts))

}

export default contactListToDom