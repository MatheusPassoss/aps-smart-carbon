import { Icon } from '@phosphor-icons/react';
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: Icon;
}

export const Input = (({ icon: Icon, ...rest }: InputProps) => {
    return (
        <>
            <table className="group flex bg-white rounded-lg border-[1px] border-solid border-[#F0E5D7]">
                {Icon && (
                    <figure className='bg-white text-black-custom flex items-center rounded-lg'>
                        <Icon size={26} weight="duotone" />
                    </figure>
                )}
                <input className="w-full px-1 py-1 rounded-lg bg-transparent focus:outline-0 text-black-custom" {...rest} />
            </table>
        </>
    );
});

 
