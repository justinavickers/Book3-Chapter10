(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const APIfunctions = {
  getContacts() {
    return fetch("http://localhost:3000/contacts").then(contacts => contacts.json());
  },

  //how we are sending things into the JSON folder from user input
  postContacts(obj) {
    return fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    });
  },

  deleteContacts(id) {
    return fetch(`http://localhost:3000/contacts/${id}`, {
      method: "DELETE"
    });
  }

};
var _default = APIfunctions;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//boilerplate that is going to list all contacts
function contactDiv(contact) {
  let contacts = `<div id="contactContainer${contact.id}" class="contact">
    <h1> ${contact.name}</h1>
    <p> ${contact.phoneNumber}</p>
    <p> ${contact.address}</p>
    <button id="deleteButton${contact.id}">Delete ${contact.name} </button>
    </div>`;
  return contacts;
}

var _default = contactDiv;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contact = _interopRequireDefault(require("./contact"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createInformation() {
  //where we are targeting to get the values for the name address and phone number for our
  //object to go to the API
  const name = document.querySelector("#name");
  const address = document.querySelector("#addressEntry");
  const phoneNumber = document.querySelector("#phoneNumber"); //an empty object for us to fill putting into the API

  let obj = {
    name: "",
    address: "",
    phoneNumber: "" //filling the object with things we targeted

  };
  obj.name = name.value;
  obj.address = address.value;
  obj.phoneNumber = phoneNumber.value; //sending the object to the JSON with the POST function we made in contactCollection

  _api.default.postContacts(obj).then(() => {
    _api.default.getContacts().then(parsedContacts => {
      console.log(parsedContacts);
    });
  });

  const objHTML = (0, _contact.default)(obj);
  document.querySelector("#submit").innerHTML += objHTML;
} //sending out the createInformation function


var _default = createInformation; //create a function to convert the objects to HTML and then a
//function to display them to the dom

exports.default = _default;

},{"./api":1,"./contact":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(require("./api"));

var _contact = _interopRequireDefault(require("./contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//displays all contacts
//importing contact collection
//Targeting the ID we will inject things into the DOM
let domEntry = document.querySelector("#submit");

function contactList(parsedContacts) {
  parsedContacts.forEach(contact => {
    console.log(contact); //creating each contact inside its new div

    let contactContents = (0, _contact.default)(contact);
    console.log(domEntry); //sending the new div to the HTML thru its entry point

    domEntry.innerHTML += contactContents;
  });
  establishDeleteFunctions(parsedContacts);
}

function establishDeleteFunctions(contacts) {
  contacts.forEach(contact => {
    const button = document.getElementById("deleteButton" + contact.id);
    button.addEventListener("click", async () => {
      await _api.default.deleteContacts(contact.id);
      domEntry.innerHTML = "";
      contactListToDom();
    });
  });
} // //the function that uses the functions prior to extract information from the JSON.
//then take that information and turn it into a Div and lastly injecting it into the DOM.


const contactListToDom = () => {
  _api.default.getContacts().then(parsedContacts => contactList(parsedContacts));
};

var _default = contactListToDom;
exports.default = _default;

},{"./api":1,"./contact":2}],5:[function(require,module,exports){
"use strict";

var _contactForm = _interopRequireDefault(require("./contactForm"));

var _contactList = _interopRequireDefault(require("./contactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//things we need to pull and inject into the ^^
console.log("hello"); //just checking to make sure we can see the JS main^^

const submitButton = document.querySelector("#submitButton"); //targeting the submit buitton^^

(0, _contactList.default)(); //displaying contactList to the dom^^
//import contact list and contact form

submitButton.addEventListener("click", async () => {
  console.log("You clicked me");
  await (0, _contactForm.default)();
  let domEntry = document.querySelector("#submit");
  domEntry.innerHTML = "";
  (0, _contactList.default)();
});

},{"./contactForm":3,"./contactList":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2FwaS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdC5qcyIsIi4uL3NjcmlwdHMvY29udGFjdEZvcm0uanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RMaXN0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxZQUFZLEdBQUM7QUFDakIsRUFBQSxXQUFXLEdBQUU7QUFDWixXQUFPLEtBQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ0wsSUFESyxDQUNBLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURaLENBQVA7QUFFQSxHQUpnQjs7QUFLakI7QUFDQSxFQUFBLFlBQVksQ0FBQyxHQUFELEVBQUs7QUFDZCxXQUFPLEtBQUssQ0FBQyxnQ0FBRCxFQUFtQztBQUM5QyxNQUFBLE1BQU0sRUFBQyxNQUR1QztBQUU5QyxNQUFBLE9BQU8sRUFBRztBQUNOLHdCQUFnQjtBQURWLE9BRm9DO0FBSzlDLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsR0FBZjtBQUx3QyxLQUFuQyxDQUFaO0FBT0YsR0FkZ0I7O0FBZ0JqQixFQUFBLGNBQWMsQ0FBQyxFQUFELEVBQUs7QUFDakIsV0FBTyxLQUFLLENBQUUsa0NBQWlDLEVBQUcsRUFBdEMsRUFBeUM7QUFDbkQsTUFBQSxNQUFNLEVBQUM7QUFENEMsS0FBekMsQ0FBWjtBQUdEOztBQXBCZ0IsQ0FBbkI7ZUFzQmlCLFk7Ozs7Ozs7Ozs7O0FDdEJqQjtBQUNBLFNBQVMsVUFBVCxDQUFvQixPQUFwQixFQUE2QjtBQUMzQixNQUFJLFFBQVEsR0FDVCw0QkFBMkIsT0FBTyxDQUFDLEVBQUc7V0FDaEMsT0FBTyxDQUFDLElBQUs7VUFDZCxPQUFPLENBQUMsV0FBWTtVQUNwQixPQUFPLENBQUMsT0FBUTs4QkFDSSxPQUFPLENBQUMsRUFBRyxZQUFXLE9BQU8sQ0FB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Q0FBQyxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFZO0FBQ2pELEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLFFBQU0sMkJBQU47QUFDQSxNQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0QsRUFBQSxRQUFRLENBQUMsU0FBVCxHQUFxQixFQUFyQjtBQUNHO0FBQ0gsQ0FORCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IEFQSWZ1bmN0aW9ucz17XG4gIGdldENvbnRhY3RzKCl7XG4gICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY29udGFjdHNcIilcbiAgICAudGhlbihjb250YWN0cyA9PiBjb250YWN0cy5qc29uKCkpXG4gIH0sXG4gIC8vaG93IHdlIGFyZSBzZW5kaW5nIHRoaW5ncyBpbnRvIHRoZSBKU09OIGZvbGRlciBmcm9tIHVzZXIgaW5wdXRcbiAgcG9zdENvbnRhY3RzKG9iail7XG4gICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb250YWN0c1wiLCB7XG4gICAgICBtZXRob2Q6XCJQT1NUXCIsXG4gICAgICBoZWFkZXJzIDoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxuICAgIH0pXG4gIH0sXG5cbiAgZGVsZXRlQ29udGFjdHMoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb250YWN0cy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDpcIkRFTEVURVwiXG4gICAgfSlcbiAgfVxuICB9XG4gIGV4cG9ydCBkZWZhdWx0IEFQSWZ1bmN0aW9ucyIsIi8vYm9pbGVycGxhdGUgdGhhdCBpcyBnb2luZyB0byBsaXN0IGFsbCBjb250YWN0c1xuZnVuY3Rpb24gY29udGFjdERpdihjb250YWN0KSB7XG4gIGxldCBjb250YWN0cz1cbiAgICBgPGRpdiBpZD1cImNvbnRhY3RDb250YWluZXIke2NvbnRhY3QuaWR9XCIgY2xhc3M9XCJjb250YWN0XCI+XG4gICAgPGgxPiAke2NvbnRhY3QubmFtZX08L2gxPlxuICAgIDxwPiAke2NvbnRhY3QucGhvbmVOdW1iZXJ9PC9wPlxuICAgIDxwPiAke2NvbnRhY3QuYWRkcmVzc308L3A+XG4gICAgPGJ1dHRvbiBpZD1cImRlbGV0ZUJ1dHRvbiR7Y29udGFjdC5pZH1cIj5EZWxldGUgJHtjb250YWN0Lm5hbWV9IDwvYnV0dG9uPlxuICAgIDwvZGl2PmBcbiAgICByZXR1cm4gY29udGFjdHNcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNvbnRhY3REaXYiLCJpbXBvcnQgY29udGFjdERJViBmcm9tIFwiLi9jb250YWN0XCJcbmltcG9ydCBBUElmdW5jdGlvbnMgZnJvbSBcIi4vYXBpXCJcbmZ1bmN0aW9uIGNyZWF0ZUluZm9ybWF0aW9uKCkge1xuICAgIC8vd2hlcmUgd2UgYXJlIHRhcmdldGluZyB0byBnZXQgdGhlIHZhbHVlcyBmb3IgdGhlIG5hbWUgYWRkcmVzcyBhbmQgcGhvbmUgbnVtYmVyIGZvciBvdXJcbiAgICAvL29iamVjdCB0byBnbyB0byB0aGUgQVBJXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKVxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZHJlc3NFbnRyeVwiKVxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZU51bWJlclwiKVxuICAgIC8vYW4gZW1wdHkgb2JqZWN0IGZvciB1cyB0byBmaWxsIHB1dHRpbmcgaW50byB0aGUgQVBJXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgYWRkcmVzczogXCJcIixcbiAgICAgICAgcGhvbmVOdW1iZXI6IFwiXCJcbiAgICB9XG4gICAgLy9maWxsaW5nIHRoZSBvYmplY3Qgd2l0aCB0aGluZ3Mgd2UgdGFyZ2V0ZWRcbiAgICBvYmoubmFtZSA9IG5hbWUudmFsdWVcbiAgICBvYmouYWRkcmVzcyA9IGFkZHJlc3MudmFsdWVcbiAgICBvYmoucGhvbmVOdW1iZXIgPSBwaG9uZU51bWJlci52YWx1ZVxuICAgIC8vc2VuZGluZyB0aGUgb2JqZWN0IHRvIHRoZSBKU09OIHdpdGggdGhlIFBPU1QgZnVuY3Rpb24gd2UgbWFkZSBpbiBjb250YWN0Q29sbGVjdGlvblxuICAgIEFQSWZ1bmN0aW9ucy5wb3N0Q29udGFjdHMob2JqKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgQVBJZnVuY3Rpb25zLmdldENvbnRhY3RzKClcbiAgICAudGhlbigocGFyc2VkQ29udGFjdHMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocGFyc2VkQ29udGFjdHMpXG4gICAgfSlcbn0pXG5jb25zdCBvYmpIVE1MID0gY29udGFjdERJVihvYmopXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKS5pbm5lckhUTUwgKz0gb2JqSFRNTFxuXG59XG4vL3NlbmRpbmcgb3V0IHRoZSBjcmVhdGVJbmZvcm1hdGlvbiBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5mb3JtYXRpb25cblxuXG4vL2NyZWF0ZSBhIGZ1bmN0aW9uIHRvIGNvbnZlcnQgdGhlIG9iamVjdHMgdG8gSFRNTCBhbmQgdGhlbiBhXG4vL2Z1bmN0aW9uIHRvIGRpc3BsYXkgdGhlbSB0byB0aGUgZG9tIiwiLy9kaXNwbGF5cyBhbGwgY29udGFjdHNcbi8vaW1wb3J0aW5nIGNvbnRhY3QgY29sbGVjdGlvblxuaW1wb3J0IEFQSWZ1bmN0aW9ucyBmcm9tIFwiLi9hcGlcIlxuaW1wb3J0IGNvbnRhY3REaXYgZnJvbSBcIi4vY29udGFjdFwiXG4vL1RhcmdldGluZyB0aGUgSUQgd2Ugd2lsbCBpbmplY3QgdGhpbmdzIGludG8gdGhlIERPTVxubGV0IGRvbUVudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIilcbmZ1bmN0aW9uIGNvbnRhY3RMaXN0KHBhcnNlZENvbnRhY3RzKSB7XG4gIHBhcnNlZENvbnRhY3RzLmZvckVhY2goY29udGFjdCA9PiB7XG4gICAgY29uc29sZS5sb2coY29udGFjdClcbiAgICAvL2NyZWF0aW5nIGVhY2ggY29udGFjdCBpbnNpZGUgaXRzIG5ldyBkaXZcbiAgICBsZXQgY29udGFjdENvbnRlbnRzID0gY29udGFjdERpdihjb250YWN0KVxuICAgIGNvbnNvbGUubG9nKGRvbUVudHJ5KVxuICAgIC8vc2VuZGluZyB0aGUgbmV3IGRpdiB0byB0aGUgSFRNTCB0aHJ1IGl0cyBlbnRyeSBwb2ludFxuICAgIGRvbUVudHJ5LmlubmVySFRNTCArPSBjb250YWN0Q29udGVudHNcbiAgfSlcbmVzdGFibGlzaERlbGV0ZUZ1bmN0aW9ucyhwYXJzZWRDb250YWN0cylcbn1cblxuZnVuY3Rpb24gZXN0YWJsaXNoRGVsZXRlRnVuY3Rpb25zKGNvbnRhY3RzKSB7XG4gIGNvbnRhY3RzLmZvckVhY2goY29udGFjdCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVCdXR0b25cIiArIGNvbnRhY3QuaWQpXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgIGF3YWl0IEFQSWZ1bmN0aW9ucy5kZWxldGVDb250YWN0cyhjb250YWN0LmlkKVxuICAgIGRvbUVudHJ5LmlubmVySFRNTCA9IFwiXCJcbiAgICBjb250YWN0TGlzdFRvRG9tKClcbiAgICB9KVxuICB9KVxufVxuLy8gLy90aGUgZnVuY3Rpb24gdGhhdCB1c2VzIHRoZSBmdW5jdGlvbnMgcHJpb3IgdG8gZXh0cmFjdCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBKU09OLlxuLy90aGVuIHRha2UgdGhhdCBpbmZvcm1hdGlvbiBhbmQgdHVybiBpdCBpbnRvIGEgRGl2IGFuZCBsYXN0bHkgaW5qZWN0aW5nIGl0IGludG8gdGhlIERPTS5cbmNvbnN0IGNvbnRhY3RMaXN0VG9Eb20gPSAoKSA9PiB7XG4gIEFQSWZ1bmN0aW9ucy5nZXRDb250YWN0cygpLnRoZW4ocGFyc2VkQ29udGFjdHMgPT4gY29udGFjdExpc3QocGFyc2VkQ29udGFjdHMpKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RMaXN0VG9Eb20iLCJpbXBvcnQgY3JlYXRlSW5mb3JtYXRpb24gZnJvbSBcIi4vY29udGFjdEZvcm1cIlxyXG5pbXBvcnQgY29udGFjdExpc3RUb0RvbSBmcm9tIFwiLi9jb250YWN0TGlzdFwiXHJcbi8vdGhpbmdzIHdlIG5lZWQgdG8gcHVsbCBhbmQgaW5qZWN0IGludG8gdGhlIF5eXHJcbmNvbnNvbGUubG9nKFwiaGVsbG9cIilcclxuLy9qdXN0IGNoZWNraW5nIHRvIG1ha2Ugc3VyZSB3ZSBjYW4gc2VlIHRoZSBKUyBtYWluXl5cclxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRCdXR0b25cIilcclxuLy90YXJnZXRpbmcgdGhlIHN1Ym1pdCBidWl0dG9uXl5cclxuY29udGFjdExpc3RUb0RvbSgpXHJcbi8vZGlzcGxheWluZyBjb250YWN0TGlzdCB0byB0aGUgZG9tXl5cclxuLy9pbXBvcnQgY29udGFjdCBsaXN0IGFuZCBjb250YWN0IGZvcm1cclxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJZb3UgY2xpY2tlZCBtZVwiKVxyXG4gIGF3YWl0IGNyZWF0ZUluZm9ybWF0aW9uKClcclxuICBsZXQgZG9tRW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKVxyXG4gZG9tRW50cnkuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgY29udGFjdExpc3RUb0RvbSgpXHJcbn1cclxuKSJdfQ==
