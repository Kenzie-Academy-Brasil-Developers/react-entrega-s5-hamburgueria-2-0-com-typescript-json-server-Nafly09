import { Button } from "@chakra-ui/react";
import { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  innerText: string;
  colorScheme?: string;
  size?: string;
  variant: string;
  isFullWidth?: boolean;
}

export const ButtonComponent = ({
  innerText,
  colorScheme,
  size,
  variant,
  type,
  isFullWidth,
  ...rest
}: ButtonProps) => {
  return (
    <Button
      colorScheme={colorScheme}
      size={size}
      variant={variant}
      type={type}
      isFullWidth={isFullWidth}
      {...rest}
    >
      {innerText}
    </Button>
  );
};
