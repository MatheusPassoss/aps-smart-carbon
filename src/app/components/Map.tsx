'use client'

import React, { useState, useRef, useEffect, useContext } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { MapContext } from "@/app/context/MapContext";
import { MapNav } from "./MapNav";
import { Button } from "./Button";

export const Map = () => {
  const GoogleApiKey = process.env.REACT_APP_GOOGLE_KEY;

  if (!GoogleApiKey) {
    return "Chave de API está indefinida ou não pode ser acessada.";
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDxZ5VdV_iZ74LcmbnkxF-ekP89bp4iaPg",
    libraries: ['places']
  });

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <MapTest />
  );
};


export const MapTest = () => {

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const service = new google.maps.DistanceMatrixService();

  const mapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null)

  const { Origin, Destination, setResults, isBike, isCar, isBus } = useContext(MapContext)


  const centeredOnUnip = {
    lat: -23.632608446295116,
    lng: -46.69668773214834
  }

  let mapOptions = {
    zoom: 15,
    center: centeredOnUnip
  }

  const ModeDrive = {
    car: google.maps.TravelMode.DRIVING,
    bus: google.maps.TravelMode.TRANSIT,
    bike: google.maps.TravelMode.BICYCLING,
    walk: google.maps.TravelMode.WALKING

  };

  const [driveMode, setDriveMode] = useState<any>()
  const [vehicle, setVehicle] = useState<string>("")

  useEffect(() => {
    if (isBus) setDriveMode(ModeDrive.bus), setVehicle("bus");
    if (isCar) setDriveMode(ModeDrive.car), setVehicle("car");
    if (isBike) setDriveMode(ModeDrive.bike), setVehicle("bike");

  }, [isBike, isBus, isCar])


  function ValidationDataOfRequest() {

    if (!driveMode) {
      console.log('Meio de transporte não selecionado')
      return null
    }

    if (!Origin || !Destination) {
      console.log('Origem ou destino vazios')
      return null

    }
    return CaclRoute()
  }


  async function CaclRoute() {


    if (mapRef.current && buttonRef.current) {

      let map = new google.maps.Map(mapRef.current, mapOptions);
      directionsRenderer.setMap(map);

      buttonRef.current.disabled = true

      try {

        await directionsService.route({
          origin: Origin,
          destination: Destination,
          travelMode: driveMode
        },
          function (result, status) {
            if (status == 'OK') {
              directionsRenderer.setDirections(result);
            }
          });

      } catch (error) {
        console.error(error)
        buttonRef.current.disabled = false

      }

      await service.getDistanceMatrix({
        origins: [Origin],
        destinations: [Destination],
        travelMode: driveMode
      },
        function (result, status) {

          if (status == 'OK') {

            console.log(result);
            let TextDistance = result?.rows[0].elements[0].distance?.text;
            let TextTime = result?.rows[0].elements[0].duration?.text;
            let NumberDistance = result?.rows[0].elements[0].distance?.value;
            let NumberTime = result?.rows[0].elements[0].duration?.value;




            try {
              fetch("https://e09fwv0dl9.execute-api.us-east-1.amazonaws.com/test", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  distance: NumberDistance,
                  time: NumberTime,
                  vehicle: vehicle,
                })
              })
                .then(response => response.json())
                .then(response => {

                  let data = JSON.parse(response.body)

                  console.log(data)

                  const VehicleResult = data.vehicle

                  if (TextDistance && TextTime && VehicleResult && NumberDistance && NumberTime) {




                    setResults(TextDistance, TextTime, VehicleResult, NumberDistance, NumberTime);



                  }


                })
              if (buttonRef.current)
                buttonRef.current.disabled = false;

            } catch (error) {

              if (buttonRef.current)
                buttonRef.current.disabled = false
              console.error(error)
            }

          }
        })

      buttonRef.current.disabled = false
    }

  }

  useEffect(() => {

    if (mapRef.current) {
      let map = new google.maps.Map(mapRef.current, mapOptions);
      directionsRenderer.setMap(map);
    }

  }, []);

  return (
    <section className="min-h-[100vh] flex flex-col relative">
      <MapNav />
      <div className='m-auto w-full py-5 max-w-4xl'>
        <Button Title={"Traçar rota"} onClick={() => { ValidationDataOfRequest() }} ref={buttonRef} />
      </div>
      <figure ref={mapRef} className="min-h-screen" />
    </section>
  );
};
