'use client'

import { useState, useEffect, useRef } from "react"
import { MapContext } from "./MapContext"
import { useApi } from "../hooks/useApi"

interface MapProviderProps {
   children: React.ReactNode
}

export const MapProvider = ({ children }: MapProviderProps) => {


   const centeredOnUnip = {
      lat: -23.632608446295116,
      lng: -46.69668773214834,
   };

   const mapOptions = {
      zoom: 15,
      center: centeredOnUnip,
   };

   const mapRef = useRef<HTMLDivElement>(null);
   const { directionsRenderer } = useApi()

   useEffect(() => {

      if (mapRef.current && directionsRenderer) {
         let map = new google.maps.Map(mapRef.current, mapOptions);
         directionsRenderer.setMap(map);

      }
   }, []);











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
      <MapContext.Provider value={{ mapRef, setResults, emissionKm, totalEmission, VehicleResult, textDistance, textTime, NumberDistance, NumberTime, defineModeDrive, defineOrigin, defineDestination, isCar, isBike, isBus, Origin, Destination, }}>
         {children}
      </MapContext.Provider>
   )
}






