import { ReactNode } from "react";
import { CatalogueProvider } from "./catalogue/context";
import { AuthProvider } from "./Auth/index";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <CatalogueProvider>
        <AuthProvider>{children} </AuthProvider>
      </CatalogueProvider>
    </>
  );
};
