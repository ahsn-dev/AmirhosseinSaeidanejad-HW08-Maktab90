function elementCreator(elementType, callbackFunction) {
  const element = document.createElement(elementType);
  document.body.appendChild(element);
  callbackFunction(element);
}

// example
const callback = function (element) {
  element.style.backgroundColor = "red";
};

// how to use:
elementCreator("div", callback);
