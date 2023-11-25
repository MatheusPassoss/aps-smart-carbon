
'use client'
import { Bus, CarProfile, PersonSimpleBike } from './Phospor'
import { useRef, useContext } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { Input } from './Input';
import { motion } from "framer-motion"
import { fromTheBotton } from "../animations/data"
import { Button } from './Button';
import { MapContext } from '../context/MapContext';
import { useRenderMap } from '../hooks/useRenderMap';
import { vehicleOpt } from '../context/MapProvider';

export const MapNav = () => {

    
    const originRef = useRef<HTMLInputElement>(null)
    const destinationRef = useRef<HTMLInputElement>(null)
    const { vehicle, setVehicle } = useContext(MapContext)
    
    const { calculateRoute } = useRenderMap()

    const ValidationDataOfRequest = (): void => {

        if (originRef.current?.value && destinationRef.current?.value && vehicle) calculateRoute(originRef.current?.value, destinationRef.current?.value, vehicle);

        if (!originRef.current?.value) alert(`Origem vazia: ${originRef.current?.value}`);

        if (!destinationRef.current?.value) alert(`Destino vazio: ${destinationRef.current?.value}`);

        if (!vehicle) alert(`Veículo não selecionado: ${vehicle}`);
    }


    return (
        <aside className={`container m-auto flex flex-col overflow-hidden`}>
            <div className='max-w-4xl px-3'>
                <div className='pb-5 w-full max-xl:m-auto px-3'>
                    <h2 className='text-2xl text-white font-semibold '>Informações sobre minha rota</h2>
                    <p className='pb-14 text-white'>Descubra quanto uma rota emite de carbono</p>
                    <h4 className="pt-5 text-lg text-white max-md:text-center">Selecione o meio de transporte</h4>
                    <fieldset className="flex items-center md:gap-20 max-md:justify-evenly pt-3 pb-5 overflow-hidden">
                        <motion.button
                            onClick={() => setVehicle(vehicleOpt.TRANSIT)}
                            {...fromTheBotton}
                            className={`px-1 py-1 rounded-lg ${vehicle === 'TRANSIT' ? "bg-green-custom text " : "bg-default text-[#837c7c]"} transition-all`}   >
                            <Bus size={32} weight="fill" />
                        </motion.button>
                        <motion.button
                            onClick={() => setVehicle(vehicleOpt.DRIVING)}
                            {...fromTheBotton}
                            className={`px-1 py-1 rounded-lg ${vehicle === 'DRIVING' ? "bg-green-custom " : "bg-default text-[#837c7c]"} transition-all`}  >
                            <CarProfile size={32} weight="fill" />
                        </motion.button>
                        <motion.button
                            {...fromTheBotton}
                            onClick={() => setVehicle(vehicleOpt.BICYCLING)}
                            className={`px-1 py-1 rounded-lg ${vehicle === 'BICYCLING' ? "bg-green-custom " : "bg-default text-[#837c7c]"} transition-all`}>
                            <PersonSimpleBike size={32} weight="fill" />
                        </motion.button>
                    </fieldset>
                    <label className="py-2 text-white">Origem</label>
                    <Autocomplete className='w-full'>
                        <Input ref={originRef} />
                    </Autocomplete>
                    <label className="py-2 text-white">Destino</label>
                    <Autocomplete className='w-full'>
                        <Input ref={destinationRef} />
                    </Autocomplete>
                </div>
                <Button Title={"Traçar rota"} onClick={() => { ValidationDataOfRequest() }} />
            </div >
        </aside>
    )

}