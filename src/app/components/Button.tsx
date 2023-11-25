import React, { forwardRef, ReactElement, Ref, ButtonHTMLAttributes, RefObject } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Title: string,
  buttonRef?: RefObject<HTMLButtonElement>
}

export const Button = ({buttonRef, Title, ...rest}: ButtonProps) => {

  return (
    <button className="bg-green-custom py-1 px-3 w-full text-white rounded-lg md:text-lg" {...rest} ref={buttonRef}>
      {Title}
    </button>
  )
}

// erro de slint
Button.displayName = "Button";


