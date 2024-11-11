

import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, currency, deliveryCharge } = useContext(StoreContext);
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handlePromoCodeSubmit = () => {
    if (promoCode === 'NEWHAPPY') {
      setIsPromoApplied(true);
    } else {
      setIsPromoApplied(false);
      alert('Invalid promo code');
    }
  };

  const deliveryFee = isPromoApplied ? 0 : (getTotalCartAmount() === 0 ? 0 : deliveryCharge);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={`${url}/images/${item.image}`} alt="" />
                  <p>{item.name}</p>
                  <p>{currency}{item.price}</p>
                  <div>{cartItems[item._id]}</div>
                  <p>{currency}{item.price * cartItems[item._id]}</p>
                  <p className='cart-items-remove-icon' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p><p>{currency}{deliveryFee}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>{currency}{getTotalCartAmount() + deliveryFee}</b></div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className='cart-promocode-input'>
              <input
                type="text"
                placeholder='Promo code'
                value={promoCode}
                onChange={handlePromoCodeChange}
              />
              <button onClick={handlePromoCodeSubmit}>Submit</button>
            </div>
            {isPromoApplied && <p className="promo-success">Promo code applied! Delivery fee removed.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
