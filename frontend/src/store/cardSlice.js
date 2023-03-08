import { createSlice } from '@reduxjs/toolkit'

const initialState={
    cart       : [],
    nbre       :0,
    total      :0
}
const cardSlice = createSlice({
  name : 'CardSlice',
  initialState,
  reducers :{
    setCards:(state,action)=>{
      return action.payload
  },    
    increase :(state,action)=>{
      const cartItem = state.cart.find((item) => item.id === action.payload);
      cartItem.nbre++;
    },
    decrease :(state,action)=>{
      const cartItem = state.cart.find((item) => item.id === action.payload);
      cartItem.nbre--;
    },
    // addToCart :(state,action)=>{
    //   const itemInCart = state.cart.find(el => el.id=== action.payload.id)
    //   if(itemInCart){
    //     itemInCart.quantity++
    //   }
    //   else{
    //     state.cart.push({...action.payload, quantity:1})
    //   }
    // },
    // removeItem :(state,action)=>{
    //   const removeItems = state.cart.filter(el => el.id !== action.payload)
    //   state.cart= removeItems
    // },
    // totalPrice : (state,action)=>{
    //   let quantity =0;
    //   let total    =0;
    //   state.cart.array.forEach(item => {
    //     quantity = quantity+item.nbre;
    //     total = total + item.price*item.nbre
    //    }
    //    );
    // state.nbre= quantity;
    // state.total= total;  
    // },
  }
})

export const {increase,decrease} = cardSlice.actions
export default cardSlice.reducer
