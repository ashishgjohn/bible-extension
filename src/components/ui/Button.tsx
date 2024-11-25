import { ReactElement } from "react";

type ButtonPropsType = {
  children: ReactElement,
  classname?: string,
  onClick: () => void,
  disabled?: boolean
}

export default function Button({ onClick, classname, children, disabled = false }: ButtonPropsType) {
  return (
    <button
      onClick={onClick}
      title='button'
      className={`${classname}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}