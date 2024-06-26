import { CSSProperties } from "react";

type ButtonPropsType = {
  buttonText: string;
  onClick: () => void;
  className?: string;
  style?: CSSProperties;
};

type ButtonType = (props: ButtonPropsType) => JSX.Element;

const Button: ButtonType = ({ className = "", style = {}, buttonText, onClick }) => {
  return (
    <button className={className} style={style} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
