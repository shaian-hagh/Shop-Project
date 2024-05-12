import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext(null);

const ShopContext = ({children}) => {

  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState('');
  const [price, setPrice] = useState(1000);
  const [cartItem, setCartItem] = useState();
  const [products, setProducts] = useState('');
  const [itemAmount , setItemAmount] = useState(0)
  const [totalPrice , setTotalPrice ] =useState(0)
  const [token ,setToken] = useState(localStorage.getItem("users") ?? null)
 

  useEffect(()=> {
    axios.get('https://fakestoreapi.com/products')
        .then( res => {
            setProducts(res.data)
        })
},[])

  useEffect(()=> {
    const data = localStorage.getItem('carts')
    setCartItem(JSON.parse(data) ? JSON.parse(data) :[])
  },[])

  useEffect(()=>{
    if( cartItem !== undefined)
    localStorage.setItem('carts' , JSON.stringify(cartItem))
  },[cartItem])

  const addToCart = (products, id) => {
    const newItem = {...products , amount: 1}
    const newCartItem = cartItem.find(item =>{
      return item.id === id;
    });
    
    if(newCartItem){
      const newCart = [...cartItem].map(item => {
        if(item.id === id){
          return {...item , amount: newCartItem.amount + 1}
        }else return item
      })
      setCartItem(newCart)
    }else{
      setCartItem([...cartItem, newItem])
    }
  };

  const removeFromCart = (id) => {
    const removeCart = cartItem.filter( item => {
      return item.id !== id
    })
    setCartItem(removeCart)
    localStorage.removeItem('carts')
  };

  const clearCart = () => {
    setCartItem([]);
    localStorage.removeItem('carts')
  };

  const increaseAmount = (id) => {
    const increaseItem = cartItem.find(item => item.id === id)
    addToCart(increaseItem,id);
  };

  const decreaseAmount = (id) => {
    const decreaseItem = cartItem.find(item => {
      return item.id === id;
    }) 
    if(decreaseItem){
      const newCart = [...cartItem].map(item => {
        if(item.id === id){
          return {...item , amount: decreaseItem.amount - 1}
        }else return item
      })
      setCartItem(newCart)
    }
      if(decreaseItem.amount === 1){
        removeFromCart(id)
      }
  }

  useEffect(()=>{
    const total = cartItem?.reduce((accumulator , currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    },0)
    setTotalPrice(total)
  },[cartItem])

  useEffect(()=> {
    if(cartItem){
      const amount = cartItem?.reduce((accumulator , currentItem) => {
        return accumulator + currentItem.amount
      },0)
      setItemAmount(amount)
    }
  },[cartItem])

  const ContextValue = {
    search,
    setSearch,
    categories,
    setCategories,
    price,
    setPrice,
    cartItem,
    addToCart,
    removeFromCart,
    clearCart,
    products,
    setProducts,
    increaseAmount,
    decreaseAmount,
    itemAmount,
    totalPrice,
    token,
    setToken,
  };

  return (
    <MainContext.Provider value={ContextValue}>
      {children}
    </MainContext.Provider>
  );
};

export default ShopContext;
