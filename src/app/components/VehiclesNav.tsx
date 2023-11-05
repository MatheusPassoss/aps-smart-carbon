'use client'
import { useState } from 'react';
import { Bus, CarProfile, PersonSimpleBike } from './Phospor'
import { Button } from './Button';
import Image from 'next/image';
import { Input } from './Input';

export const VehiclesNav = () => {

    const isBus = useState()
    const isCar = useState()
    const isBike = useState()


    return (
        <aside className={`container m-auto xl:flex xl:justify-evenly xl:items-center`}>
            <div className='py-5 w-full max-w-4xl max-xl:m-auto px-3 text-black-custom'>
                <h2 className='text-2xl  font-semibold pt-8 '>Informações sobre meu veículo</h2>
                <p className='pb-14 '>Descubra quanto seu veículo já emitiu de carbono</p>
                <h4 className="pt-5 text-lg  max-md:text-center">Selecione o meio de transporte</h4>
                <fieldset className="flex items-center md:gap-20 max-md:justify-evenly pt-3 pb-5">
                    <button className={`px-1 py-1 rounded-lg ${isBus ? "bg-green-custom text " : "bg-default text-[#837c7c]"} transition-all`}   >
                        <Bus size={32} weight="fill" />
                    </button>
                    <button className={`px-1 py-1 rounded-lg ${isCar ? "bg-green-custom " : "bg-default text-[#837c7c]"} transition-all`}  >
                        <CarProfile size={32} weight="fill" />
                    </button>
                    <button className={`px-1 py-1 rounded-lg ${isBike ? "bg-green-custom " : "bg-default text-[#837c7c]"} transition-all`}>
                        <PersonSimpleBike size={32} weight="fill" />
                    </button>
                </fieldset>
                <label className="py-2 ">Origem</label>
                <Input isDark={true} />
                <label className="py-2 ">Destino</label>
                <Input isDark={true} />
                <div className='py-5'>
                    <Button Title={"Traçar rota"} />
                </div>
            </div>
            <figure className='self-end pb-4'>
                <Image width={430} height={330} src={"/assets/ilustration/three.svg"} alt="Ilustração de uma floresta." className="max-xl:hidden" />
            </figure>
        </aside>
    )
}