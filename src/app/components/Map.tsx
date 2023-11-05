'use client'

import React, { useState, useRef, useEffect, useContext } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { MapContext } from "@/app/context/MapContext";
import { MapNav } from "./MapNav";
import { Button } from "./Button";

export const Map = () => {
  // const GoogleApiKey = process.env.REACT_APP_GOOGLE_KEY;
  const GoogleApiKey = "AIzaSyDxZ5VdV_iZ74LcmbnkxF-ekP89bp4iaPg";

  if (!GoogleApiKey) {
    return "Chave de API está indefinida ou não pode ser acessada.";
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GoogleApiKey,
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

  const { Origin, Destination } = useContext(MapContext)


  const [distance, setDistance] = useState<String | null>()
  const [time, setTime] = useState<String | null>()

  const centeredOnUnip = {
    lat: -23.632608446295116,
    lng: -46.69668773214834
  }

  var mapOptions = {
    zoom: 15,
    center: centeredOnUnip
  }

  const params = {
    origins: Origin,
    destinations: Destination,
    travelMode: google.maps.TravelMode.DRIVING
  };

  useEffect(() => {
    params.destinations = Destination;
    params.origins = Origin;
  }, [Origin, Destination])
 



  function CaclRoute(params: any) {

    console.log(`A origem é ${Origin}`)


    console.log(params)

    if (mapRef.current) {

      directionsService.route(params, function (result, status) {
        if (status == 'OK') {
          directionsRenderer.setDirections(result);
        }
      });

      service.getDistanceMatrix(params, function (result, status) {
        if (status == 'OK') {
          console.log(result);
          setDistance(result?.rows[0].elements[0].distance?.text);
          setTime(result?.rows[0].elements[0].duration?.text);
        }
      })
    }

  }

  useEffect(() => {

    if (mapRef.current) {
      var map = new google.maps.Map(mapRef.current, mapOptions);
      directionsRenderer.setMap(map);
    }

  });

  return (
    <section className="min-h-[100vh] flex flex-col relative">
      <MapNav />
      <div className='py-5'>
        <Button Title={"Traçar rota"} onClick={() => { CaclRoute(params) }} />
      </div>
      <figure ref={mapRef} className="min-h-screen" ></figure>
    </section>
  );
};
