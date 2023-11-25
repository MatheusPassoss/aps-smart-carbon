'use client'
import { Bus, Car, Bicycle } from "@phosphor-icons/react"
import { Card } from "./Card"
import { useContext } from "react"
import { MapContext } from "../context/MapContext"
import { motion } from "framer-motion"
import { fromTheLeft, fromTheRight } from "../animations/data"
import { useResults } from "../hooks/useResults"
import { useFetch } from "../hooks/useFetch"
import { useRenderMap } from "../hooks/useRenderMap"


export const VehiclesInfo = () => {

    const {vehicleSelected, EmissionKm, TotalEmission, TextDistance, TextTime} = useContext(MapContext)
 


    const setWorldIcon = () => {

        if (TotalEmission == 0)
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
                    Icon={Car}

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

                    type="image"
                    title={"Carbono emitido"}

                    subtitle01={"Emissão por KM:"}
                    content01={`${EmissionKm}`}

                    subtitle02={"Total em gramas"}
                    content02={`${TotalEmission}`}
                />
            </motion.aside>
        </section>
    )
}