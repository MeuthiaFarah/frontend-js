// array of object
const users = [
  {
    name: "Meuthia",
    age: 20,
  },
  {
    name: "Aufa",
    age: 23,
  },
  {
    name: "Mutia",
    age: 19,
  },
];

// find mencari 1 data
// filter mencari semua data

const hasil = users.find((user) => {
  return user.age > 19;
})

console.log(hasil);

// cara manualnya
for (let i = 0; i < users.length; i++) {
  if (users[ i ].age > 18) {
    console.log("ketemu", users[ i ]);
    break
  };
};  