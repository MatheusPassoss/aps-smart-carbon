'use client'

import { useState } from "react"
import { MapContext } from "./MapContext"

interface MapProviderProps {
   children: React.ReactNode
}

export const MapProvider = ({ children }: MapProviderProps) => {


   const [Origin, setOrigin] = useState<string>("")
   const [Destination, setDestination] = useState<string>("")

   const [textDistance, setTextDistance] = useState<String>("")
   const [textTime, setTextTime] = useState<String>("")

   const [NumberDistance, setNumberDistance] = useState<Number>(0)
   const [NumberTime, setNumberTime] = useState<Number>(0)


   const [VehicleResult, setVehicleResult] = useState<string>("")

   
   const [totalEmission, setTotalEmission] = useState<string>("")
   
   const [emissionKm, setEmission] = useState<string>("")
   



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
      setOrigin(origin)
   }

   const defineDestination = (destionation: string) => {
      setDestination(destionation)
   }

   const setResults = (TextDistance: string, TextTime: string, VehicleResult: string, emissionKm: string, totalEmission: string) => {
      if (TextDistance != "" && TextTime != "" && VehicleResult != "" && emissionKm != null && totalEmission != null) {
         setTextDistance(TextDistance)
         setTextTime(TextTime);
         setEmission(emissionKm);
         setTotalEmission(totalEmission);

         console.log(VehicleResult)
         if (VehicleResult == "bus") setVehicleResult("bus");
         if (VehicleResult == "car") setVehicleResult("car");
         if (VehicleResult == "bike") setVehicleResult("bike");
         console.log(VehicleResult)
      }
   }



   return (
      <MapContext.Provider value={{ setResults, emissionKm, totalEmission, VehicleResult, textDistance, textTime, NumberDistance, NumberTime, defineModeDrive, defineOrigin, defineDestination, isCar, isBike, isBus, Origin, Destination, }}>
         {children}
      </MapContext.Provider>
   )
}






