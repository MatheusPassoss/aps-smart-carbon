'use client'

import { useState } from "react"
import { X } from "@phosphor-icons/react"
import Image from "next/image"

interface ModalProps {
    title: string,
    content: string
}

export const Modal = ({content, title}: ModalProps) => {
    const [visible, setVisible] = useState(true)
    return (
        <dialog className={`w-full h-screen fixed bg-black bg-opacity-70 z-30 transition-all ease-in duration-300 top-0 left-0 ${visible ? "" : "hidden"} flex items-center`} onClick={() => setVisible(!visible)}>
            <dialog className="px-3 py-3 text-black-custom w-full max-w-[300px] bg-white m-auto rounded-2xl flex flex-col items-center" style={{ zIndex: 50 }}>
                <header className="w-full pb-3 flex justify-end">
                    <button role="Fechar Modal" onClick={() => { setVisible(!visible) }}>
                        <X size={32} weight="bold" />
                    </button>
                </header>
                <h1 className="text-center font-semibold text-2xl text-red-900">{title}</h1>
                <p style={{ width: "-webkit-fill-available" }} className="py-10 text-xl font-medium text-center">{content}</p>
                <figure className="w-full">
                    <Image src={"/assets/ilustration/errormodal.svg"} width={75} height={60} alt="Ilustração de robô quebrado, para simbolizar o erro" />
                </figure>
            </dialog>
        </dialog>
    )
}