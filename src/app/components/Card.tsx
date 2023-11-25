import Image from "next/image"
import { IconProps } from "@phosphor-icons/react"

interface CardProps {
    altImg?: string
    srcImg?: string
    title: String
    subtitle01: String
    content01: string
    subtitle02: String
    content02: string
    hasImage?: boolean
    icon?: React.FC<IconProps>
}


export const Card = ({ content02, subtitle02, content01, title, subtitle01, icon: Icon, hasImage, altImg = '', srcImg = '' }: CardProps) => {

    return (
        <article className="text-black-custom bg-white rounded-md py-5 px-2 w-full max-w-md shadow-xl relative flex flex-col justify-start">
            <aside className="flex items-center gap-2 m-auto">
                {Icon &&
                    (<figure className='text-black-custom flex items-center rounded-full px-1 py-1 border-[1px] border-solid border-black-custom'>
                        <Icon size={26} weight="fill" />
                    </figure>
                    )}
                <h4 className="text-center text-lg font-semibold">{title}</h4>
            </aside>
            <ul className="flex flex-col gap-2 py-10">
                <li className="flex gap-2">
                    <h5 className="font-semibold">{subtitle01}</h5>
                    <p>{`${content01}`}</p>
                </li>
                <li className="flex gap-2">
                    <h5 className="font-semibold">{subtitle02}</h5>
                    <p>{`${content02}`}</p>
                </li>
            </ul>
            {
                hasImage &&
                (<figure className="flex justify-between items-center absolute bottom-0 right-0">
                    <Image src={srcImg} alt={altImg} width={100} height={110} />
                </figure>)
            }
        </article >
    )
}