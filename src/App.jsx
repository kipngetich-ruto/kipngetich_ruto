import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Navbar, Home, Skills, About, Portfolio, Footer} from "./components"
import {} from './components/data'


const App = () => (
  <BrowserRouter>
      <Navbar/>
      <main>
        <Home/>
        <hr />
        <Skills/>
        <hr />
        <About/>
        <hr />
        <Portfolio/>
        <hr />
        <Footer/>
      </main>
      <Routes>
        <Route path='#skills' element={<Skills/>}/>
      </Routes>
  </BrowserRouter>
)

export default App