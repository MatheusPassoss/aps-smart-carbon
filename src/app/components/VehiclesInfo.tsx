'use client'
import { Bus, Car, Bicycle } from "@phosphor-icons/react"
import { Card } from "./Card"
import { useContext } from "react"
import { MapContext } from "../context/MapContext"
import { motion } from "framer-motion"
import { fromTheLeft, fromTheRight } from "../animations/data"
 

export const VehiclesInfo = () => {

    const { textTime, textDistance, isBike, isBus, isCar, VehicleResult, emissionKm, totalEmission } = useContext(MapContext)

    const setVehicleResult = () => {

        if (VehicleResult == "bus") return Bus;
        if (VehicleResult == "car") return Car;
        if (VehicleResult == "bike") return Bus;

        return setVehicle()
    }

    const setVehicle = () => {

        if (isBike) return Bicycle;
        if (isBus) return Bus;
        if (isCar) return Car;

        return Car
    }

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
                    Icon={setVehicleResult()}

                    title={"Distância e tempo"}

                    subtitle01={"Distância em KM:"}
                    content01={`${textDistance}`}

                    subtitle02={"Tempo total:"}
                    content02={`${textTime}`}
                />
            </motion.aside>
            <motion.aside
                {...fromTheRight}
                className="py-5 w-full md:px-3 flex justify-center items-center">
                <Card

                    type="image"
                    title={"Carbono emitido"}

                    subtitle01={"Emissão por KM:"}
                    content01={`${emissionKm}`}

                    subtitle02={"Total em gramas"}
                    content02={`${totalEmission}`}
                />
            </motion.aside>
        </section>
    )
}