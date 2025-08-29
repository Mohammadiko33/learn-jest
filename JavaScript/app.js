function gte(num1, num2) {
  return num1 >= num2 ? true : false;
}

const welcomeMessage = (name) => `Hello ${name}. welcome to jest tutoral`;

function shoppingList() {
  return ["diseart", "cake", "cupcake"];
}

function getUser(){
    return {
        id: 1,
        name: "mohammad"
    }
}

module.exports = {
  gte,
  welcomeMessage,
  shoppingList,
  getUser
};