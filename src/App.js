import Footer from "./component/Footer"
import Hero from "./component/Hero"
import Kenapa from "./component/Kenapa"
import Langkah from "./component/Langkah"
import Navbar from "./component/Navbar"
import Pelanggan from "./component/Pelanggan"
import Testimoni from "./component/Testimoni"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Kenapa />
      <Testimoni />
      <Pelanggan />
      <Langkah />
      <Footer />
    </>
  )
}

export default App