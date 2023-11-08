import Image from "next/image"
import { IconProps } from "@phosphor-icons/react"

interface CardProps {
    imgSrc?: string,
    imgWidth?: number,
    imgHeight?: number,
    imgAlt: string
    title: String
    subtitle01: String
    content01: string
    subtitle02: String
    content02: string

    Icon?: React.FC<IconProps>


}


export const Card = ({ content02, subtitle02, content01, imgAlt, imgHeight, imgWidth, imgSrc, title, subtitle01, Icon }: CardProps) => {
    return (

        <article className="bg-[#4EB269] rounded-md py-5 px-2 w-full max-w-md shadow-xl">
            <figure className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                {imgSrc && <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />}

                {Icon && (
                    <figure className="bg-white h-[75px] w-[75px] rounded-full flex items-center justify-center">
                        <Icon className="text-black-custom self-center" size={60} weight="fill"/>
                    </figure>
                )}
            </figure>
            <ul className="pt-5 flex flex-col gap-2">
                <li className="flex gap-2">
                    <h5 className="font-semibold">{subtitle01}</h5>
                    <p>{`${content01}`}</p>
                </li>
                <li className="flex gap-2">
                    <h5 className="font-semibold">{subtitle02}</h5>
                    <p>{`${content02}`}</p>
                </li>
            </ul>
        </article>
    )
}