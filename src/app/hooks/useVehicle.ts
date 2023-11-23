import { useState, useEffect } from "react";

export const useVehicle = () => {
    const [vehicle, setVehicle] = useState<string>('car');

    const VehicleOptions = ['car', 'bus', 'bike', 'walk'];

    const selectVehicle = (selected: number): void => {
        setVehicle(VehicleOptions[selected]);
    }

    return { vehicle, selectVehicle };
}
