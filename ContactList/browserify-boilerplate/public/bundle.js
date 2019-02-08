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
} //sending out the createInformation function


var _default = createInformation; //create a function to convert the objects to HTML and then a
//function to display them to the dom

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7QUFDQSxTQUFTLFVBQVQsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDM0IsTUFBSSxRQUFRLEdBQ1Q7V0FDTSxPQUFPLENBQUMsSUFBSztVQUNkLE9BQU8sQ0FBQyxXQUFZO1VBQ3BCLE9BQU8sQ0FBQyxPQUFRO1dBSnhCO0FBTUUsU0FBTyxRQUFQO0FBQ0Q7O2VBRWMsVTs7Ozs7Ozs7OztBQ1hqQjtBQUNBLE1BQU0sWUFBWSxHQUFDO0FBQ2pCLEVBQUEsV0FBVyxHQUFFO0FBQ1osV0FBTyxLQUFLLENBQUMsZ0NBQUQsQ0FBTCxDQUNMLElBREssQ0FDQSxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWixDQUFQO0FBRUEsR0FKZ0I7O0FBS2pCO0FBQ0EsRUFBQSxZQUFZLENBQUMsR0FBRCxFQUFLO0FBQ2QsV0FBTyxLQUFLLENBQUMsZ0NBQUQsRUFBbUM7QUFDOUMsTUFBQSxNQUFNLEVBQUMsTUFEdUM7QUFFOUMsTUFBQSxPQUFPLEVBQUc7QUFDTix3QkFBZ0I7QUFEVixPQUZvQztBQUs5QyxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQWY7QUFMd0MsS0FBbkMsQ0FBWjtBQU9GOztBQWRnQixDQUFuQjtlQWdCaUIsWTs7Ozs7Ozs7Ozs7QUNoQmpCOzs7O0FBQ0EsU0FBUyxpQkFBVCxHQUE2QjtBQUN6QjtBQUNBO0FBQ0EsUUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLFFBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBQWhCO0FBQ0EsUUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBcEIsQ0FMeUIsQ0FNekI7O0FBQ0EsTUFBSSxHQUFHLEdBQUc7QUFDTixJQUFBLElBQUksRUFBRSxFQURBO0FBRU4sSUFBQSxPQUFPLEVBQUUsRUFGSDtBQUdOLElBQUEsV0FBVyxFQUFFLEVBSFAsQ0FLVjs7QUFMVSxHQUFWO0FBTUEsRUFBQSxHQUFHLENBQUMsSUFBSixHQUFXLElBQUksQ0FBQyxLQUFoQjtBQUNBLEVBQUEsR0FBRyxDQUFDLE9BQUosR0FBYyxPQUFPLENBQUMsS0FBdEI7QUFDQSxFQUFBLEdBQUcsQ0FBQyxXQUFKLEdBQWtCLFdBQVcsQ0FBQyxLQUE5QixDQWZ5QixDQWdCekI7O0FBQ0EsNkJBQWEsWUFBYixDQUEwQixHQUExQixFQUNLLElBREwsQ0FDVSxNQUFNO0FBQ2hCLCtCQUFhLFdBQWIsR0FDQyxJQURELENBQ08sY0FBRCxJQUFvQjtBQUN0QixNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWjtBQUNILEtBSEQ7QUFJSyxHQU5MO0FBT0gsQyxDQUNEOzs7ZUFDZSxpQixFQUdmO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlCQTs7QUFDQTs7OztBQUhBO0FBQ0E7QUFHQTtBQUNBLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWY7O0FBQ0EsU0FBUyxXQUFULENBQXFCLGNBQXJCLEVBQXFDO0FBQ25DLEVBQUEsY0FBYyxDQUFDLE9BQWYsQ0FBdUIsT0FBTyxJQUFFO0FBQzlCLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaLEVBRDhCLENBRTlCOztBQUNBLFFBQUksZUFBZSxHQUFHLHNCQUFXLE9BQVgsQ0FBdEI7QUFDQSxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUo4QixDQUs5Qjs7QUFDQSxJQUFBLFFBQVEsQ0FBQyxTQUFULElBQW9CLGVBQXBCO0FBQ0QsR0FQRDtBQVFELEMsQ0FDRDs7O0FBQ0EsU0FBUyxhQUFULEdBQXdCO0FBQ3RCLEVBQUEsUUFBUSxDQUFDLFNBQVQsR0FBcUIsRUFBckI7QUFDRCxDLENBQ0Q7QUFDQTs7O0FBQ0EsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCLEVBQUEsYUFBYTs7QUFDYiw2QkFBYSxXQUFiLEdBQTJCLElBQTNCLENBQWdDLGNBQWMsSUFBSSxXQUFXLENBQUMsY0FBRCxDQUE3RDtBQUVELENBSkQ7O2VBTWUsZ0I7Ozs7OztBQzVCZjs7QUFDQTs7OztBQUNBO0FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaLEUsQ0FDQTs7QUFDQSxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQUFyQixDLENBQ0E7O0FBQ0EsNEIsQ0FDQTtBQUNBOztBQUNBLFlBQVksQ0FBQyxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxNQUFNO0FBQzNDLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBO0FBQ0QsQ0FIRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vYm9pbGVycGxhdGUgdGhhdCBpcyBnb2luZyB0byBsaXN0IGFsbCBjb250YWN0c1xuZnVuY3Rpb24gY29udGFjdERpdihjb250YWN0KSB7XG4gIGxldCBjb250YWN0cz1cbiAgICBgPGRpdiBjbGFzcz1cImNvbnRhY3RcIj5cbiAgICA8aDE+ICR7Y29udGFjdC5uYW1lfTwvaDE+XG4gICAgPHA+ICR7Y29udGFjdC5waG9uZU51bWJlcn08L3A+XG4gICAgPHA+ICR7Y29udGFjdC5hZGRyZXNzfTwvcD5cbiAgICA8L2Rpdj5gXG4gICAgcmV0dXJuIGNvbnRhY3RzXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBjb250YWN0RGl2IiwiLy9sb2FkcyBleGl0aW5nIGNvbnRhY3RzKGdldCBhbGwpIHNhdmUgbmV3KGF1dG8gZ2VuIGlkKVxuY29uc3QgQVBJZnVuY3Rpb25zPXtcbiAgZ2V0Q29udGFjdHMoKXtcbiAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb250YWN0c1wiKVxuICAgIC50aGVuKGNvbnRhY3RzID0+IGNvbnRhY3RzLmpzb24oKSlcbiAgfSxcbiAgLy9ob3cgd2UgYXJlIHNlbmRpbmcgdGhpbmdzIGludG8gdGhlIEpTT04gZm9sZGVyIGZyb20gdXNlciBpbnB1dFxuICBwb3N0Q29udGFjdHMob2JqKXtcbiAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2NvbnRhY3RzXCIsIHtcbiAgICAgIG1ldGhvZDpcIlBPU1RcIixcbiAgICAgIGhlYWRlcnMgOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopXG4gICAgfSlcbiAgfVxuICB9XG4gIGV4cG9ydCBkZWZhdWx0IEFQSWZ1bmN0aW9ucyIsIlxuaW1wb3J0IEFQSWZ1bmN0aW9ucyBmcm9tIFwiLi9jb250YWN0Q29sbGVjdGlvblwiXG5mdW5jdGlvbiBjcmVhdGVJbmZvcm1hdGlvbigpIHtcbiAgICAvL3doZXJlIHdlIGFyZSB0YXJnZXRpbmcgdG8gZ2V0IHRoZSB2YWx1ZXMgZm9yIHRoZSBuYW1lIGFkZHJlc3MgYW5kIHBob25lIG51bWJlciBmb3Igb3VyXG4gICAgLy9vYmplY3QgdG8gZ28gdG8gdGhlIEFQSVxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIilcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRyZXNzRW50cnlcIilcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVOdW1iZXJcIilcbiAgICAvL2FuIGVtcHR5IG9iamVjdCBmb3IgdXMgdG8gZmlsbCBwdXR0aW5nIGludG8gdGhlIEFQSVxuICAgIGxldCBvYmogPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgICAgIHBob25lTnVtYmVyOiBcIlwiXG4gICAgfVxuICAgIC8vZmlsbGluZyB0aGUgb2JqZWN0IHdpdGggdGhpbmdzIHdlIHRhcmdldGVkXG4gICAgb2JqLm5hbWUgPSBuYW1lLnZhbHVlXG4gICAgb2JqLmFkZHJlc3MgPSBhZGRyZXNzLnZhbHVlXG4gICAgb2JqLnBob25lTnVtYmVyID0gcGhvbmVOdW1iZXIudmFsdWVcbiAgICAvL3NlbmRpbmcgdGhlIG9iamVjdCB0byB0aGUgSlNPTiB3aXRoIHRoZSBQT1NUIGZ1bmN0aW9uIHdlIG1hZGUgaW4gY29udGFjdENvbGxlY3Rpb25cbiAgICBBUElmdW5jdGlvbnMucG9zdENvbnRhY3RzKG9iailcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgIEFQSWZ1bmN0aW9ucy5nZXRDb250YWN0cygpXG4gICAgLnRoZW4oKHBhcnNlZENvbnRhY3RzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhcnNlZENvbnRhY3RzKVxuICAgIH0pXG4gICAgICAgIH0pXG59XG4vL3NlbmRpbmcgb3V0IHRoZSBjcmVhdGVJbmZvcm1hdGlvbiBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5mb3JtYXRpb25cblxuXG4vL2NyZWF0ZSBhIGZ1bmN0aW9uIHRvIGNvbnZlcnQgdGhlIG9iamVjdHMgdG8gSFRNTCBhbmQgdGhlbiBhXG4vL2Z1bmN0aW9uIHRvIGRpc3BsYXkgdGhlbSB0byB0aGUgZG9tIiwiLy9kaXNwbGF5cyBhbGwgY29udGFjdHNcbi8vaW1wb3J0aW5nIGNvbnRhY3QgY29sbGVjdGlvblxuaW1wb3J0IEFQSWZ1bmN0aW9ucyBmcm9tIFwiLi9jb250YWN0Q29sbGVjdGlvblwiXG5pbXBvcnQgY29udGFjdERpdiBmcm9tIFwiLi9jb250YWN0XCJcbi8vVGFyZ2V0aW5nIHRoZSBJRCB3ZSB3aWxsIGluamVjdCB0aGluZ3MgaW50byB0aGUgRE9NXG5sZXQgZG9tRW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKVxuZnVuY3Rpb24gY29udGFjdExpc3QocGFyc2VkQ29udGFjdHMpIHtcbiAgcGFyc2VkQ29udGFjdHMuZm9yRWFjaChjb250YWN0PT57XG4gICAgY29uc29sZS5sb2coY29udGFjdClcbiAgICAvL2NyZWF0aW5nIGVhY2ggY29udGFjdCBpbnNpZGUgaXRzIG5ldyBkaXZcbiAgICBsZXQgY29udGFjdENvbnRlbnRzID0gY29udGFjdERpdihjb250YWN0KVxuICAgIGNvbnNvbGUubG9nKGRvbUVudHJ5KVxuICAgIC8vc2VuZGluZyB0aGUgbmV3IGRpdiB0byB0aGUgSFRNTCB0aHJ1IGl0cyBlbnRyeSBwb2ludFxuICAgIGRvbUVudHJ5LmlubmVySFRNTCs9Y29udGFjdENvbnRlbnRzXG4gIH0pXG59XG4vL2NsZWFyaW5nIHRoZSBEb20gZWFjaCB0aW1lIHdlIGxvYWQgdGhlIHBhZ2VcbmZ1bmN0aW9uIGNsZWFyQ29udGFjdHMoKXtcbiAgZG9tRW50cnkuaW5uZXJIVE1MID0gXCJcIlxufVxuLy90aGUgZnVuY3Rpb24gdGhhdCB1c2VzIHRoZSBmdW5jdGlvbnMgcHJpb3IgdG8gZXh0cmFjdCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBKU09OLlxuLy90aGVuIHRha2UgdGhhdCBpbmZvcm1hdGlvbiBhbmQgdHVybiBpdCBpbnRvIGEgRGl2IGFuZCBsYXN0bHkgaW5qZWN0aW5nIGl0IGludG8gdGhlIERPTS5cbmNvbnN0IGNvbnRhY3RMaXN0VG9Eb20gPSAoKSA9PiB7XG4gIGNsZWFyQ29udGFjdHMoKVxuICBBUElmdW5jdGlvbnMuZ2V0Q29udGFjdHMoKS50aGVuKHBhcnNlZENvbnRhY3RzID0+IGNvbnRhY3RMaXN0KHBhcnNlZENvbnRhY3RzKSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0TGlzdFRvRG9tIiwiaW1wb3J0IGNyZWF0ZUluZm9ybWF0aW9uIGZyb20gXCIuL2NvbnRhY3RGb3JtXCJcclxuaW1wb3J0IGNvbnRhY3RMaXN0VG9Eb20gZnJvbSBcIi4vY29udGFjdExpc3RcIlxyXG4vL3RoaW5ncyB3ZSBuZWVkIHRvIHB1bGwgYW5kIGluamVjdCBpbnRvIHRoZSBeXlxyXG5jb25zb2xlLmxvZyhcImhlbGxvXCIpXHJcbi8vanVzdCBjaGVja2luZyB0byBtYWtlIHN1cmUgd2UgY2FuIHNlZSB0aGUgSlMgbWFpbl5eXHJcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnV0dG9uXCIpXHJcbi8vdGFyZ2V0aW5nIHRoZSBzdWJtaXQgYnVpdHRvbl5eXHJcbmNvbnRhY3RMaXN0VG9Eb20oKVxyXG4vL2Rpc3BsYXlpbmcgY29udGFjdExpc3QgdG8gdGhlIGRvbV5eXHJcbi8vaW1wb3J0IGNvbnRhY3QgbGlzdCBhbmQgY29udGFjdCBmb3JtXHJcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiWW91IGNsaWNrZWQgbWVcIilcclxuICBjcmVhdGVJbmZvcm1hdGlvbigpXHJcbn1cclxuKSJdfQ==
