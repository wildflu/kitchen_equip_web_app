import Footer from "./presontation/components/navs/footer/footer"
import Header from "./presontation/components/navs/header/header"
import HomePage from "./presontation/pages/home_page/home_page"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
