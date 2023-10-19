'use client'
import React, { useState, useCallback, useRef, useEffect } from "react";


import {
  useLoadScript,
} from "@react-google-maps/api";

export const Map = () => {
  const { isLoaded } = useLoadScript(
    {
      googleMapsApiKey: "AIzaSyDxZ5VdV_iZ74LcmbnkxF-ekP89bp4iaPg"
    }
  )
  if (!isLoaded) return "Loading...";
  return <MapTest />
}

export const MapTest = () => {



  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();


  const mapRef = useRef<HTMLDivElement>(null);

  const centeredOnUnip = {
    lat: -23.632608446295116,
    lng: -46.69668773214834
  }

  var mapOptions = {
    zoom: 15,
    center: centeredOnUnip
  }

  var request = {
    origin: "st louis, mo",
    destination: "joplin, mo",
    travelMode: google.maps.TravelMode.DRIVING
  }


  useEffect(() => {
    if (mapRef.current) {
      var map = new google.maps.Map(mapRef.current, mapOptions);
      directionsRenderer.setMap(map);

      directionsService.route(request, function (result, status) {
        if (status == 'OK') {
          directionsRenderer.setDirections(result);
          console.log(result);
        }
      });

    }
  }, []);


  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")


  return (
    <>
      <section className="w-[100vw] h-[100vh] flex">

        <aside className=" bg-[#1B2E3A] text-white w-full max-w-md py-5 px-3 flex flex-col gap-10">
          <input className="bg-white text-black w-full py-1 px-1" type="search" onChange={(e) => setOrigin(e.target.value)} />

          <p>{origin}</p>

          <input className="bg-white text-black w-full py-1 px-1 border-none" type="search" onChange={(e) => setDestination(e.target.value)} />
          <p>{destination}</p>

          <button>
            Traçar a rota
          </button>
        </aside>

        <figure ref={mapRef} className="h-screen w-screen" id="mapaps"></figure>

      </section>
    </>
  );

};
