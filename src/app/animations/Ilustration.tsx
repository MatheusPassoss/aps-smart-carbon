'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { fromTheBotton, fromTheLeft, fromTheRight } from "./data"


type IlustrationProps = {
    person: string;
    typeAnimation: 'fromTheLeft' | 'fromTheRight' | 'fromTheBotton'
}


const AnimationTypes = {
    fromTheLeft: {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
        transition: { duration: 0.5 }
    },
    fromTheRight: {
        initial: { opacity: 0, x: 100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
        transition: { duration: 0.5 }
    },
    fromTheBotton: {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        exit: { opacity: 0, x: 50 },
        transition: { duration: 0.3 }
    }
}



export const Ilustration = ({ person, typeAnimation }: IlustrationProps) => {
    const Animation = AnimationTypes[typeAnimation];

    return (
        <motion.figure {...Animation} className="px-3 py-5 overflow-hidden">
            <Image width={430} height={330} src={`/assets/persons/${person}.svg`} alt={`Ilustração do(a) integrante ${person}`} />
        </motion.figure>
    );
};
