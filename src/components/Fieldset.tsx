'use client'

import { Bus, CarProfile, PersonSimpleBike, PersonSimpleWalk } from './UI/icons/Phospor';
import { motion } from "framer-motion";
import { fromTheBotton } from "./animations/data";
import { vehicleOpt } from '../context/MapProvider';
import { useContext } from 'react';
import { MapContext } from '@/context/MapContext';


export const Fieldset = () => {

    const { vehicle, setVehicle } = useContext(MapContext)

    return (
        <fieldset className="flex items-center md:gap-16 max-md:justify-evenly pt-3 pb-8 overflow-hidden">
            <motion.button
                onClick={() => setVehicle(vehicleOpt.DRIVING)}
                {...fromTheBotton}
                className={`px-1 py-1 rounded-lg ${vehicle === 'DRIVING' ? "bg-green-custom " : "bg-default text-[#837c7c]"} transition-all`}  >
                <CarProfile size={32} weight="fill" />
            </motion.button>
            <motion.button
                onClick={() => setVehicle(vehicleOpt.TRANSIT)}
                {...fromTheBotton}
                className={`px-1 py-1 rounded-lg ${vehicle === 'TRANSIT' ? "bg-green-custom text " : "bg-default text-[#837c7c]"} transition-all`}   >
                <Bus size={32} weight="fill" />
            </motion.button>
            <motion.button
                {...fromTheBotton}
                onClick={() => setVehicle(vehicleOpt.BICYCLING)}
                className={`px-1 py-1 rounded-lg ${vehicle === 'BICYCLING' ? "bg-green-custom " : "bg-default text-[#837c7c]"} transition-all`}>
                <PersonSimpleBike size={32} weight="fill" />
            </motion.button>
            <motion.button
                {...fromTheBotton}
                onClick={() => setVehicle(vehicleOpt.WALKING)}
                className={`px-1 py-1 rounded-lg ${vehicle === 'WALKING' ? "bg-green-custom " : "bg-default text-[#837c7c]"} transition-all`}>
                <PersonSimpleWalk size={32} weight="fill" />
            </motion.button>
        </fieldset>
    )
}