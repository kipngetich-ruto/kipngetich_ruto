import { BrowserRouter } from "react-router-dom"
import {Navbar, Home, Skills, About, Portfolio, Footer} from "./components"


const App = () => (
  <BrowserRouter>
      <Navbar/>
      <main>
        <Home/>
        <hr />
        <Skills/>
        <About/>
        <hr />
        <Portfolio/>
        <hr />
        <Footer/>
      </main>
  </BrowserRouter>
)

export default App