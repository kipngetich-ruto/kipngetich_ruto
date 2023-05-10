import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Navbar } from "./components"

const App = () => (
  <main className="">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element = {<Home />} />
      </Routes>
    </BrowserRouter>
  </main>
)

export default App