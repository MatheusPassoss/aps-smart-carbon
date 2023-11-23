import { MapContext } from "../context/MapContext";
import { useApi } from "./useApi";
import { useFetch } from "./useFetch";
import { useMap } from "./useMap";
import { useContext, useEffect, useRef } from "react";

export const useRenderMap = () => {

    const { mapRef } = useContext(MapContext)
    const { isLoaded, directionsRenderer, directionsService, service } = useApi();


    const centeredOnUnip = {
        lat: -23.632608446295116,
        lng: -46.69668773214834,
    };

    const mapOptions = {
        zoom: 15,
        center: centeredOnUnip,
    };

    useEffect(() => {
        if (isLoaded && mapRef.current) {
            const map = new google.maps.Map(mapRef.current, mapOptions);
            directionsRenderer?.setMap(map);
        }
    }, [isLoaded]);


    const calculateRoute = (Origin: string, Destination: string, vehicle: string) => {

        if (isLoaded && mapRef.current) {
            const map = new google.maps.Map(mapRef.current, mapOptions);
            directionsRenderer?.setMap(map);

            try {
                console.log('entrou no try')
                directionsService?.route(
                    {
                        origin: Origin,
                        destination: Destination,
                        travelMode: google.maps.TravelMode.DRIVING,
                    },
                    function (result, status) {
                        if (status === "OK") {
                            console.log('traçou o resultado?')
                            console.log(result)
                            directionsRenderer?.setDirections(result);
                        }
                    }
                );

                service?.getDistanceMatrix(
                    {
                        origins: [Origin],
                        destinations: [Destination],
                        travelMode: google.maps.TravelMode.DRIVING,
                    },
                    function (result, status) {
                        if (status === "OK") {
                            const TextDistance = result?.rows[0].elements[0].distance?.text;
                            const TextTime = result?.rows[0].elements[0].duration?.text;
                            const NumberDistance = result?.rows[0].elements[0].distance?.value;
                            const NumberTime = result?.rows[0].elements[0].duration?.value;

                            if (NumberDistance && NumberTime) {
                                console.log("chamou o fetch?")
                                useFetch(NumberDistance, NumberTime, vehicle);
                            }
                        }
                    }
                );

            } catch (error) {
                console.error(error);
            }
        }
    }

    return { mapRef, calculateRoute }

};


