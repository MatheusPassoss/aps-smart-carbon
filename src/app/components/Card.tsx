import Image from "next/image"
import { IconProps } from "@phosphor-icons/react"
import { Icons } from "../animations/Icons"

interface CardProps {
    title: String
    subtitle01: String
    content01: string
    subtitle02: String
    content02: string
    type: 'icon' | 'image'
    Icon?: React.FC<IconProps>


}


export const Card = ({ content02, subtitle02, content01, title, subtitle01, Icon, type }: CardProps) => {



    return (

        <article className="text-black-custom bg-white rounded-md py-20 px-2 w-full max-w-md shadow-xl relative flex flex-col justify-start">

            <ul className="flex flex-col gap-2">
                <li className="flex gap-2">
                    <h5 className="font-semibold">{subtitle01}</h5>
                    <p>{`${content01}`}</p>
                </li>
                <li className="flex gap-2">
                    <h5 className="font-semibold">{subtitle02}</h5>
                    <p>{`${content02}`}</p>
                </li>
            </ul>
            <figure className="flex justify-between items-center absolute bottom-0 right-0">
                <Icons icon={'a'} type={'image'} />

            </figure>
        </article>
    )
}