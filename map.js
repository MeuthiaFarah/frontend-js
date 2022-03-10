/**
 * Map digunakan u/ mengcopy data ditambah data/atribut baru
 * map mereturn data baru, foreach hanya ubah di tampilan
 * menerima callback function
 */

const names = [ "Mikel", "Hannah", "Jonas" ];

const hasil = names.map((name) => {
  return `Mr/Mrs ${name}`;
});

console.log(names);
console.log(hasil);