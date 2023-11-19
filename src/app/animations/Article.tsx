'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { fromTheBotton, fromTheLeft, fromTheRight } from "./data"
import { Ilustration } from "./Ilustration"
import { Car, Bus, Bicycle } from "@phosphor-icons/react"

export const Article = () => {

    return (
        <article className="relative text-black-custom m-auto flex flex-col items-start gap-10 pb-10 px-3 overflow-hidden xl:max-w-3xl min-[1535px]:max-w-4xl  min-[1620px]:max-w-none">
            <h2 className="text-2xl font-semibold md:text-3xl self-start">Como funciona o cálculo?</h2>
            <motion.aside className="flex"  {...fromTheLeft}>
                <figure>
                    <h4 className="flex items-center gap-2 font-bold text-lg"><Car size={40} weight="fill" /> Carros</h4>
                    <p className="text-lg py-5 max-w-5xl">Seguindo a metodologia EN16258 e as diretrizes do IPCC, que ajudam a calcular as emissões de gases nos serviços de transporte, podemos usar a seguinte fórmula: a gasolina tem uma densidade de 0,75 kg por litro e um fator de transformação para CO₂ de 3,7 C/CO₂. Desconsiderando o volume de etanol (que varia de 18% a 25%), cada litro de gasolina vendida no Brasil consiste em 82% de gasolina pura. O cálculo para as emissões de carbono por litro de gasolina é: 1 x 0,82 x 0,75 x 3,7, resultando em 1,85 kg de CO₂ ou 1850 g de CO₂.</p>
                </figure>
            </motion.aside>

            <motion.aside className="flex"  {...fromTheLeft}>
                <figure>
                    <h4 className="flex items-center gap-2 font-bold text-lg"><Bus size={40} weight="fill" /> Ônibus</h4>
                    <p className="text-lg py-5 max-w-5xl">
                        Para ônibus movidos a diesel, vamos assumir que eles emitem uma média de 2,5 kg de dióxido de carbono (CO₂) por litro de combustível. No entanto, é importante notar que os ônibus podem carregar um grande número de passageiros. Por exemplo, um {`"miniônibus"`} da SPTrans pode transportar mais de 34 passageiros, conforme o manual de novembro de 2021. Neste projeto, vamos considerar que os ônibus sempre têm 30 passageiros e consomem, em média, 3 quilômetros por litro de diesel.</p>
                </figure>
            </motion.aside>

            <motion.aside className="flex"  {...fromTheLeft}>
                <figure>
                    <h4 className="flex items-center gap-2 font-bold text-lg"><Bicycle size={40} weight="fill" /> Bicicletas</h4>
                    <p className="text-lg py-5 max-w-5xl">As bicicletas não emitem carbono (<i>mas você sim, cuidado com o que comer quando for pedalar...</i>)</p>
                </figure>
            </motion.aside>
        </article >
    )

}