import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    Title: String,
}


export const Button = ({Title, ...rest}: ButtonProps) => {
    return (
         <button className="bg-green-custom py-1 px-3 w-full text-white rounded-lg">
             {Title}
         </button>
    )
}