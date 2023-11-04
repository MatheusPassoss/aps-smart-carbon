
'use client'
import { Bus, CarProfile, PersonSimpleBike } from './Phospor'
import { MapContext } from "@/app/context/MapContext";
import { useContext } from 'react';
import { Button } from './Button';

export const MapNav = () => {

    const { isCar, isBus, isBike, defineModeDrive } = useContext(MapContext);


    return (
        <aside className={`container m-auto max-w-7xl jutisfy-center py-5 px-3 flex flex-col transition-all `}>

            <label className="py-2 text-white">Origem</label>
            <table className="group flex bg-white rounded-lg border-[1px] border-solid border-[#F0E5D7]">
                <input type="text" className="w-full px-1 py-1 rounded-lg bg-transparent focus:outline-0 text-black-custom" />
            </table>

            <label className="py-2 text-white">Destino</label>
            <table className="group flex bg-white rounded-lg border-[1px] border-solid border-[#F0E5D7]">
                <input className="w-full px-1 py-1 rounded-lg bg-transparent focus:outline-0 text-black-custom" />
            </table>

            <h2 className="text-center pt-5 text-lg text-white">Selecione o meio de transporte</h2>
            <fieldset className="flex items-center justify-evenly pt-3 pb-10">
                <button className={`px-1 py-1 rounded-lg ${isBus ? "bg-green-custom text text-white" : "bg-default text-[#837c7c]"} transition-all`} onClick={() => defineModeDrive('bus')}>
                    <Bus size={32} weight="fill" />
                </button>
                <button className={`px-1 py-1 rounded-lg ${isCar ? "bg-green-custom text-white" : "bg-default text-[#837c7c]"} transition-all`} onClick={() => defineModeDrive('car')}>
                    <CarProfile size={32} weight="fill" />
                </button>
                <button className={`px-1 py-1 rounded-lg ${isBike ? "bg-green-custom text-white" : "bg-default text-[#837c7c]"} transition-all`} onClick={() => defineModeDrive('bike')}>
                    <PersonSimpleBike size={32} weight="fill" />
                </button>
            </fieldset>

            <Button Title={"Traçar rota"} />
            
        </aside>
    )
}