import React, { createContext, useContext, useState } from 'react'

type CartContextType = {
  productsOnCart: {[key: number]: number};
  addProductToCart: (productId: number) => void;
  removeProductOnCart: (productId: number) => void;
  totalItems: () => number;
}

const CartContext = createContext<CartContextType>({
  productsOnCart: {0: 0},
  addProductToCart: () => {},
  removeProductOnCart: () => {},
  totalItems: () => 0,
})

export const useCartContext = () => useContext(CartContext)

export function CartProvider({ children }: {children: JSX.Element}) {
  const [productsOnCart, setProductsOnCart] = useState<{[key: number]: number}>({})

  const addProductToCart = (id: number) => {
    if (productsOnCart[id]) {
      productsOnCart[id] += 1
      setProductsOnCart({ ...productsOnCart })
    } else {
      setProductsOnCart({ ...productsOnCart, [id]: 1 })
    }
  }

  const removeProductOnCart = (id: number) => {
    if (!productsOnCart[id]) {
      return
    }
    if (productsOnCart[id] > 1) {
      productsOnCart[id] -= 1
      setProductsOnCart({ ...productsOnCart })
    } else {
      const { [id]: toRemove, ...rest } = productsOnCart
      setProductsOnCart({ ...rest })
    }
  }

  const totalItems = () => {
    return [...Object.values(productsOnCart)].reduce((accum, current) => accum + current, 0)
  }

  return (
    <CartContext.Provider value={{ productsOnCart, addProductToCart, removeProductOnCart, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}
