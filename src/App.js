import Footer from './components/footer.jsx';
import Nav from './components/Nav.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Books from "./Pages/Books.jsx"
import {books} from './data.js' 
import Bookinfo from './Pages/BookInfo.jsx';
import Cart from './Pages/Cart.jsx';
import React, {useState} from 'react';
import CartItem from './components/CartItem.jsx';
import { useEffect } from 'react';


function App() {
  const [cart, setCart] = useState([])
  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if (item.id === book.id) {
        return {
          ...item,
          quantity: +quantity
        
        }
      }
      else {
        return item
      }
    }))

}

  useEffect(() => {
    console.log('useEffect', cart)
  }, [cart])

  return (
  <Router>
    <div className="App">
      <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books" element={ <Books books={books} />} />
      <Route path="/cart" element={ <Cart books={books} cart={cart} changeQuantity={changeQuantity}/>} />
      <Route path="/books/:id" element ={ <Bookinfo books={books} addToCart={addToCart} cart={cart} changeQuantity={changeQuantity}/>}/>

    </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
