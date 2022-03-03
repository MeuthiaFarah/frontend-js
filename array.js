// membuat array
const animals = [ "kucing", "anjing", "ikan", "bebek" ];

// memanggil array
console.log(animals[3]);

// looping array
for (let i = 0;i < animals.length;i++) {
  console.log(animals[i]);
}

// looping pakai for of
for (const animal of animals) {
  console.log(animal);
}