import Footer from "./presontation/components/navs/footer/footer"
import Header from "./presontation/components/navs/header/header"
import HomePage from "./presontation/pages/home_page/home_page"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductsPage from "./presontation/pages/products_page/products_page"
import ContactPage from "./presontation/pages/contact_page/contact_page"
import ReviewsPage from "./presontation/pages/reviews_page/reviews_page"
import FaqPage from "./presontation/pages/faq_page/faq_page"
import ShoppingBag from "./presontation/pages/shop_bag/shop_bag"
import { loadStripe } from '@stripe/stripe-js';
import { publicKey } from "./consts/consts"
function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductsPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/reviews" element={<ReviewsPage />} />
          <Route exact path="/faq" element={<FaqPage />} />
          <Route exact path="/mybag" element={<ShoppingBag />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
