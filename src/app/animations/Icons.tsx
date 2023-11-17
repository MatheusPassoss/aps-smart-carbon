'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { IconProps } from "@phosphor-icons/react"



interface IconsProps {
    Icon?: React.FC<IconProps>
    icon: 'car' | 'bus' | 'bike'
}

export const Icons = ({ icon, type }: any) => {

    if (icon = 'car') {
        return null
    }

    const rotateCircle = {
        initial: { rotate: -200, scale: 0.5 },
        whileInView: { rotate: 0, scale: 1 },
        exit: { rotate: -200, scale: 0.5 },
        transition: { ease: "linear", duration: 1.5, delay: 0.8, type: "spring", stiffness: 20, }
    }

    const rotateMainCircle = {
        initial: { rotate: -200, scale: 0.5 },
        whileInView: { rotate: 0, scale: 1 },
        exit: { rotate: -200, scale: 0.5 },
        transition: { ease: "linear", duration: 1.5, type: "spring", stiffness: 20, delayChildren: 1 }
    }

    const planet = {
        sad: {
            ilustration: 'sadplanet',
            describe: 'Ilustração de um planeta triste, e poluído. Cheio de gases carbônicos.'
        },

        happy: {
            ilustration: 'hapyplanet',
            describe: 'Ilustração de um planeta feliz, e cheio de vida. Com baixa emissão de gases carbônicos.'
        }
    }

    const vehicle = {
        car: 'car',
        bus: 'bus',
        bike: 'bike'
    }

    const teste = planet['sad'].ilustration


    return (
        <>
            <motion.div className="relative py-14 px-14 bg-black-custom rounded-t-full rounded-l-full overflow-hidden" {...rotateCircle}>
                <motion.div className="absolute bottom-0 right-0 py-[3.20rem] px-[3.20rem] bg-white rounded-t-full rounded-l-full" {...rotateMainCircle}>

                    <motion.div className="absolute bottom-0 right-0 h-[98%] w-[98%] bg-black-custom rounded-t-full rounded-l-full flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, delay: 2 }}>

                        <Image src={`/assets/ilustration/${planet.happy.ilustration}.svg`} alt={`${planet['happy'].describe}`} width={120} height={130} />


                    </motion.div>
                </motion.div>


            </motion.div>

        </>
    )
}