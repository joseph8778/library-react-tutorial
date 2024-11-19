import React from 'react';

const CartItem = ({book, changeQuantity, removeBook}) => {
   const bookPrice = (book.salePrice || book.originalPrice).toFixed(2)
   const quantityPrice = (bookPrice * book.quantity).toFixed(2)
    return (
    <div className="cart__item">
        <div className="cart__book">
            <img src={book.url} className='cart__book--img' alt="" />
        <div className="cart__book--info">
            <span className="cart__book--title">{book.title}</span>
            <span className="cart__book--price"> $
                {bookPrice}
            </span>
            <button onClick={() => removeBook(book.id)} className="cart__book--remove">Remove</button>
        </div>
        </div>
        
        <div className="cart__quantity">
            <input onChange={(event) => changeQuantity(book, event.target.value)} 
            type="number"
            value={book.quantity}
            min={0}
             max={99} 
             className="cart__input" />
        </div>

        <div className="cart__total">
        ${quantityPrice}
        </div>
    </div>
    );
}

export default CartItem;
