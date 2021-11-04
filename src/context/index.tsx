import { ReactNode } from "react";
import { CatalogueProvider } from "./catalogue/context";
import { AuthProvider } from "./Auth/index";
import { CartProvider } from "./cart";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <CatalogueProvider>
        <CartProvider>
          <AuthProvider>{children} </AuthProvider>
        </CartProvider>
      </CatalogueProvider>
    </>
  );
};
