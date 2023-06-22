let $ = document;

const main = $.querySelector(".main");
const modaMessage = $.querySelector(".modal-message");
const keyCodeTitle = $.querySelector(".section-title");
const keyResult = $.querySelector(".key-result");
const locationResult = $.querySelector(".location-result");
const keyCodeResult = $.querySelector(".keycode-result");
const codeResult = $.querySelector(".code-result");
let eventKey;
let eventLocation;
let eventKeyCode;
let eventCode;

$.addEventListener("keydown", function (event) {
  // for prvent action for f1 , f2 , ... keys
  event.preventDefault();
  modaMessage.style.opacity = 0;
  main.style.opacity = 1;
  keyCodeTitle.textContent = event.keyCode;
  keyResult.textContent = eventKey = event.key;
  locationResult.textContent = eventLocation = event.location;
  keyCodeResult.textContent = eventKeyCode = event.keyCode;
  codeResult.textContent = eventCode = event.code;
});
