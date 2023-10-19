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
  const service = new google.maps.DistanceMatrixService();
  const mapRef = useRef<HTMLDivElement>(null);

  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")

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

  var request = {
    origin: origin,
    destination: destination,
    travelMode: google.maps.TravelMode.DRIVING
  }


  function CaclRoute() {
    if (mapRef.current) {
      var map = new google.maps.Map(mapRef.current, mapOptions);
      directionsRenderer.setMap(map);

      directionsService.route(request, function (result, status) {
        if (status == 'OK') {
          directionsRenderer.setDirections(result);
          console.log(result);
        }
      });

      service.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
      }, function (result, status) {
        if (status == 'OK') {
          console.log(result);
          setDistance(result?.rows[0].elements[0].distance?.text);
          setTime(result?.rows[0].elements[0].duration?.text);
          setDestination(""); setOrigin("");
        }
      })
    }

  }

  useEffect(() => {

    if (mapRef.current) {
      var map = new google.maps.Map(mapRef.current, mapOptions);
      directionsRenderer.setMap(map);}

  }, []);




  return (
    <>
      <section className="w-[100vw] h-[100vh] flex">

        <aside className=" bg-[#1B2E3A] text-white w-full max-w-md py-5 px-3 flex flex-col gap-10">
          <input className="bg-white text-black w-full py-1 px-1" type="search" onChange={(e) => setOrigin(e.target.value)} />

          <p>{origin}</p>

          <input className="bg-white text-black w-full py-1 px-1 border-none" type="search" onChange={(e) => setDestination(e.target.value)} />
          <p>{destination}</p>

          <p>{distance}</p>

          <p>{time}</p>

          <button onClick={CaclRoute}>
            Traçar a rota
          </button>
        </aside>

        <figure ref={mapRef} className="h-screen w-screen" id="mapaps"></figure>

      </section>
    </>
  );

};
