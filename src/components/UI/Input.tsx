import { Icon } from '@phosphor-icons/react';
import { InputHTMLAttributes, forwardRef, Ref, RefObject } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: Icon;
    isDark?: Boolean
    inputRef?: RefObject<HTMLInputElement>
    isDisabled?: boolean
}

export function Input({ isDisabled, icon: Icon, isDark, inputRef, ...rest }: InputProps) {
    return (
         
            <div className={`group flex rounded-lg border-[1px] border-solid ${isDark ? "bg-black-custom border-none shadow-2xl" : "bg-white border-[#F0E5D7]"} ${isDisabled && 'animate-pulse'}`}>
                {Icon && (
                    <figure className='bg-white text-black-custom flex items-center rounded-lg'>
                        <Icon size={26} weight="duotone" />
                    </figure>
                )}
                <input ref={inputRef} className={`w-full px-1 py-1 rounded-lg bg-transparent focus:outline-0  ${isDark ? "text-white" : "text-black-custom"}`}
                    {...rest}
                />
            </div>
       
    )
}

// erro no Slint
Input.displayName = "Input";
