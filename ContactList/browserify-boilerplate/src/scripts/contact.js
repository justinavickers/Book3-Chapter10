//boilerplate that is going to list all contacts
function contactDiv(contact) {
  let contacts=
    `<div id="contactContainer${contact.id}" class="contact">
    <h1> ${contact.name}</h1>
    <p> ${contact.phoneNumber}</p>
    <p> ${contact.address}</p>
    <button id="deleteButton${contact.id}">Delete ${contact.name} </button>
    </div>`
    return contacts
  }

  export default contactDiv