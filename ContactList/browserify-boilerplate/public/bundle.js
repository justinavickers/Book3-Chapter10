(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//boilerplate that is going to list all contacts
function contactDiv(contact) {
  let contacts = `<div class="contact>
    <h1> ${contact.name}</h1>
    <p> ${contact.phoneNumber}</p>
    <p> ${contact.address}</p>
    </div>`;
  return contacts;
}

var _default = contactDiv;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//loads exiting contacts(get all) save new(auto gen id)
const APIfunctions = {
  getContacts() {
    return fetch("http://localhost:3000/contacts").then(contacts => contacts.json()).then(parsedContacts => parsedContacts);
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
  }

};
var _default = APIfunctions;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

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

  _contactCollection.default.postContacts(obj).then(() => {
    location.reload();
  });
} //sending out the createInformation function


var _default = createInformation;
exports.default = _default;

},{"./contactCollection":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection"));

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
} //clearing the Dom each time we load the page


function clearContacts() {
  domEntry.innerHTML = "";
} //the function that uses the functions prior to extract information from the JSON.
//then take that information and turn it into a Div and lastly injecting it into the DOM.


const contactListToDom = () => {
  clearContacts();

  _contactCollection.default.getContacts().then(parsedContacts => contactList(parsedContacts));
};

var _default = contactListToDom;
exports.default = _default;

},{"./contact":1,"./contactCollection":2}],5:[function(require,module,exports){
"use strict";

var _contactForm = _interopRequireDefault(require("./contactForm"));

var _contactList = _interopRequireDefault(require("./contactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//things we need to pull and inject into the ^^
console.log("hello"); //just checking to make sure we can see the JS main^^

const submitButton = document.querySelector("#submitButton"); //targeting the submit buitton^^

(0, _contactList.default)(); //displaying contactList to the dom^^
//import contact list and contact form

submitButton.addEventListener("click", () => {
  console.log("You clicked me");
  (0, _contactForm.default)();
});

},{"./contactForm":3,"./contactList":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7QUFDQSxTQUFTLFVBQVQsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDM0IsTUFBSSxRQUFRLEdBQ1Q7V0FDTSxPQUFPLENBQUMsSUFBSztVQUNkLE9BQU8sQ0FBQyxXQUFZO1VBQ3BCLE9BQU8sQ0FBQyxPQUFRO1dBSnhCO0FBTUUsU0FBTyxRQUFQO0FBQ0Q7O2VBRWMsVTs7Ozs7Ozs7OztBQ1hqQjtBQUNBLE1BQU0sWUFBWSxHQUFDO0FBQ2pCLEVBQUEsV0FBVyxHQUFFO0FBQ1osV0FBTyxLQUFLLENBQUMsZ0NBQUQsQ0FBTCxDQUNMLElBREssQ0FDQSxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWixFQUVMLElBRkssQ0FFQSxjQUFjLElBQUksY0FGbEIsQ0FBUDtBQUdBLEdBTGdCOztBQU1qQjtBQUNBLEVBQUEsWUFBWSxDQUFDLEdBQUQsRUFBSztBQUNkLFdBQU8sS0FBSyxDQUFDLGdDQUFELEVBQW1DO0FBQzlDLE1BQUEsTUFBTSxFQUFDLE1BRHVDO0FBRTlDLE1BQUEsT0FBTyxFQUFHO0FBQ04sd0JBQWdCO0FBRFYsT0FGb0M7QUFLOUMsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmO0FBTHdDLEtBQW5DLENBQVo7QUFPRjs7QUFmZ0IsQ0FBbkI7ZUFpQmlCLFk7Ozs7Ozs7Ozs7O0FDakJqQjs7OztBQUNBLFNBQVMsaUJBQVQsR0FBNEI7QUFDMUI7QUFDQTtBQUNFLFFBQU0sSUFBSSxHQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBQVo7QUFDQSxRQUFNLE9BQU8sR0FBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQUFmO0FBQ0EsUUFBTSxXQUFXLEdBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkIsQ0FMd0IsQ0FNeEI7O0FBQ0EsTUFBSSxHQUFHLEdBQUM7QUFDTixJQUFBLElBQUksRUFBRSxFQURBO0FBRU4sSUFBQSxPQUFPLEVBQUUsRUFGSDtBQUdOLElBQUEsV0FBVyxFQUFFLEVBSFAsQ0FLUjs7QUFMUSxHQUFSO0FBTUEsRUFBQSxHQUFHLENBQUMsSUFBSixHQUFVLElBQUksQ0FBQyxLQUFmO0FBQ0EsRUFBQSxHQUFHLENBQUMsT0FBSixHQUFhLE9BQU8sQ0FBQyxLQUFyQjtBQUNBLEVBQUEsR0FBRyxDQUFDLFdBQUosR0FBaUIsV0FBVyxDQUFDLEtBQTdCLENBZndCLENBZ0J4Qjs7QUFDQSw2QkFBYSxZQUFiLENBQTBCLEdBQTFCLEVBQ0MsSUFERCxDQUNNLE1BQUk7QUFDUixJQUFBLFFBQVEsQ0FBQyxNQUFUO0FBQ0QsR0FIRDtBQUlILEMsQ0FDRDs7O2VBQ2UsaUI7Ozs7Ozs7Ozs7O0FDdkJmOztBQUNBOzs7O0FBSEE7QUFDQTtBQUdBO0FBQ0EsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjs7QUFDQSxTQUFTLFdBQVQsQ0FBcUIsY0FBckIsRUFBcUM7QUFDbkMsRUFBQSxjQUFjLENBQUMsT0FBZixDQUF1QixPQUFPLElBQUU7QUFDOUIsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVosRUFEOEIsQ0FFOUI7O0FBQ0EsUUFBSSxlQUFlLEdBQUcsc0JBQVcsT0FBWCxDQUF0QjtBQUNBLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBSjhCLENBSzlCOztBQUNBLElBQUEsUUFBUSxDQUFDLFNBQVQsSUFBb0IsZUFBcEI7QUFDRCxHQVBEO0FBUUQsQyxDQUNEOzs7QUFDQSxTQUFTLGFBQVQsR0FBd0I7QUFDdEIsRUFBQSxRQUFRLENBQUMsU0FBVCxHQUFxQixFQUFyQjtBQUNELEMsQ0FDRDtBQUNBOzs7QUFDQSxNQUFNLGdCQUFnQixHQUFHLE1BQU07QUFDN0IsRUFBQSxhQUFhOztBQUNiLDZCQUFhLFdBQWIsR0FBMkIsSUFBM0IsQ0FBZ0MsY0FBYyxJQUFJLFdBQVcsQ0FBQyxjQUFELENBQTdEO0FBRUQsQ0FKRDs7ZUFNZSxnQjs7Ozs7O0FDNUJmOztBQUNBOzs7O0FBQ0E7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVosRSxDQUNBOztBQUNBLE1BQU0sWUFBWSxHQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBQXBCLEMsQ0FDQTs7QUFDQSw0QixDQUNBO0FBQ0E7O0FBQ0EsWUFBWSxDQUFDLGdCQUFiLENBQThCLE9BQTlCLEVBQXNDLE1BQUk7QUFDeEMsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGdCQUFaO0FBQ0E7QUFBb0IsQ0FGdEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL2JvaWxlcnBsYXRlIHRoYXQgaXMgZ29pbmcgdG8gbGlzdCBhbGwgY29udGFjdHNcbmZ1bmN0aW9uIGNvbnRhY3REaXYoY29udGFjdCkge1xuICBsZXQgY29udGFjdHM9XG4gICAgYDxkaXYgY2xhc3M9XCJjb250YWN0PlxuICAgIDxoMT4gJHtjb250YWN0Lm5hbWV9PC9oMT5cbiAgICA8cD4gJHtjb250YWN0LnBob25lTnVtYmVyfTwvcD5cbiAgICA8cD4gJHtjb250YWN0LmFkZHJlc3N9PC9wPlxuICAgIDwvZGl2PmBcbiAgICByZXR1cm4gY29udGFjdHNcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNvbnRhY3REaXYiLCIvL2xvYWRzIGV4aXRpbmcgY29udGFjdHMoZ2V0IGFsbCkgc2F2ZSBuZXcoYXV0byBnZW4gaWQpXG5jb25zdCBBUElmdW5jdGlvbnM9e1xuICBnZXRDb250YWN0cygpe1xuICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2NvbnRhY3RzXCIpXG4gICAgLnRoZW4oY29udGFjdHMgPT4gY29udGFjdHMuanNvbigpKVxuICAgIC50aGVuKHBhcnNlZENvbnRhY3RzID0+IHBhcnNlZENvbnRhY3RzKVxuICB9LFxuICAvL2hvdyB3ZSBhcmUgc2VuZGluZyB0aGluZ3MgaW50byB0aGUgSlNPTiBmb2xkZXIgZnJvbSB1c2VyIGlucHV0XG4gIHBvc3RDb250YWN0cyhvYmope1xuICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY29udGFjdHNcIiwge1xuICAgICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgICAgaGVhZGVycyA6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcbiAgICB9KVxuICB9XG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQgQVBJZnVuY3Rpb25zIiwiXG5pbXBvcnQgQVBJZnVuY3Rpb25zIGZyb20gXCIuL2NvbnRhY3RDb2xsZWN0aW9uXCJcbmZ1bmN0aW9uIGNyZWF0ZUluZm9ybWF0aW9uKCl7XG4gIC8vd2hlcmUgd2UgYXJlIHRhcmdldGluZyB0byBnZXQgdGhlIHZhbHVlcyBmb3IgdGhlIG5hbWUgYWRkcmVzcyBhbmQgcGhvbmUgbnVtYmVyIGZvciBvdXJcbiAgLy9vYmplY3QgdG8gZ28gdG8gdGhlIEFQSVxuICAgIGNvbnN0IG5hbWU9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKVxuICAgIGNvbnN0IGFkZHJlc3M9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkcmVzc0VudHJ5XCIpXG4gICAgY29uc3QgcGhvbmVOdW1iZXI9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVOdW1iZXJcIilcbiAgICAvL2FuIGVtcHR5IG9iamVjdCBmb3IgdXMgdG8gZmlsbCBwdXR0aW5nIGludG8gdGhlIEFQSVxuICAgIGxldCBvYmo9e1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgICBwaG9uZU51bWJlcjogXCJcIlxuICAgIH1cbiAgICAvL2ZpbGxpbmcgdGhlIG9iamVjdCB3aXRoIHRoaW5ncyB3ZSB0YXJnZXRlZFxuICAgIG9iai5uYW1lPShuYW1lLnZhbHVlKVxuICAgIG9iai5hZGRyZXNzPShhZGRyZXNzLnZhbHVlKVxuICAgIG9iai5waG9uZU51bWJlcj0ocGhvbmVOdW1iZXIudmFsdWUpXG4gICAgLy9zZW5kaW5nIHRoZSBvYmplY3QgdG8gdGhlIEpTT04gd2l0aCB0aGUgUE9TVCBmdW5jdGlvbiB3ZSBtYWRlIGluIGNvbnRhY3RDb2xsZWN0aW9uXG4gICAgQVBJZnVuY3Rpb25zLnBvc3RDb250YWN0cyhvYmopXG4gICAgLnRoZW4oKCk9PntcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcbn1cbi8vc2VuZGluZyBvdXQgdGhlIGNyZWF0ZUluZm9ybWF0aW9uIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbmZvcm1hdGlvbiIsIi8vZGlzcGxheXMgYWxsIGNvbnRhY3RzXG4vL2ltcG9ydGluZyBjb250YWN0IGNvbGxlY3Rpb25cbmltcG9ydCBBUElmdW5jdGlvbnMgZnJvbSBcIi4vY29udGFjdENvbGxlY3Rpb25cIlxuaW1wb3J0IGNvbnRhY3REaXYgZnJvbSBcIi4vY29udGFjdFwiXG4vL1RhcmdldGluZyB0aGUgSUQgd2Ugd2lsbCBpbmplY3QgdGhpbmdzIGludG8gdGhlIERPTVxubGV0IGRvbUVudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIilcbmZ1bmN0aW9uIGNvbnRhY3RMaXN0KHBhcnNlZENvbnRhY3RzKSB7XG4gIHBhcnNlZENvbnRhY3RzLmZvckVhY2goY29udGFjdD0+e1xuICAgIGNvbnNvbGUubG9nKGNvbnRhY3QpXG4gICAgLy9jcmVhdGluZyBlYWNoIGNvbnRhY3QgaW5zaWRlIGl0cyBuZXcgZGl2XG4gICAgbGV0IGNvbnRhY3RDb250ZW50cyA9IGNvbnRhY3REaXYoY29udGFjdClcbiAgICBjb25zb2xlLmxvZyhkb21FbnRyeSlcbiAgICAvL3NlbmRpbmcgdGhlIG5ldyBkaXYgdG8gdGhlIEhUTUwgdGhydSBpdHMgZW50cnkgcG9pbnRcbiAgICBkb21FbnRyeS5pbm5lckhUTUwrPWNvbnRhY3RDb250ZW50c1xuICB9KVxufVxuLy9jbGVhcmluZyB0aGUgRG9tIGVhY2ggdGltZSB3ZSBsb2FkIHRoZSBwYWdlXG5mdW5jdGlvbiBjbGVhckNvbnRhY3RzKCl7XG4gIGRvbUVudHJ5LmlubmVySFRNTCA9IFwiXCJcbn1cbi8vdGhlIGZ1bmN0aW9uIHRoYXQgdXNlcyB0aGUgZnVuY3Rpb25zIHByaW9yIHRvIGV4dHJhY3QgaW5mb3JtYXRpb24gZnJvbSB0aGUgSlNPTi5cbi8vdGhlbiB0YWtlIHRoYXQgaW5mb3JtYXRpb24gYW5kIHR1cm4gaXQgaW50byBhIERpdiBhbmQgbGFzdGx5IGluamVjdGluZyBpdCBpbnRvIHRoZSBET00uXG5jb25zdCBjb250YWN0TGlzdFRvRG9tID0gKCkgPT4ge1xuICBjbGVhckNvbnRhY3RzKClcbiAgQVBJZnVuY3Rpb25zLmdldENvbnRhY3RzKCkudGhlbihwYXJzZWRDb250YWN0cyA9PiBjb250YWN0TGlzdChwYXJzZWRDb250YWN0cykpXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdExpc3RUb0RvbSIsImltcG9ydCBjcmVhdGVJbmZvcm1hdGlvbiBmcm9tIFwiLi9jb250YWN0Rm9ybVwiXHJcbmltcG9ydCBjb250YWN0TGlzdFRvRG9tIGZyb20gXCIuL2NvbnRhY3RMaXN0XCJcclxuLy90aGluZ3Mgd2UgbmVlZCB0byBwdWxsIGFuZCBpbmplY3QgaW50byB0aGUgXl5cclxuY29uc29sZS5sb2coXCJoZWxsb1wiKVxyXG4vL2p1c3QgY2hlY2tpbmcgdG8gbWFrZSBzdXJlIHdlIGNhbiBzZWUgdGhlIEpTIG1haW5eXlxyXG5jb25zdCBzdWJtaXRCdXR0b249IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnV0dG9uXCIpXHJcbi8vdGFyZ2V0aW5nIHRoZSBzdWJtaXQgYnVpdHRvbl5eXHJcbmNvbnRhY3RMaXN0VG9Eb20oKVxyXG4vL2Rpc3BsYXlpbmcgY29udGFjdExpc3QgdG8gdGhlIGRvbV5eXHJcbi8vaW1wb3J0IGNvbnRhY3QgbGlzdCBhbmQgY29udGFjdCBmb3JtXHJcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gIGNvbnNvbGUubG9nKFwiWW91IGNsaWNrZWQgbWVcIilcclxuICBjcmVhdGVJbmZvcm1hdGlvbigpfSkiXX0=
