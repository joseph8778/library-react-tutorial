import React from 'react';
import CartItem from '../components/CartItem';

const Cart = ({books, cart, changeQuantity}) => {
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
                            {cart.map((book) => {
                            return (
                                <CartItem book={book} changeQuantity={changeQuantity}/> )
                                })
                            }
                        </div>
                    <div className="total">
                        <div className="total__item total__sub-total">
                            <span>Subtotal</span>
                            {/* <span>$ ${Subtotal} </span> */}
                        </div>
                        <div className="total__item total__tax">
                            <span>Tax</span>
                            {/* <span>$ ${Tax} </span> */}
                        </div>
                        <div className="total__item total__price">
                            <span>Total</span>
                            {/* <span>$ ${Total Price} </span> */}
                        </div>
                    </div>
                    <button className="btn btn__checkout no-cursor" onClick={() => alert("Not done yet!!!")}>
                        Proceed to checkout
                    </button>
                    </div>
                </div>
            </div>
        </main>
     </div>
    );
}

export default Cart;
