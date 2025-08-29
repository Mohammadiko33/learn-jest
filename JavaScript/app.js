const { getUserById, sendEmail } = require("./service");

function calculateDiscount(id) {
  let discount = 0;
  const { purchasesCount, name } = getUserById(id);
  if (purchasesCount > 3) return (discount = 10);
  sendEmail(name, `you have got %${discount} percent discount`);
  return discount;
}

module.exports = {
  calculateDiscount,
};