import { useEffect, useState } from "react";

function Counter() {
  /**
   * Membuat state menggunakan useState
   * useState mengembalikan dua value(array): [setAwal, function]
   * setAwal digunakan untuk menyimpan variable
   */

  // destructing useState
  const [ angka, setAngka ] = useState(0);

  // function untuk manggil setAngka
  function addAngka() {
    setAngka(angka+1)
  }
  // refactor useEffect
  function updateDOM() {
    console.log("Lifecycle di mount");

    /**
     * Membuat side effect berupa akses dom
     * Mengubah title dokumen setiap state berubah
     */
    document.title = `Result: ${angka}`;
  }
  

  /**
   * useEffect dilakukan pada lifecycle mount(setelah render pertama) dan update
   * Gunakan param kedua (array kosong) agar dijalankan di mount saja
   * param kedua(array berisi state) agar dijalankan ketika state yg dtuju diupdate 
   * param 1 ga perlu kurung karena callback
   */

  useEffect(updateDOM, [angka]) // param kedua

  console.log("Lifecycle di render");
  
  return (
    <div>
      <p>Hasil: { angka }</p>
      <button onClick={addAngka}>Add</button>
    </div>
  )
}

export default Counter;