import { Button } from "@chakra-ui/react";
import { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  innerText: string;
  colorScheme: string;
  size?: string;
  variant: string;
}

export const ButtonComponent = ({
  innerText,
  colorScheme,
  size,
  variant,
  type,
}: ButtonProps) => {
  return (
    <Button colorScheme={colorScheme} size={size} variant={variant} type={type}>
      {innerText}
    </Button>
  );
};
