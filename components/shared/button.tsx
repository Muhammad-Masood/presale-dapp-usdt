type ButtonProps = {
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  onClick: () => void;
  className: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const styleClassNames = {
  sm: "p-2 text-sm",
  md: "p-4 text-md",
  lg: "p-6 text-lg",
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  tertiary: "bg-tertiary text-white",
  base: "rounded-xl",
};

const Button = ({
  size,
  color,
  children,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styleClassNames[size]} ${styleClassNames[color]} ${styleClassNames.base} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
