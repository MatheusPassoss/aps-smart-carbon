'use client'

import { useState, useEffect, useRef } from "react"
import { MapContext } from "./MapContext"
import { useApi } from "../hooks/useApi"

interface MapProviderProps {
   children: React.ReactNode
}

export enum vehicleOpt {
   DRIVING = "DRIVING",
   TRANSIT = "TRANSIT",
   BICYCLING = "BICYCLING",
   WALKING = "WALKING"
}

export const MapProvider = ({ children }: MapProviderProps) => {

   const [vehicleSelected, setVehicleSelected] = useState<string>('car')
   const [EmissionKm, setEmissionKm] = useState<string>('0')
   const [TotalEmission, setTotalEmission] = useState<string>('0')
   const [TextDistance, setTextDistance] = useState<string>('0')
   const [TextTime, setTextTime] = useState<string>('0')
   const [vehicle, setVehicle] = useState<vehicleOpt>(vehicleOpt.DRIVING)
   const mapRef = useRef<HTMLDivElement>(null);
   const { directionsRenderer } = useApi()


   const centeredOnUnip = {
      lat: -23.632608446295116,
      lng: -46.69668773214834,
   };

   const mapOptions = {
      zoom: 15,
      center: centeredOnUnip,
   };

   useEffect(() => {

      if (mapRef.current && directionsRenderer) {
         let map = new google.maps.Map(mapRef.current, mapOptions);
         directionsRenderer.setMap(map);

      }
   }, []);

   return (
      <MapContext.Provider value={{ vehicle, setVehicle, mapRef, vehicleSelected, setVehicleSelected, EmissionKm, setEmissionKm, TotalEmission, setTotalEmission, TextDistance, setTextDistance, TextTime, setTextTime }}>
         {children}
      </MapContext.Provider>
   )
}






