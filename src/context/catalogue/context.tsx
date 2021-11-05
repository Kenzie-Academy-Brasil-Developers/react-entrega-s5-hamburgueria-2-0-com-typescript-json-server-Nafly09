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
  handleSearch: (userInput: string) => void;
}
const CatalogueContext = createContext<CatalogueProviderData>(
  {} as CatalogueProviderData
);

export const CatalogueProvider = ({ children }: CatalogueProps) => {
  const [catalogue, setCatalogue] = useState<Product[]>([]);

  const getCatalogue = () => {
    api
      .get("/products")
      .then((response) => setCatalogue(response.data))
      .catch((e) => console.log(e));
  };
  const handleSearch = (userInput: string) => {
    const filteredResults: any = catalogue.filter(
      (product: Product) =>
        product.category.toLowerCase() === userInput.toLowerCase()
    );
    if (filteredResults.length > 0 && !catalogue.includes(filteredResults)) {
      setCatalogue(filteredResults);
    } else {
      getCatalogue();
    }
  };

  useEffect(() => {
    getCatalogue();
  }, []);

  return (
    <CatalogueContext.Provider value={{ catalogue, handleSearch }}>
      {children}
    </CatalogueContext.Provider>
  );
};

export const useCatalogue = () => useContext(CatalogueContext);
