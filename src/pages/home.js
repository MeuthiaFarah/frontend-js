import AddMovieForm from "../component/AddMovieForm/AddMovieForm";
import Footer from "../component/Footer/Footer";
import Hero from "../component/Hero/Hero";
import Movies from "../component/Movies/Movies";
import Navbar from "../component/Navbar/Navbar";

function Main() {
  return (
    <main>
      <Hero />
      <Movies />
      <AddMovieForm />
    </main>
  )
}
function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />

    </div>
  )
}

export default Home;