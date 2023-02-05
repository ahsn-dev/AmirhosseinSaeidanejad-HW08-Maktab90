const user = {};

function setterGenerator(key) {
  return function (value) {
    this[key] = value;
    return this;
  };
}

const nameSetter = setterGenerator("name");
nameSetter.call(user, "Jack");
console.log(user); // { name: 'Jack' }
