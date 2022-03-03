const user = {
  name: "Meuthia Farah",
  age: 20,
  major: "Informatics",
};

for (const key in user) {
  console.log(`${key} : ${user[key]}`);
}

console.log(user);