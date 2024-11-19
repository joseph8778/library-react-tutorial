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
    setCart([...cart, {...book, quantity: 1}]
    )
  }
  
  
  function changeQuantity(book, quantity) {
    setCart(cart.map(item => item.id === book.id ? 
      {...item,
        quantity: +quantity} : item
      )
    )}
    
function numberOfItems() {
  let cartCount = 0
  cart.forEach(item => {
    cartCount += item.quantity
  })
  return cartCount
}

function removeBook(id) {
  setCart(cart.filter(item => item.id !== id))
  console.log('removed Item:', id)
}

  useEffect(() => {
    console.log('useEffect', cart)

  }, [cart])



  return (
  <Router>
    <div className="App">
      <Nav numberOfItems = {numberOfItems()}/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books" element={ <Books books={books} />} />
      <Route path="/cart" element={ <Cart cart={cart} changeQuantity={changeQuantity} removeBook={removeBook}/>} />
      <Route path="/books/:id" element ={ <Bookinfo books={books} addToCart={addToCart} cart={cart} changeQuantity={changeQuantity}/>}/>

    </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
