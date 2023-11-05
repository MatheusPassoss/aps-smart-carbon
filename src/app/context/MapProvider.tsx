'use client'

import { useState } from "react"
import { MapContext } from "./MapContext"

interface MapProviderProps {
   children: React.ReactNode
}

export const MapProvider = ({ children }: MapProviderProps) => {


   var Origin = ""
   var Destination = ""


   const [isCar, setCar] = useState<Boolean>(false)
   const [isBus, setBus] = useState<Boolean>(false)
   const [isBike, setBike] = useState<Boolean>(false)


   const defineModeDrive = (driveMod: String): void => {
      setBus(false);
      setBike(false);
      setCar(false);

      if (driveMod === "bus") setBus(!isBus);
      if (driveMod === "car") setCar(!isCar);
      if (driveMod === "bike") setBike(!isBike);
   }

   const defineOrigin = (origin: string) => {
      Origin = origin
      console.log(`Definindo a Origem pelo Context. Destino: ${Origin}`);
   }

   const defineDestination = (destionation: string) => {
      Destination = destionation;
      console.log(`Definindo o destino pelo Context. Destino: ${Destination}`);
   }

   return (
      <MapContext.Provider value={{defineModeDrive, defineOrigin, defineDestination, isCar, isBike, isBus, Origin, Destination, }}>
         {children}
      </MapContext.Provider>
   )
}






