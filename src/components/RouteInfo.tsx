'use client'
import { Bus, Car, Bicycle, PersonSimpleWalk } from "@phosphor-icons/react"
import { Card } from "./UI/Card"
import { useContext } from "react"
import { MapContext } from "../context/MapContext"
import { motion } from "framer-motion"
import { fromTheLeft, fromTheRight } from "./animations/data"

export const RouteInfo = () => {

    const { vehicleSelected, EmissionKm, TotalEmission, TextDistance, TextTime } = useContext(MapContext)

    const setIlustration = () => {

        if (TotalEmission == "0")
            return "/assets/ilustration/happyplanet.svg"

        return "/assets/ilustration/sadplanet.svg"
    }

    const setIcon = () => {

        switch (vehicleSelected) {
            case 'DRIVING':
                return Car
            case 'TRANSIT':
                return Bus
            case 'BICYCLING':
                return Bicycle
            case 'WALKING':
                return PersonSimpleWalk
        }

        return Car
    }


    return (
        <section className="md:flex md:flex-row md:justify-between lg:justify-center lg:gap-8 overflow-hidden">
            <motion.aside
                {...fromTheLeft}
                className="py-5 w-full md:px-3 flex justify-center items-center">
                <Card

                    icon={setIcon()}
                    title={"Distância e tempo"}

                    subtitle01={"Distância em KM:"}
                    content01={`${TextDistance}`}

                    subtitle02={"Tempo total:"}
                    content02={`${TextTime}`}
                />
            </motion.aside>
            <motion.aside
                {...fromTheRight}
                className="py-5 w-full md:px-3 flex justify-center items-center">
                <Card
                    icon={setIcon()}
                    hasImage
                    srcImg={setIlustration()}
                    title={"Carbono emitido"}

                    subtitle01={"Emissão por KM:"}
                    content01={EmissionKm}

                    subtitle02={"Total em gramas"}
                    content02={TotalEmission}
                />
            </motion.aside>
        </section>
    )
}