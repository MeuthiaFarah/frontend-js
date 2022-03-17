/**
 * Membuat komponen hello
 * componen merender elemen elemen html
 */

function Hello(props) {
  // destructing di parameter = function Hello({name}) {...}
  // diluar return javascript vanilla
  const {name} = props;
  // didalam return JSX
  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {name} frontend engineer</p>
    </div>
  );
}

// Membuat elemen
/* const nama = "Mutia"
const elemenHeading = <h1>Hai {nama} </h1> */

/**
 * Membuat componen header
 * menampilkan navigasi
 */
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
      </ul>
    </nav>
  );
}

/**
 * Membuat komponen main
 * Menampung konten utama
 */
function Main() {
  return (
    <main>
      <Hello name="Meuthia" />
      <Hello name="Meuthia lagi" />
      <Hello name="Meuthia terus" />
      <Hello name="Meuthia dulu"/>
      <Hello name="Meuthia yang terakhir" />
    </main>
  );
}

/**
 * Membuat komponen Footer
 * component footer menampilkan footer
 */
function Footer() {
  return (
    <footer>
      <h2>Copyright @meuthiafarah</h2>
      <p>Created by React.js</p>
    </footer>
  );
}

/**
 * Membuat komponen app
 * komponen utama yang menampung komponen lain
 */
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

/**
 * Render componen hello
 */
ReactDOM.render(<App />, document.getElementById("root"));
/* ReactDOM.render(elemenHeading, document.getElementById("root")); */