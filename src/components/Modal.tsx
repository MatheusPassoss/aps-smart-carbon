'use client'

import { useContext, useState } from "react"
import { X } from "@phosphor-icons/react"
import Image from "next/image"
import { MapContext } from "@/context/MapContext"
import { motion } from "framer-motion"

interface ModalProps {
    title: string,
    content: string
}

export const Modal = ({ content, title }: ModalProps) => {

    const { setisInvalid } = useContext(MapContext)
    const [visible, setVisible] = useState(true)

    return (
        <dialog className={`w-full h-full fixed bg-black bg-opacity-70 z-30 transition-all ease-in duration-300 top-0 left-0 ${visible ? "" : "hidden"} flex items-center`} onClick={() => { setVisible(!visible); setisInvalid(false) }}>
            <dialog className="transition-all px-3 py-3 text-black-custom w-full max-w-[300px] bg-white m-auto rounded-2xl flex flex-col items-center" style={{ zIndex: 50 }}>
                <header className="w-full pb-3 flex justify-end">
                    <button role="Fechar Modal" onClick={() => { setVisible(!visible) }}>
                        <X size={32} weight="bold" />
                    </button>
                </header>
                <h1 className="text-center font-semibold text-2xl text-red-900">{title}</h1>
                <p style={{ width: "-webkit-fill-available" }} className="py-10 text-xl text-center">{content}</p>
                <figure className="w-full relative min-h-20">
                    <motion.figure initial={{ x: -1000, rotate: -180 }} animate={{ x: 0, rotate: 0 }} transition={{ duration: 1.3 }} className="relative overflow-hidden">
                        <Image src={"/assets/ilustration/errormodal.svg"} width={75} height={60} alt="Ilustração de robô quebrado, para simbolizar o erro" />
                    </motion.figure>
                </figure>
            </dialog>
        </dialog>
    )
}