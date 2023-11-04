'use client'

import { useState } from "react"
import { MapContext } from "./MapContext"

interface MapProviderProps {
   children: React.ReactNode
}

export const MapProvider = ({ children }: MapProviderProps) => {


   const [Origin, setOrigin] = useState<String>("")
   const [Destination, setDestination] = useState<String>("")

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


   return (
      <MapContext.Provider value={{ defineModeDrive, isCar, isBike, isBus, Origin, Destination }}>
         {children}
      </MapContext.Provider>
   )
}






