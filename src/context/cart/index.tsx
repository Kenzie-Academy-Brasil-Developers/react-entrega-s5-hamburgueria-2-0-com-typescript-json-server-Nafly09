import { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  name: string;
  price: number;
  category: string;
  img: string;
}

interface CartProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
}
const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDeleted: Product) => {
    const newCart = cart.filter(
      (product) => product.name !== productToBeDeleted.name
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
