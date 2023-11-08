'use client'
import { Bus, Car, Bicycle } from "@phosphor-icons/react"
import { Card } from "./Card"
import { useContext } from "react"
import { MapContext } from "../context/MapContext"
export const VehiclesInfo = () => {

    const { NumberDistance, NumberTime, isBike, isBus, isCar, VehicleResult } = useContext(MapContext)

    const setVehicleResult = () => {

        if (VehicleResult == "bus") return Bus;
        if (VehicleResult == "car") return Car;
        if (VehicleResult == "bike") return Bus;

        return setVehicle()
    }

    const setVehicle = () => {


        if (isBike) {
            return Bicycle
        }

        if (isBus) {
            return Bus
        }

        if (isCar) {
            return Car
        }

        return Car
    }

    


    return (
        <section className="md:flex md:flex-row md:justify-between lg:justify-center lg:gap-8">
            <aside className="py-5 w-full md:px-3 flex justify-center items-center">
                <Card
                    imgAlt=""

                    Icon={setVehicleResult()}

                    title={"Distância e tempo"}

                    subtitle01={"Distância em KM:"}
                    content01={`${NumberDistance}`}

                    subtitle02={"Tempo total:"}
                    content02={`${NumberTime}`}
                />
            </aside>
            <aside className="py-5 w-full md:px-3 flex justify-center items-center">
                <Card
                    imgAlt="a"
                    imgHeight={85}
                    imgWidth={90}
                    imgSrc="/assets/ilustration/sadplanet.svg"

                    title={"Carbono emitido"}

                    subtitle01={"Emissão por KM:"}
                    content01={""}

                    subtitle02={"Total em gramas"}
                    content02={""}
                />
            </aside>
        </section>
    )
}