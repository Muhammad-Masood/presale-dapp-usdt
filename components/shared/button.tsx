import { cn } from "@/lib/utils";

type ButtonProps = {
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const styleClassNames = {
  sm: "p-2 text-sm",
  md: "px-8 py-3 text-md",
  lg: "p-6 text-lg",
  primary: "bg-bg-button text-primary hover:text-secondary ",
  secondary: "bg-secondary text-white",
  tertiary: "bg-tertiary text-white",
  base: "rounded-2xl font-albertSans tracking-wider transition-all duration-300 ease-in-out hover:shadow-lg  ",
};

const Button = ({
  size,
  color,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styleClassNames[size],
        styleClassNames[color],
        styleClassNames.base,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
