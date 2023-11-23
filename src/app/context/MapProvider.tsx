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










   const [textDistance, setTextDistance] = useState<String>("")
   const [textTime, setTextTime] = useState<String>("")

   const [NumberDistance, setNumberDistance] = useState<Number>(0)
   const [NumberTime, setNumberTime] = useState<Number>(0)

   const [totalEmission, setTotalEmission] = useState<string>("")

   const [emissionKm, setEmission] = useState<string>("")
 




 





   const setResults = (TextDistance: string, TextTime: string, VehicleResult: string, emissionKm: string, totalEmission: string) => {
      if (TextDistance != "" && TextTime != "" && VehicleResult != "" && emissionKm != null && totalEmission != null) {
         setTextDistance(TextDistance)
         setTextTime(TextTime);
         setEmission(emissionKm);
         setTotalEmission(totalEmission);

      }
   }



   return (
      <MapContext.Provider value={{ mapRef, emissionKm, totalEmission, textDistance, textTime, NumberDistance, NumberTime}}>
         {children}
      </MapContext.Provider>
   )
}






