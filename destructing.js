// objek
const user = {
  body: {
    name: "Meuthia Farah",
    age: 20,
    major: "Informatics",
  },
};

// destructing objek
const { name, age, major } = user.body;

console.log(name, age, major);

// array
const family = [ "Mikel", "Hannah", "Jonas" ];

// destructing array
const [ husband, wife, son ] = family
console.log(husband, wife, son);