//boilerplate that is going to list all contacts
function contactDiv(contact) {
  let contacts=
    `<div class="contact>
    <h1> ${contact.name}</h1>
    <p> ${contact.phoneNumber}</p>
    <p> ${contact.address}</p>
    </div>`
    return contacts
  }

  export default contactDiv