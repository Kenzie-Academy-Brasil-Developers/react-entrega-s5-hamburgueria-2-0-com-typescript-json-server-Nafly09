import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../Services/api";

interface Product {
  name: string;
  price: number;
  category: string;
  img: string;
}

interface CatalogueProps {
  children: ReactNode;
}

interface CatalogueProviderData {
  catalogue: Product[];
}
const CatalogueContext = createContext<CatalogueProviderData>(
  {} as CatalogueProviderData
);

export const CatalogueProvider = ({ children }: CatalogueProps) => {
  const [catalogue, setCatalogue] = useState([]);

  const getCatalogue = () => {
    api
      .get("/products")
      .then((response) => setCatalogue(response.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getCatalogue();
  }, []);

  return (
    <CatalogueContext.Provider value={{ catalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};

export const useCatalogue = () => useContext(CatalogueContext);
