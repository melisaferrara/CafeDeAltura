import React, { useState } from 'react'
import { createContext } from 'react'

export const CoffeeContext = createContext([])

const CoffeeContextProvider = ({children}) => {

    const [sendType, setSendType] = useState(0)
    const [coffees, setCoffees] = useState([])
    const [cartItems, setCartItems] = useState([]);


  return (
    <CoffeeContext.Provider value={{coffees, setCoffees, cartItems, setCartItems, sendType, setSendType}}>
        {children}
    </CoffeeContext.Provider>
  )
}

export default CoffeeContextProvider