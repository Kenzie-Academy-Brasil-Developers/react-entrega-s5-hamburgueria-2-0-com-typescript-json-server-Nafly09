import { Button } from "@chakra-ui/react";
interface ButtonProps {
  colorScheme: string;
  size?: string;
  variant: string;
  isLoading?: boolean;
  width?: string;
  height?: string;
  innerText: string;
}

export const ButtonComponent = ({ innerText, ...rest }: ButtonProps) => {
  return <Button {...rest}>{innerText}</Button>;
};
