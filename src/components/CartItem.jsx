import React from 'react';

const CartItem = ({book, changeQuantity}) => {
   
    return (
    <div className="cart__item">
        <div className="cart__book">
            <img src={book.url} className='cart__book--img' alt="" />
        <div className="cart__book--info">
            <span className="cart__book--title">{book.title}</span>
            <span className="cart__book--price"> $
                {
                (book.salePrice || book.originalPrice).toFixed(2)
                }
            </span>
            <button className="cart__book--remove"></button>
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
        
        </div>
    </div>
    );
}

export default CartItem;
