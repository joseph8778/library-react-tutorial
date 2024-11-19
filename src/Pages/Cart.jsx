import React from 'react';
import CartItem from '../components/CartItem';
import EmptyCart from '../assets/empty_cart.svg'
import { Link } from 'react-router-dom';


const Cart = ({cart, changeQuantity, removeBook}) => {
    const tax = .065
    const subTotal = () => {
        return cart.map((book) => {
            const bookPrice = (book.salePrice || book.originalPrice)
            return (bookPrice * book.quantity)
        })
        .reduce((total, price) => total + price, 0)
    }
    return (
     <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="cart__title">Cart
                        </h2>
                    </div>
                    <div className="cart">
                        <div className="cart__header">
                            <span className="cart__book">Book</span>
                            <span className="cart__quantity">Quantity</span>
                            <span className="cart__total">Price</span>
                        </div>
                        {/* Creates CartItem for every element in the book array. Everytime the book array is updated by adding to cart, it adds to the array and uses CartItem for each element. */}
                        <div className="cart__body"> 
                            {cart.map((book, index) => {
                            return (
                                <CartItem key={index} book={book} changeQuantity={changeQuantity} removeBook={removeBook}/> )
                                })
                            }
                        </div>
                {cart.length > 0 && <div className="total">
                        <div className="total__item total__sub-total">
                            <span>Subtotal</span>
                            ${subTotal().toFixed(2)}
                        </div>
                        <div className="total__item total__tax">
                            <span>Tax</span>
                            ${(subTotal()*tax).toFixed(2)}
                        </div>
                        <div className="total__item total__price">
                            <span>Total</span>
                            ${(subTotal()*(tax + 1)).toFixed(2)}
                        </div>
                    <button className="btn btn__checkout no-cursor" onClick={() => alert("Not done yet!!!")}>
                        Proceed to checkout
                    </button>
                    </div>}

                  {cart.length === 0 && <div className="cart__empty">
                        <img src={EmptyCart} alt="" className='cart__empty--img'/>
                        <h2>You don't have any books in your cart!</h2>
                        <Link to="/books">
                            <button className="btn">Browse Books</button>
                        </Link>
                    </div>}
                    </div>
                </div>
            </div>
        </main>
     </div>
    );
}

export default Cart;
