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

var _contact = _interopRequireDefault(require("./contact"));

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
    _contactCollection.default.getContacts().then(parsedContacts => {
      console.log(parsedContacts);
    });
  });
} //sending out the createInformation function


var _default = createInformation; //create a function to convert the objects to HTML and then a
//function to display them to the dom

exports.default = _default;

},{"./contact":1,"./contactCollection":2}],4:[function(require,module,exports){
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
    // console.log(contact)
    //creating each contact inside its new div
    let contactContents = (0, _contact.default)(contact); // console.log(domEntry)
    //sending the new div to the HTML thru its entry point

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7QUFDQSxTQUFTLFVBQVQsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDM0IsTUFBSSxRQUFRLEdBQ1Q7V0FDTSxPQUFPLENBQUMsSUFBSztVQUNkLE9BQU8sQ0FBQyxXQUFZO1VBQ3BCLE9BQU8sQ0FBQyxPQUFRO1dBSnhCO0FBTUUsU0FBTyxRQUFQO0FBQ0Q7O2VBRWMsVTs7Ozs7Ozs7OztBQ1hqQjtBQUNBLE1BQU0sWUFBWSxHQUFDO0FBQ2pCLEVBQUEsV0FBVyxHQUFFO0FBQ1osV0FBTyxLQUFLLENBQUMsZ0NBQUQsQ0FBTCxDQUNMLElBREssQ0FDQSxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWixDQUFQO0FBRUEsR0FKZ0I7O0FBS2pCO0FBQ0EsRUFBQSxZQUFZLENBQUMsR0FBRCxFQUFLO0FBQ2QsV0FBTyxLQUFLLENBQUMsZ0NBQUQsRUFBbUM7QUFDOUMsTUFBQSxNQUFNLEVBQUMsTUFEdUM7QUFFOUMsTUFBQSxPQUFPLEVBQUc7QUFDTix3QkFBZ0I7QUFEVixPQUZvQztBQUs5QyxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQWY7QUFMd0MsS0FBbkMsQ0FBWjtBQU9GOztBQWRnQixDQUFuQjtlQWdCaUIsWTs7Ozs7Ozs7Ozs7QUNoQmpCOztBQUNBOzs7O0FBQ0EsU0FBUyxpQkFBVCxHQUE2QjtBQUN6QjtBQUNBO0FBQ0EsUUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLFFBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBQWhCO0FBQ0EsUUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBcEIsQ0FMeUIsQ0FNekI7O0FBQ0EsTUFBSSxHQUFHLEdBQUc7QUFDTixJQUFBLElBQUksRUFBRSxFQURBO0FBRU4sSUFBQSxPQUFPLEVBQUUsRUFGSDtBQUdOLElBQUEsV0FBVyxFQUFFLEVBSFAsQ0FLVjs7QUFMVSxHQUFWO0FBTUEsRUFBQSxHQUFHLENBQUMsSUFBSixHQUFXLElBQUksQ0FBQyxLQUFoQjtBQUNBLEVBQUEsR0FBRyxDQUFDLE9BQUosR0FBYyxPQUFPLENBQUMsS0FBdEI7QUFDQSxFQUFBLEdBQUcsQ0FBQyxXQUFKLEdBQWtCLFdBQVcsQ0FBQyxLQUE5QixDQWZ5QixDQWdCekI7O0FBQ0EsNkJBQWEsWUFBYixDQUEwQixHQUExQixFQUNLLElBREwsQ0FDVSxNQUFNO0FBQ2hCLCtCQUFhLFdBQWIsR0FDQyxJQURELENBQ08sY0FBRCxJQUFvQjtBQUN0QixNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWjtBQUNILEtBSEQ7QUFJSyxHQU5MO0FBT0gsQyxDQUNEOzs7ZUFDZSxpQixFQUdmO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9CQTs7QUFDQTs7OztBQUhBO0FBQ0E7QUFHQTtBQUNBLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWY7O0FBQ0EsU0FBUyxXQUFULENBQXFCLGNBQXJCLEVBQXFDO0FBQ25DLEVBQUEsY0FBYyxDQUFDLE9BQWYsQ0FBdUIsT0FBTyxJQUFFO0FBQzlCO0FBQ0E7QUFDQSxRQUFJLGVBQWUsR0FBRyxzQkFBVyxPQUFYLENBQXRCLENBSDhCLENBSTlCO0FBQ0E7O0FBQ0EsSUFBQSxRQUFRLENBQUMsU0FBVCxJQUFvQixlQUFwQjtBQUNELEdBUEQ7QUFRRCxDLENBQ0Q7OztBQUNBLFNBQVMsYUFBVCxHQUF3QjtBQUN0QixFQUFBLFFBQVEsQ0FBQyxTQUFULEdBQXFCLEVBQXJCO0FBQ0QsQyxDQUNEO0FBQ0E7OztBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTTtBQUM3QixFQUFBLGFBQWE7O0FBQ2IsNkJBQWEsV0FBYixHQUEyQixJQUEzQixDQUFnQyxjQUFjLElBQUksV0FBVyxDQUFDLGNBQUQsQ0FBN0Q7QUFDRCxDQUhEOztlQUtlLGdCOzs7Ozs7QUMzQmY7O0FBQ0E7Ozs7QUFDQTtBQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWixFLENBQ0E7O0FBQ0EsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBckIsQyxDQUNBOztBQUNBLDRCLENBQ0E7QUFDQTs7QUFDQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsTUFBTTtBQUMzQyxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksZ0JBQVo7QUFDQTtBQUNELENBSEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL2JvaWxlcnBsYXRlIHRoYXQgaXMgZ29pbmcgdG8gbGlzdCBhbGwgY29udGFjdHNcbmZ1bmN0aW9uIGNvbnRhY3REaXYoY29udGFjdCkge1xuICBsZXQgY29udGFjdHM9XG4gICAgYDxkaXYgY2xhc3M9XCJjb250YWN0PlxuICAgIDxoMT4gJHtjb250YWN0Lm5hbWV9PC9oMT5cbiAgICA8cD4gJHtjb250YWN0LnBob25lTnVtYmVyfTwvcD5cbiAgICA8cD4gJHtjb250YWN0LmFkZHJlc3N9PC9wPlxuICAgIDwvZGl2PmBcbiAgICByZXR1cm4gY29udGFjdHNcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNvbnRhY3REaXYiLCIvL2xvYWRzIGV4aXRpbmcgY29udGFjdHMoZ2V0IGFsbCkgc2F2ZSBuZXcoYXV0byBnZW4gaWQpXG5jb25zdCBBUElmdW5jdGlvbnM9e1xuICBnZXRDb250YWN0cygpe1xuICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2NvbnRhY3RzXCIpXG4gICAgLnRoZW4oY29udGFjdHMgPT4gY29udGFjdHMuanNvbigpKVxuICB9LFxuICAvL2hvdyB3ZSBhcmUgc2VuZGluZyB0aGluZ3MgaW50byB0aGUgSlNPTiBmb2xkZXIgZnJvbSB1c2VyIGlucHV0XG4gIHBvc3RDb250YWN0cyhvYmope1xuICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY29udGFjdHNcIiwge1xuICAgICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgICAgaGVhZGVycyA6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcbiAgICB9KVxuICB9XG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQgQVBJZnVuY3Rpb25zIiwiXG5pbXBvcnQgQVBJZnVuY3Rpb25zIGZyb20gXCIuL2NvbnRhY3RDb2xsZWN0aW9uXCJcbmltcG9ydCBjb250YWN0RElWIGZyb20gXCIuL2NvbnRhY3RcIlxuZnVuY3Rpb24gY3JlYXRlSW5mb3JtYXRpb24oKSB7XG4gICAgLy93aGVyZSB3ZSBhcmUgdGFyZ2V0aW5nIHRvIGdldCB0aGUgdmFsdWVzIGZvciB0aGUgbmFtZSBhZGRyZXNzIGFuZCBwaG9uZSBudW1iZXIgZm9yIG91clxuICAgIC8vb2JqZWN0IHRvIGdvIHRvIHRoZSBBUElcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkcmVzc0VudHJ5XCIpXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lTnVtYmVyXCIpXG4gICAgLy9hbiBlbXB0eSBvYmplY3QgZm9yIHVzIHRvIGZpbGwgcHV0dGluZyBpbnRvIHRoZSBBUElcbiAgICBsZXQgb2JqID0ge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBcIlwiLFxuICAgICAgICBwaG9uZU51bWJlcjogXCJcIlxuICAgIH1cbiAgICAvL2ZpbGxpbmcgdGhlIG9iamVjdCB3aXRoIHRoaW5ncyB3ZSB0YXJnZXRlZFxuICAgIG9iai5uYW1lID0gbmFtZS52YWx1ZVxuICAgIG9iai5hZGRyZXNzID0gYWRkcmVzcy52YWx1ZVxuICAgIG9iai5waG9uZU51bWJlciA9IHBob25lTnVtYmVyLnZhbHVlXG4gICAgLy9zZW5kaW5nIHRoZSBvYmplY3QgdG8gdGhlIEpTT04gd2l0aCB0aGUgUE9TVCBmdW5jdGlvbiB3ZSBtYWRlIGluIGNvbnRhY3RDb2xsZWN0aW9uXG4gICAgQVBJZnVuY3Rpb25zLnBvc3RDb250YWN0cyhvYmopXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICBBUElmdW5jdGlvbnMuZ2V0Q29udGFjdHMoKVxuICAgIC50aGVuKChwYXJzZWRDb250YWN0cykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwYXJzZWRDb250YWN0cylcbiAgICB9KVxuICAgICAgICB9KVxufVxuLy9zZW5kaW5nIG91dCB0aGUgY3JlYXRlSW5mb3JtYXRpb24gZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUluZm9ybWF0aW9uXG5cblxuLy9jcmVhdGUgYSBmdW5jdGlvbiB0byBjb252ZXJ0IHRoZSBvYmplY3RzIHRvIEhUTUwgYW5kIHRoZW4gYVxuLy9mdW5jdGlvbiB0byBkaXNwbGF5IHRoZW0gdG8gdGhlIGRvbSIsIi8vZGlzcGxheXMgYWxsIGNvbnRhY3RzXG4vL2ltcG9ydGluZyBjb250YWN0IGNvbGxlY3Rpb25cbmltcG9ydCBBUElmdW5jdGlvbnMgZnJvbSBcIi4vY29udGFjdENvbGxlY3Rpb25cIlxuaW1wb3J0IGNvbnRhY3REaXYgZnJvbSBcIi4vY29udGFjdFwiXG4vL1RhcmdldGluZyB0aGUgSUQgd2Ugd2lsbCBpbmplY3QgdGhpbmdzIGludG8gdGhlIERPTVxubGV0IGRvbUVudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIilcbmZ1bmN0aW9uIGNvbnRhY3RMaXN0KHBhcnNlZENvbnRhY3RzKSB7XG4gIHBhcnNlZENvbnRhY3RzLmZvckVhY2goY29udGFjdD0+e1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbnRhY3QpXG4gICAgLy9jcmVhdGluZyBlYWNoIGNvbnRhY3QgaW5zaWRlIGl0cyBuZXcgZGl2XG4gICAgbGV0IGNvbnRhY3RDb250ZW50cyA9IGNvbnRhY3REaXYoY29udGFjdClcbiAgICAvLyBjb25zb2xlLmxvZyhkb21FbnRyeSlcbiAgICAvL3NlbmRpbmcgdGhlIG5ldyBkaXYgdG8gdGhlIEhUTUwgdGhydSBpdHMgZW50cnkgcG9pbnRcbiAgICBkb21FbnRyeS5pbm5lckhUTUwrPWNvbnRhY3RDb250ZW50c1xuICB9KVxufVxuLy9jbGVhcmluZyB0aGUgRG9tIGVhY2ggdGltZSB3ZSBsb2FkIHRoZSBwYWdlXG5mdW5jdGlvbiBjbGVhckNvbnRhY3RzKCl7XG4gIGRvbUVudHJ5LmlubmVySFRNTCA9IFwiXCJcbn1cbi8vdGhlIGZ1bmN0aW9uIHRoYXQgdXNlcyB0aGUgZnVuY3Rpb25zIHByaW9yIHRvIGV4dHJhY3QgaW5mb3JtYXRpb24gZnJvbSB0aGUgSlNPTi5cbi8vdGhlbiB0YWtlIHRoYXQgaW5mb3JtYXRpb24gYW5kIHR1cm4gaXQgaW50byBhIERpdiBhbmQgbGFzdGx5IGluamVjdGluZyBpdCBpbnRvIHRoZSBET00uXG5jb25zdCBjb250YWN0TGlzdFRvRG9tID0gKCkgPT4ge1xuICBjbGVhckNvbnRhY3RzKClcbiAgQVBJZnVuY3Rpb25zLmdldENvbnRhY3RzKCkudGhlbihwYXJzZWRDb250YWN0cyA9PiBjb250YWN0TGlzdChwYXJzZWRDb250YWN0cykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RMaXN0VG9Eb20iLCJpbXBvcnQgY3JlYXRlSW5mb3JtYXRpb24gZnJvbSBcIi4vY29udGFjdEZvcm1cIlxyXG5pbXBvcnQgY29udGFjdExpc3RUb0RvbSBmcm9tIFwiLi9jb250YWN0TGlzdFwiXHJcbi8vdGhpbmdzIHdlIG5lZWQgdG8gcHVsbCBhbmQgaW5qZWN0IGludG8gdGhlIF5eXHJcbmNvbnNvbGUubG9nKFwiaGVsbG9cIilcclxuLy9qdXN0IGNoZWNraW5nIHRvIG1ha2Ugc3VyZSB3ZSBjYW4gc2VlIHRoZSBKUyBtYWluXl5cclxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRCdXR0b25cIilcclxuLy90YXJnZXRpbmcgdGhlIHN1Ym1pdCBidWl0dG9uXl5cclxuY29udGFjdExpc3RUb0RvbSgpXHJcbi8vZGlzcGxheWluZyBjb250YWN0TGlzdCB0byB0aGUgZG9tXl5cclxuLy9pbXBvcnQgY29udGFjdCBsaXN0IGFuZCBjb250YWN0IGZvcm1cclxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJZb3UgY2xpY2tlZCBtZVwiKVxyXG4gIGNyZWF0ZUluZm9ybWF0aW9uKClcclxufVxyXG4pIl19
