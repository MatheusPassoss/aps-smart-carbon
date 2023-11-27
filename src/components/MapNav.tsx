
'use client'
import { Bus, CarProfile, PersonSimpleBike, PersonSimpleWalk, ArrowCircleDown } from './Phospor'
import { useRef, useContext } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { Input } from './Input';
import { motion } from "framer-motion"
import { fromTheBotton } from "./animations/data"
import { Button } from './Button';
import { MapContext } from '../context/MapContext';
import { useRenderMap } from '../hooks/useRenderMap';
import { vehicleOpt } from '../context/MapProvider';
import Link from 'next/link';
import {useModal} from '@/hooks/useModal'

export const MapNav = () => {

    const originRef = useRef<HTMLInputElement>(null)
    const destinationRef = useRef<HTMLInputElement>(null)
    const { vehicle, setVehicle, hasRoute } = useContext(MapContext)

    const { calculateRoute } = useRenderMap()

    const ValidationDataOfRequest = () => {

        if (originRef.current?.value && destinationRef.current?.value && vehicle) calculateRoute(originRef.current?.value, destinationRef.current?.value, vehicle);

        if (!originRef.current?.value) {

            var title = 'Origem vazia!'
            var content = 'A origem da rota está vazia ou foi digitada incorretamente. Digite a origem para prosseguir que seja possível traçar sua rota.'
            
            useModal(title, content)
        }

        if (!destinationRef.current?.value) {

            var title = 'Destino vazio!'
            var content = 'O Destino da rota está vazia ou foi digitada incorretamente. Digite a origem para prosseguir que seja possível traçar sua rota.'
            
            useModal(title, content)
        }
    }


    return (
        <aside className={`container m-auto flex flex-col overflow-hidden`}>
            <aside className='pb-5 w-full max-xl:m-auto px-3'>
                <h2 className='text-2xl text-white font-semibold '>Informações sobre minha rota</h2>
                <p className='pb-14 text-white'>Descubra quanto uma rota emite de carbono</p>
                <h4 className="pt-5 text-lg text-white max-md:text-center">Selecione o meio de transporte</h4>

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

                <label className="text-white">Origem</label>
                <Autocomplete className='w-full pb-3 pt-1' restrictions={{country: 'br'}}>
                    <Input inputRef={originRef} />
                </Autocomplete>
                <label className="text-white">Destino</label>
                <Autocomplete className='w-full pb-5 pt-1' restrictions={{country: 'br'}}>
                    <Input inputRef={destinationRef} />
                </Autocomplete>
                <table className={`w-full ${hasRoute && "flex flex-col gap-5 md:flex-row"}`}>
                    <Button Title={"Traçar nova rota"} onClick={() => { ValidationDataOfRequest() }} />
                    {hasRoute &&
                   (<Link href={"#info"} className='w-full'>
                        <Button Title={"Conferir informações"} RightIcon Icon={ArrowCircleDown}/>
                    </Link>)}
                </table>
            </aside>
        </aside>
    )

}