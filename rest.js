/**
 * Membuat fungsi rest untuk menjumlahkan bilangan
 */

function sum(...numbers) {
  console.log(numbers);
  hasil = 0
  for (const number of numbers) { //looping array
    hasil = hasil + number; // bisa juga hasil += number
  };

  return hasil;
}

console.log(sum(1, 2, 3, 4, 5));