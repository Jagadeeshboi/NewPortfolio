import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLayout from "./Pages/PageLayout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Components/Contact"
import Works from "./Pages/Works"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<PageLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="/works" element={<Works/>} />
          </Route>
          {document.title="jagadeesh Boina"}
      </Routes>
    </BrowserRouter>
  )
}

export default App
