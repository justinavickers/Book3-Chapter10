import createInformation from "./contactForm"
import contactListToDom from "./contactList"
import renderContacts from "./contactToDOM";
//things we need to pull and inject into the ^^
console.log("hello")
//just checking to make sure we can see the JS main^^
const submitButton = document.querySelector("#submitButton")
//targeting the submit buitton^^
contactListToDom()
//displaying contactList to the dom^^
//import contact list and contact form
submitButton.addEventListener("click", () => {
  console.log("You clicked me")
  createInformation()
}
)