import { useState, useRef, useEffect, useContext } from "react";
import { MapContext } from "@/app/context/MapContext";
import { useFetch } from "./useFetch";
import { useApi } from "./useApi";
import { useRenderMap } from "./useRenderMap";

export const useMap = () => {


    const { isLoaded } = useApi();

    const centeredOnUnip = {
        lat: -23.632608446295116,
        lng: -46.69668773214834,
    };

    const mapOptions = {
        zoom: 15,
        center: centeredOnUnip,
    };


    const buttonRef = useRef<HTMLButtonElement>(null);

    let { mapRef } = useRenderMap()
    const { calculateRoute } = useRenderMap()

    const { Origin, Destination, setResults, isBike, isCar, isBus } = useContext(MapContext);

    let directionsService: google.maps.DirectionsService | undefined;
    let directionsRenderer: google.maps.DirectionsRenderer | undefined;
    let service: google.maps.DistanceMatrixService | undefined;

    if (isLoaded) {
        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer();
        service = new google.maps.DistanceMatrixService();
    }

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

    const [driveMode, setDriveMode] = useState<any>();
    const [vehicle, setVehicle] = useState<string>("car");

    // useEffect(() => {
    //     if (isBus) setDriveMode(ModeDrive.bus), setVehicle("bus");
    //     if (isCar) setDriveMode(ModeDrive.car), setVehicle("car");
    //     if (isBike) setDriveMode(ModeDrive.bike), setVehicle("bike");
    // }, [isBike, isBus, isCar]);

    // useEffect(() => {
    //     if (!Origin || !Destination) {
    //         if (buttonRef.current) buttonRef.current.disabled = true;
    //     }
    // }, [Origin, Destination]);

    const ValidationDataOfRequest = async () => {

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


    // const calculateRoute = async () => {




    //     if (map) {
    //         directionsRenderer?.setMap(map);
    //         console.log('entrou no if do calculateroute')

    //         try {
    //             console.log('entrou no try')
    //             await directionsService?.route(
    //                 {
    //                     origin: Origin,
    //                     destination: Destination,
    //                     travelMode: google.maps.TravelMode.DRIVING,
    //                 },
    //                 function (result, status) {
    //                     if (status === "OK") {
    //                         console.log('traçou o resultado?')
    //                         directionsRenderer?.setDirections(result);
    //                     }
    //                 }
    //             );

    //             await service?.getDistanceMatrix(
    //                 {
    //                     origins: [Origin],
    //                     destinations: [Destination],
    //                     travelMode: google.maps.TravelMode.DRIVING,
    //                 },
    //                 function (result, status) {
    //                     if (status === "OK") {
    //                         const TextDistance = result?.rows[0].elements[0].distance?.text;
    //                         const TextTime = result?.rows[0].elements[0].duration?.text;
    //                         const NumberDistance = result?.rows[0].elements[0].distance?.value;
    //                         const NumberTime = result?.rows[0].elements[0].duration?.value;

    //                         if (NumberDistance && NumberTime) {
    //                             console.log("chamou o fetch?")
    //                             useFetch(NumberDistance, NumberTime, vehicle);
    //                         }
    //                     }
    //                 }
    //             );

    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // };



    return {

        buttonRef,
        ValidationDataOfRequest,
    };
};
