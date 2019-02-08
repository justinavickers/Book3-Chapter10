(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//boilerplate that is going to list all contacts
function contactDiv(contact) {
  let contacts = `<div class="contact">
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

var _contact = _interopRequireDefault(require("./contact"));

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
    _contactCollection.default.getContacts().then(parsedContacts => {
      console.log(parsedContacts);
    });
  });

  const objHTML = (0, _contact.default)(obj);
  document.querySelector("#submit").innerHTML += objHTML;
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
    console.log(contact); //creating each contact inside its new div

    let contactContents = (0, _contact.default)(contact);
    console.log(domEntry); //sending the new div to the HTML thru its entry point

    domEntry.innerHTML += contactContents;
  });
} // //the function that uses the functions prior to extract information from the JSON.
//then take that information and turn it into a Div and lastly injecting it into the DOM.


const contactListToDom = () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7QUFDQSxTQUFTLFVBQVQsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDM0IsTUFBSSxRQUFRLEdBQ1Q7V0FDTSxPQUFPLENBQUMsSUFBSztVQUNkLE9BQU8sQ0FBQyxXQUFZO1VBQ3BCLE9BQU8sQ0FBQyxPQUFRO1dBSnhCO0FBTUUsU0FBTyxRQUFQO0FBQ0Q7O2VBRWMsVTs7Ozs7Ozs7OztBQ1hqQjtBQUNBLE1BQU0sWUFBWSxHQUFDO0FBQ2pCLEVBQUEsV0FBVyxHQUFFO0FBQ1osV0FBTyxLQUFLLENBQUMsZ0NBQUQsQ0FBTCxDQUNMLElBREssQ0FDQSxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWixDQUFQO0FBRUEsR0FKZ0I7O0FBS2pCO0FBQ0EsRUFBQSxZQUFZLENBQUMsR0FBRCxFQUFLO0FBQ2QsV0FBTyxLQUFLLENBQUMsZ0NBQUQsRUFBbUM7QUFDOUMsTUFBQSxNQUFNLEVBQUMsTUFEdUM7QUFFOUMsTUFBQSxPQUFPLEVBQUc7QUFDTix3QkFBZ0I7QUFEVixPQUZvQztBQUs5QyxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQWY7QUFMd0MsS0FBbkMsQ0FBWjtBQU9GOztBQWRnQixDQUFuQjtlQWdCaUIsWTs7Ozs7Ozs7Ozs7QUNqQmpCOztBQUNBOzs7O0FBQ0EsU0FBUyxpQkFBVCxHQUE2QjtBQUN6QjtBQUNBO0FBQ0EsUUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLFFBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBQWhCO0FBQ0EsUUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBcEIsQ0FMeUIsQ0FNekI7O0FBQ0EsTUFBSSxHQUFHLEdBQUc7QUFDTixJQUFBLElBQUksRUFBRSxFQURBO0FBRU4sSUFBQSxPQUFPLEVBQUUsRUFGSDtBQUdOLElBQUEsV0FBVyxFQUFFLEVBSFAsQ0FLVjs7QUFMVSxHQUFWO0FBTUEsRUFBQSxHQUFHLENBQUMsSUFBSixHQUFXLElBQUksQ0FBQyxLQUFoQjtBQUNBLEVBQUEsR0FBRyxDQUFDLE9BQUosR0FBYyxPQUFPLENBQUMsS0FBdEI7QUFDQSxFQUFBLEdBQUcsQ0FBQyxXQUFKLEdBQWtCLFdBQVcsQ0FBQyxLQUE5QixDQWZ5QixDQWdCekI7O0FBQ0EsNkJBQWEsWUFBYixDQUEwQixHQUExQixFQUNLLElBREwsQ0FDVSxNQUFNO0FBQ2hCLCtCQUFhLFdBQWIsR0FDQyxJQURELENBQ08sY0FBRCxJQUFvQjtBQUN0QixNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWjtBQUNILEtBSEQ7QUFJSCxHQU5HOztBQU9KLFFBQU0sT0FBTyxHQUFHLHNCQUFXLEdBQVgsQ0FBaEI7QUFDQSxFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLElBQStDLE9BQS9DO0FBRUMsQyxDQUNEOzs7ZUFDZSxpQixFQUdmO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pDQTs7QUFDQTs7OztBQUhBO0FBQ0E7QUFHQTtBQUNBLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWY7O0FBQ0EsU0FBUyxXQUFULENBQXFCLGNBQXJCLEVBQXFDO0FBQ25DLEVBQUEsY0FBYyxDQUFDLE9BQWYsQ0FBdUIsT0FBTyxJQUFFO0FBQzlCLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaLEVBRDhCLENBRTlCOztBQUNBLFFBQUksZUFBZSxHQUFHLHNCQUFXLE9BQVgsQ0FBdEI7QUFDQSxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUo4QixDQUs5Qjs7QUFDQSxJQUFBLFFBQVEsQ0FBQyxTQUFULElBQW9CLGVBQXBCO0FBQ0QsR0FQRDtBQVFELEMsQ0FDRDtBQUNBOzs7QUFDQSxNQUFNLGdCQUFnQixHQUFHLE1BQU07QUFDN0IsNkJBQWEsV0FBYixHQUEyQixJQUEzQixDQUFnQyxjQUFjLElBQUksV0FBVyxDQUFDLGNBQUQsQ0FBN0Q7QUFFRCxDQUhEOztlQUtlLGdCOzs7Ozs7QUN2QmY7O0FBQ0E7Ozs7QUFDQTtBQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWixFLENBQ0E7O0FBQ0EsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBckIsQyxDQUNBOztBQUNBLDRCLENBQ0E7QUFDQTs7QUFDQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsTUFBTTtBQUMzQyxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksZ0JBQVo7QUFDQTtBQUNELENBSEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL2JvaWxlcnBsYXRlIHRoYXQgaXMgZ29pbmcgdG8gbGlzdCBhbGwgY29udGFjdHNcbmZ1bmN0aW9uIGNvbnRhY3REaXYoY29udGFjdCkge1xuICBsZXQgY29udGFjdHM9XG4gICAgYDxkaXYgY2xhc3M9XCJjb250YWN0XCI+XG4gICAgPGgxPiAke2NvbnRhY3QubmFtZX08L2gxPlxuICAgIDxwPiAke2NvbnRhY3QucGhvbmVOdW1iZXJ9PC9wPlxuICAgIDxwPiAke2NvbnRhY3QuYWRkcmVzc308L3A+XG4gICAgPC9kaXY+YFxuICAgIHJldHVybiBjb250YWN0c1xuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgY29udGFjdERpdiIsIi8vbG9hZHMgZXhpdGluZyBjb250YWN0cyhnZXQgYWxsKSBzYXZlIG5ldyhhdXRvIGdlbiBpZClcbmNvbnN0IEFQSWZ1bmN0aW9ucz17XG4gIGdldENvbnRhY3RzKCl7XG4gICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY29udGFjdHNcIilcbiAgICAudGhlbihjb250YWN0cyA9PiBjb250YWN0cy5qc29uKCkpXG4gIH0sXG4gIC8vaG93IHdlIGFyZSBzZW5kaW5nIHRoaW5ncyBpbnRvIHRoZSBKU09OIGZvbGRlciBmcm9tIHVzZXIgaW5wdXRcbiAgcG9zdENvbnRhY3RzKG9iail7XG4gICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb250YWN0c1wiLCB7XG4gICAgICBtZXRob2Q6XCJQT1NUXCIsXG4gICAgICBoZWFkZXJzIDoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxuICAgIH0pXG4gIH1cbiAgfVxuICBleHBvcnQgZGVmYXVsdCBBUElmdW5jdGlvbnMiLCJpbXBvcnQgY29udGFjdERJViBmcm9tIFwiLi9jb250YWN0XCJcbmltcG9ydCBBUElmdW5jdGlvbnMgZnJvbSBcIi4vY29udGFjdENvbGxlY3Rpb25cIlxuZnVuY3Rpb24gY3JlYXRlSW5mb3JtYXRpb24oKSB7XG4gICAgLy93aGVyZSB3ZSBhcmUgdGFyZ2V0aW5nIHRvIGdldCB0aGUgdmFsdWVzIGZvciB0aGUgbmFtZSBhZGRyZXNzIGFuZCBwaG9uZSBudW1iZXIgZm9yIG91clxuICAgIC8vb2JqZWN0IHRvIGdvIHRvIHRoZSBBUElcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkcmVzc0VudHJ5XCIpXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lTnVtYmVyXCIpXG4gICAgLy9hbiBlbXB0eSBvYmplY3QgZm9yIHVzIHRvIGZpbGwgcHV0dGluZyBpbnRvIHRoZSBBUElcbiAgICBsZXQgb2JqID0ge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBcIlwiLFxuICAgICAgICBwaG9uZU51bWJlcjogXCJcIlxuICAgIH1cbiAgICAvL2ZpbGxpbmcgdGhlIG9iamVjdCB3aXRoIHRoaW5ncyB3ZSB0YXJnZXRlZFxuICAgIG9iai5uYW1lID0gbmFtZS52YWx1ZVxuICAgIG9iai5hZGRyZXNzID0gYWRkcmVzcy52YWx1ZVxuICAgIG9iai5waG9uZU51bWJlciA9IHBob25lTnVtYmVyLnZhbHVlXG4gICAgLy9zZW5kaW5nIHRoZSBvYmplY3QgdG8gdGhlIEpTT04gd2l0aCB0aGUgUE9TVCBmdW5jdGlvbiB3ZSBtYWRlIGluIGNvbnRhY3RDb2xsZWN0aW9uXG4gICAgQVBJZnVuY3Rpb25zLnBvc3RDb250YWN0cyhvYmopXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICBBUElmdW5jdGlvbnMuZ2V0Q29udGFjdHMoKVxuICAgIC50aGVuKChwYXJzZWRDb250YWN0cykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwYXJzZWRDb250YWN0cylcbiAgICB9KVxufSlcbmNvbnN0IG9iakhUTUwgPSBjb250YWN0RElWKG9iailcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpLmlubmVySFRNTCArPSBvYmpIVE1MXG5cbn1cbi8vc2VuZGluZyBvdXQgdGhlIGNyZWF0ZUluZm9ybWF0aW9uIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbmZvcm1hdGlvblxuXG5cbi8vY3JlYXRlIGEgZnVuY3Rpb24gdG8gY29udmVydCB0aGUgb2JqZWN0cyB0byBIVE1MIGFuZCB0aGVuIGFcbi8vZnVuY3Rpb24gdG8gZGlzcGxheSB0aGVtIHRvIHRoZSBkb20iLCIvL2Rpc3BsYXlzIGFsbCBjb250YWN0c1xuLy9pbXBvcnRpbmcgY29udGFjdCBjb2xsZWN0aW9uXG5pbXBvcnQgQVBJZnVuY3Rpb25zIGZyb20gXCIuL2NvbnRhY3RDb2xsZWN0aW9uXCJcbmltcG9ydCBjb250YWN0RGl2IGZyb20gXCIuL2NvbnRhY3RcIlxuLy9UYXJnZXRpbmcgdGhlIElEIHdlIHdpbGwgaW5qZWN0IHRoaW5ncyBpbnRvIHRoZSBET01cbmxldCBkb21FbnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpXG5mdW5jdGlvbiBjb250YWN0TGlzdChwYXJzZWRDb250YWN0cykge1xuICBwYXJzZWRDb250YWN0cy5mb3JFYWNoKGNvbnRhY3Q9PntcbiAgICBjb25zb2xlLmxvZyhjb250YWN0KVxuICAgIC8vY3JlYXRpbmcgZWFjaCBjb250YWN0IGluc2lkZSBpdHMgbmV3IGRpdlxuICAgIGxldCBjb250YWN0Q29udGVudHMgPSBjb250YWN0RGl2KGNvbnRhY3QpXG4gICAgY29uc29sZS5sb2coZG9tRW50cnkpXG4gICAgLy9zZW5kaW5nIHRoZSBuZXcgZGl2IHRvIHRoZSBIVE1MIHRocnUgaXRzIGVudHJ5IHBvaW50XG4gICAgZG9tRW50cnkuaW5uZXJIVE1MKz1jb250YWN0Q29udGVudHNcbiAgfSlcbn1cbi8vIC8vdGhlIGZ1bmN0aW9uIHRoYXQgdXNlcyB0aGUgZnVuY3Rpb25zIHByaW9yIHRvIGV4dHJhY3QgaW5mb3JtYXRpb24gZnJvbSB0aGUgSlNPTi5cbi8vdGhlbiB0YWtlIHRoYXQgaW5mb3JtYXRpb24gYW5kIHR1cm4gaXQgaW50byBhIERpdiBhbmQgbGFzdGx5IGluamVjdGluZyBpdCBpbnRvIHRoZSBET00uXG5jb25zdCBjb250YWN0TGlzdFRvRG9tID0gKCkgPT4ge1xuICBBUElmdW5jdGlvbnMuZ2V0Q29udGFjdHMoKS50aGVuKHBhcnNlZENvbnRhY3RzID0+IGNvbnRhY3RMaXN0KHBhcnNlZENvbnRhY3RzKSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0TGlzdFRvRG9tIiwiaW1wb3J0IGNyZWF0ZUluZm9ybWF0aW9uIGZyb20gXCIuL2NvbnRhY3RGb3JtXCJcclxuaW1wb3J0IGNvbnRhY3RMaXN0VG9Eb20gZnJvbSBcIi4vY29udGFjdExpc3RcIlxyXG4vL3RoaW5ncyB3ZSBuZWVkIHRvIHB1bGwgYW5kIGluamVjdCBpbnRvIHRoZSBeXlxyXG5jb25zb2xlLmxvZyhcImhlbGxvXCIpXHJcbi8vanVzdCBjaGVja2luZyB0byBtYWtlIHN1cmUgd2UgY2FuIHNlZSB0aGUgSlMgbWFpbl5eXHJcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnV0dG9uXCIpXHJcbi8vdGFyZ2V0aW5nIHRoZSBzdWJtaXQgYnVpdHRvbl5eXHJcbmNvbnRhY3RMaXN0VG9Eb20oKVxyXG4vL2Rpc3BsYXlpbmcgY29udGFjdExpc3QgdG8gdGhlIGRvbV5eXHJcbi8vaW1wb3J0IGNvbnRhY3QgbGlzdCBhbmQgY29udGFjdCBmb3JtXHJcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiWW91IGNsaWNrZWQgbWVcIilcclxuICBjcmVhdGVJbmZvcm1hdGlvbigpXHJcbn1cclxuKSJdfQ==
