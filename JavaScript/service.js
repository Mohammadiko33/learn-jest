function getUserById(id) {
  console.log(`reading data from db with ${id} id`);
  const users = [
    { id: 1, name: "mohammad", purchasesCount: 5 },
    { id: 2, name: "amir", purchasesCount: 4 },
    { id: 3, name: "reza", purchasesCount: 6 },
  ];
  const data = users.find((item) => item.id === id);
  if (data) return data;
  throw new Error(`no user with id ${id}`);
}

function sendEmail(name, email) {
  console.log(`username: ${name} , email : ${email} sent!`);
}

module.exports = { getUserById, sendEmail };