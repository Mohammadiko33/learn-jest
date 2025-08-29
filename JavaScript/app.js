function gte(num1, num2) {
  if (num1 > num2) return true;
  if (num1 < num2) return false;
  if (num1 === num2) return true;
}

module.exports = gte;