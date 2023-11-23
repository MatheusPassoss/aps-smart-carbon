'use client'
import { Bus, Car, Bicycle } from "@phosphor-icons/react"
import { Card } from "./Card"
import { useContext } from "react"
import { MapContext } from "../context/MapContext"
import { motion } from "framer-motion"
import { fromTheLeft, fromTheRight } from "../animations/data"
import { useResults } from "../hooks/useResults"


export const VehiclesInfo = () => {

    const { emissionKm, totalEmission } = useContext(MapContext)
    var TextDistance = 0
    var TextTime = 0

 
    const setWorldIcon = () => {

        if (totalEmission == "0")
            return "/assets/ilustration/happyplanet.svg"

        return "/assets/ilustration/sadplanet.svg"
    }




    return (
        <section className="md:flex md:flex-row md:justify-between lg:justify-center lg:gap-8 overflow-hidden">
            <motion.aside
                {...fromTheLeft}
                className="py-5 w-full md:px-3 flex justify-center items-center">
                <Card
                    type="image"
                    // Icon={ }

                    title={"Distância e tempo"}

                    subtitle01={"Distância em KM:"}
                    content01={`${TextDistance || "0"}`}

                    subtitle02={"Tempo total:"}
                    content02={`${TextTime || "0"}`}
                />
            </motion.aside>
            <motion.aside
                {...fromTheRight}
                className="py-5 w-full md:px-3 flex justify-center items-center">
                <Card

                    type="image"
                    title={"Carbono emitido"}

                    subtitle01={"Emissão por KM:"}
                    content01={`${emissionKm || "0"}`}

                    subtitle02={"Total em gramas"}
                    content02={`${totalEmission || "0"}`}
                />
            </motion.aside>
        </section>
    )
}