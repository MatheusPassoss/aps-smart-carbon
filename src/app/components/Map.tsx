'use client'
 
import React, { useState, useRef, useEffect, useContext } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { MapProvider } from "@/app/context/MapProvider";
import { MapContext } from "@/app/context/MapContext";
import { MapNav } from "./MapNav";


export const Map = () => {
  const GoogleApiKey = process.env.REACT_APP_GOOGLE_KEY;

  if (!GoogleApiKey) {
    return "Chave de API está indefinida ou não pode ser acessada.";
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GoogleApiKey
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

  const {Origin, Destination} = useContext(MapContext)


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



  function CaclRoute(params: any) {

    console.log("Chamou a função!")

    if (mapRef.current) {
      var map = new google.maps.Map(mapRef.current, mapOptions);
      directionsRenderer.setMap(map);

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
    <>
      <section className="min-h-[100vh] flex flex-col relative bg-black-custom">
        <MapNav />
        {/* <figure ref={mapRef} className="min-h-screen"></figure> */}
        <aside className={`bg-black-custom py-8 px-5 flex items-center justify-center transition-all duration-500`}>
          <h3>Informações sobre sua rota:</h3>
        </aside>
      </section>
    </>
  );

};
