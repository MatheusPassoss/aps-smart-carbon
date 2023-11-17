
'use client'
import { Bus, CarProfile, PersonSimpleBike } from './Phospor'
import { MapContext } from "@/app/context/MapContext";
import { useContext, useRef } from 'react';
import Image from 'next/image';
import { Autocomplete } from '@react-google-maps/api';
import { Input } from './Input';
import { motion } from "framer-motion"
import { fromTheRight, fromTheBotton } from "../animations/data"

export const MapNav = () => {

    const { isCar, isBus, isBike, defineModeDrive, defineDestination, defineOrigin } = useContext(MapContext);

    const originRef = useRef<HTMLInputElement>(null)
    const destinationRef = useRef<HTMLInputElement>(null)

    const changeOrigin = (place: any) => {
        if (place) {
            defineOrigin(place)
        }
    }

    const changeDestiny = (place: any) => {
        if (place) {
            defineDestination(place)
        }
    }


    return (
        <aside className={`container m-auto xl:flex xl:justify-evenly xl:items-center overflow-hidden`}>
            <div className='pb-5 w-full max-w-4xl max-xl:m-auto px-3'>
                <h2 className='text-2xl text-white font-semibold '>Informações sobre minha rota</h2>
                <p className='pb-14 text-white'>Descubra quanto uma rota emite de carbono</p>
                <h4 className="pt-5 text-lg text-white max-md:text-center">Selecione o meio de transporte</h4>
                <fieldset className="flex items-center md:gap-20 max-md:justify-evenly pt-3 pb-5 overflow-hidden">
                    <motion.button
                        onClick={() => defineModeDrive('bus')}
                        {...fromTheBotton}
                        className={`px-1 py-1 rounded-lg ${isBus ? "bg-green-custom text " : "bg-default text-[#837c7c]"} transition-all`}   >
                        <Bus size={32} weight="fill" />
                    </motion.button>
                    <motion.button
                        onClick={() => defineModeDrive('car')}
                        {...fromTheBotton}
                        className={`px-1 py-1 rounded-lg ${isCar ? "bg-green-custom " : "bg-default text-[#837c7c]"} transition-all`}  >
                        <CarProfile size={32} weight="fill" />
                    </motion.button>
                    <motion.button

                        {...fromTheBotton}

                        onClick={() => defineModeDrive('bike')}
                        className={`px-1 py-1 rounded-lg ${isBike ? "bg-green-custom " : "bg-default text-[#837c7c]"} transition-all`}>
                        <PersonSimpleBike size={32} weight="fill" />
                    </motion.button>
                </fieldset>
                <label className="py-2 text-white">Origem</label>
                <Autocomplete className='w-full' onPlaceChanged={() => { changeOrigin(originRef.current?.value) }}>
                    <Input ref={originRef} />
                </Autocomplete>
                <label className="py-2 text-white">Destino</label>
                <Autocomplete className='w-full' onPlaceChanged={() => { changeDestiny(destinationRef.current?.value) }}>
                    <Input ref={destinationRef} />
                </Autocomplete>
            </div>
        </aside>
    )
}