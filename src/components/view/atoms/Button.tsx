import { VariantProps, cva } from "class-variance-authority";

const buttonStyle = cva(["hover:bg-secondary-hover", "transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: ["rounded-full", "w-10", "h-10", "flex", "items-center", "p-2.5"],
    },
  },
});

const classes = buttonStyle({ size: "icon" });
type ButtonProps = VariantProps<typeof buttonStyle>


const Button = ({variant, size}: ButtonProps) => {
  return 
  
  
  <button
  className={buttonStyle({variant, size})}
  />;
};

export default Button;
