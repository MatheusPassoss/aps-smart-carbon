
'use client'
import { Bus, CarProfile, PersonSimpleBike } from './Phospor'
import { useRef, useState, useEffect } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { Input } from './Input';
import { motion } from "framer-motion"
import { fromTheBotton } from "../animations/data"
import { Button } from './Button';
import { useMap } from '../hooks/useMap';
import { useVehicle } from '../hooks/useVehicle';

export const MapNav = () => {
    const { ValidationDataOfRequest } = useMap();

    const originRef = useRef<HTMLInputElement>(null)
    const destinationRef = useRef<HTMLInputElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    var Origin: string | undefined
    var Destination: string | undefined
    const { selectVehicle, vehicle } = useVehicle();
    const [currentVehicle, setCurrentVehicle] = useState(vehicle);

    useEffect(() => {
        setCurrentVehicle(vehicle);
    }, [vehicle]);

    const initialFunction = (): void => {
        if (Origin && Destination && currentVehicle) {      
            ValidationDataOfRequest(Origin, Destination, currentVehicle)
        } else {
            alert("Destino não definido")
        }
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
                            onClick={() => {selectVehicle(1), console.log(vehicle)}}
                            {...fromTheBotton}
                            className={`px-1 py-1 rounded-lg ${vehicle === 'bus' ? "bg-green-custom text " : "bg-default text-[#837c7c]"} transition-all`}   >
                            <Bus size={32} weight="fill" />
                        </motion.button>
                        <motion.button
                            onClick={() => selectVehicle(0)}
                            {...fromTheBotton}
                            className={`px-1 py-1 rounded-lg ${vehicle === 'car' ? "bg-green-custom " : "bg-default text-[#837c7c]"} transition-all`}  >
                            <CarProfile size={32} weight="fill" />
                        </motion.button>
                        <motion.button
                            {...fromTheBotton}
                            onClick={() => selectVehicle(2)}
                            className={`px-1 py-1 rounded-lg ${vehicle === 'bike' ? "bg-green-custom " : "bg-default text-[#837c7c]"} transition-all`}>
                            <PersonSimpleBike size={32} weight="fill" />
                        </motion.button>
                    </fieldset>
                    <label className="py-2 text-white">Origem</label>
                    <Autocomplete className='w-full' onPlaceChanged={() => {Origin = originRef.current?.value}}>
                        <Input ref={originRef} />
                    </Autocomplete>
                    <label className="py-2 text-white">Destino</label>
                    <Autocomplete className='w-full' onPlaceChanged={() => {Destination = destinationRef.current?.value}}>
                        <Input ref={destinationRef} />
                    </Autocomplete>
                </div>
                <Button Title={"Traçar rota"} onClick={() => { initialFunction() }} ref={buttonRef} />
            </div >
        </aside>
    )

}