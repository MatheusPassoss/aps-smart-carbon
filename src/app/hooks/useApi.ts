import { useLoadScript } from "@react-google-maps/api";

export const useApi = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDxZ5VdV_iZ74LcmbnkxF-ekP89bp4iaPg",
        libraries: ['places']
    });

    let directionsService: google.maps.DirectionsService | undefined;
    let directionsRenderer: google.maps.DirectionsRenderer | undefined;
    let service: google.maps.DistanceMatrixService | undefined;

    if (isLoaded) {
        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer();
        service = new google.maps.DistanceMatrixService();
    }

    return {
        isLoaded,
        directionsRenderer,
        directionsService,
        service
    };
};