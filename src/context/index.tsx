import { ReactNode } from "react";
import { CatalogueProvider } from "./catalogue/context";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <CatalogueProvider>{children}</CatalogueProvider>
    </>
  );
};
