import { useState, useContext } from "react";
import { MapContext } from "@/app/context/MapContext";
import { useApi } from "./useApi";
import { useRenderMap } from "./useRenderMap";

export const useMap = () => {


    const { isLoaded } = useApi();

    const { calculateRoute } = useRenderMap()



    // const ModeDrive = {
    //     car: google.maps.TravelMode.DRIVING,
    //     bus: google.maps.TravelMode.TRANSIT,
    //     bike: google.maps.TravelMode.BICYCLING,
    //     walk: google.maps.TravelMode.WALKING,
    // };

    // const ModeDrive = {
    //     car: google.maps.TravelMode.DRIVING,
    //     bus: google.maps.TravelMode.TRANSIT,
    //     bike: google.maps.TravelMode.BICYCLING,
    //     walk: google.maps.TravelMode.WALKING,
    // };

    // useEffect(() => {
    //     if (isBus) setDriveMode(ModeDrive.bus), setVehicle("bus");
    //     if (isCar) setDriveMode(ModeDrive.car), setVehicle("car");
    //     if (isBike) setDriveMode(ModeDrive.bike), setVehicle("bike");
    // }, [isBike, isBus, isCar]);


    const ValidationDataOfRequest = (Origin: string, Destination: string, vehicle: string) => {

        console.log('entrou na validação')
        if (!isLoaded) {
            alert('n carregou')
            return null;
        }


        if (!Origin || !Destination) {
            alert("Origem ou destino vazios");
            return null;
        }

        return calculateRoute(Origin, Destination, vehicle);
    };

    return {
        ValidationDataOfRequest,
    };
};
