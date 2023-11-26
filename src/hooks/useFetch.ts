'use client'
import { useContext } from "react";
import { MapContext } from "../context/MapContext";

export const useFetch = () => {
    
    
    const { setVehicleSelected, setEmissionKm, setTotalEmission } = useContext(MapContext);

   
    const LambdaCalculateEmission = async (NumberDistance: number, NumberTime: number, vehicle: string) => {
        
        try {
            const response = await fetch("https://e09fwv0dl9.execute-api.us-east-1.amazonaws.com/test", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    distance: NumberDistance,
                    time: NumberTime,
                    vehicle: vehicle,
                }),
            });

            const data = await response.json();


            if (data) {
                const body = JSON.parse(data.body)
                setVehicleSelected(body.vehicle);
                setEmissionKm(body.emissionKm);
                setTotalEmission(body.totalEmission);
            }

        } catch (error) {
            console.error(error);
        }
    };

    return { LambdaCalculateEmission };
};