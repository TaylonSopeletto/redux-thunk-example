import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setCartThunk } from './slices/Thunks'
import { cart, setCartInfo } from './slices/CartSlice'
import { getCartClientService } from './services/cart'

function App() {

  const dispatch = useDispatch();
  const cartSelector = useSelector(cart);

  const countries = ['brazil', 'germany', 'france', 'argentina']

  React.useEffect(() => {
    getCartClientService()
    .then(result => {
      dispatch(setCartInfo(result.data))
    })
  }, [])

  return (
    <div className="App">
      <div className='cart'>cart <span>{cartSelector.cart.length || 0}</span></div>
      <div className="container">
      {
        countries.map((item, key) => 
          <div onClick={() => dispatch(setCartThunk(item))} 
            className={`country ${cartSelector.cart.length > 0 && cartSelector.cart.includes(item) ? 'selected' : ''}`} 
            key={key}>
            <img height={20} width={20} alt={item} src={item.concat('.png')}/>
            <p>{item.toUpperCase()}</p>
          </div>
        )
      }
     
      </div>
    </div>
  );
}

export default App;
