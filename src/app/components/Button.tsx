import React, { forwardRef, ForwardedRef, ReactElement, Ref, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    Title: string,
}

export const Button = forwardRef(
  ({ Title, ...rest }: ButtonProps, ref: Ref<HTMLButtonElement>): ReactElement => {
    return (
      <button className="bg-green-custom py-1 px-3 w-full text-white rounded-lg md:text-lg" {...rest} ref={ref}>
        {Title}
      </button>
    )
  }
)

Button.displayName = "Button";

 
