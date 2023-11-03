'use client'
import React, { useState, useCallback, useRef, useEffect } from "react";
import { Input } from "./Input";
import { MapPin, FlagPennant, Bus, CarProfile, PersonSimpleBike, Motorcycle } from './Phospor'
import { useLoadScript } from "@react-google-maps/api";
import { Button } from "./Button";


export const Map = () => {

  const GOOGLE_KEY = "AIzaSyDxZ5VdV_iZ74LcmbnkxF-ekP89bp4iaPg";



  const { isLoaded } = useLoadScript(
    {
      googleMapsApiKey: GOOGLE_KEY
    }
  )
  if (!isLoaded) {
    return "Loading...";
  }
  return <MapTest />
}







export const MapTest = () => {


  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const service = new google.maps.DistanceMatrixService();
  const mapRef = useRef<HTMLDivElement>(null);

  const [Origin, setOrigin] = useState<String>("")
  const [Destination, setDestination] = useState<String>("")

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

  function testeRota(): void {

    console.log("chamou a função.");

    if (Origin != null) alert("Origem vazia");

    if (Destination != "") alert("Destino vazio");




    if (isBus) params.travelMode = google.maps.TravelMode.TRANSIT;
    if (isCar) params.travelMode = google.maps.TravelMode.DRIVING;
    if (isBike) params.travelMode = google.maps.TravelMode.BICYCLING;
    if (params.travelMode == null) alert("Selecione o modo de viagem");

    CaclRoute(params)

  }

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

  const testeRequisicao = () => {
    fetch("https://e09fwv0dl9.execute-api.us-east-1.amazonaws.com/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        distance: 200,
        time: 10,
      })
    })
      .then(response => response.json())
      .then(data => {


      })
      .catch(error => console.error('Erro:', error));
  }



  useEffect(() => {

    if (mapRef.current) {
      var map = new google.maps.Map(mapRef.current, mapOptions);
      directionsRenderer.setMap(map);
    }

  });

  const [isCar, setCar] = useState<Boolean>(false)
  const [isBus, setBus] = useState<Boolean>(false)
  const [isBike, setBike] = useState<Boolean>(false)
  const [isMotorcycle, setMotorcycle] = useState<Boolean>(false)

  const defineModeDrive = (driveMod: String): void => {
    setBus(false);
    setBike(false);
    setCar(false);
    setMotorcycle(false);

    if (driveMod === "bus") setBus(!isBus);
    if (driveMod === "car") setCar(!isCar);
    if (driveMod === "bike") setBike(!isBike);
    // if (driveMod === "motorcycle") setMotorcycle(!isMotorcycle);

  }





  return (
    <>
      <section className="min-h-[100vh] flex flex-col relative bg-black-custom">

        <aside className={`container m-auto max-w-7xl jutisfy-center py-5 px-3 flex flex-col transition-all `}>

          <label className="py-2 text-white">Origem</label>
          <table className="group flex bg-white rounded-lg border-[1px] border-solid border-[#F0E5D7]">
            <input
              type="text"
              className="w-full px-1 py-1 rounded-lg bg-transparent focus:outline-0 text-black-custom"

              onChange={(e) => setOrigin(e.target.value)}
            />
          </table>

          <label className="py-2 text-white">Destino</label>
          <table className="group flex bg-white rounded-lg border-[1px] border-solid border-[#F0E5D7]">
            <input className="w-full px-1 py-1 rounded-lg bg-transparent focus:outline-0 text-black-custom" onChange={(e) => setDestination(e.target.value)} type="text" />
          </table>

          <h2 className="text-center pt-5 text-lg text-white">Selecione o meio de transporte</h2>
          <fieldset className="flex items-center justify-evenly pt-3 pb-10">
            <div className={`px-1 py-1 rounded-lg ${isBus ? "bg-green-custom text text-white" : "bg-default text-[#837c7c]"} transition-all`} onClick={() => { defineModeDrive("bus") }}>
              <Bus size={32} weight="fill" />
            </div>
            <div className={`px-1 py-1 rounded-lg ${isCar ? "bg-green-custom text-white" : "bg-default text-[#837c7c]"} transition-all`} onClick={() => { defineModeDrive("car") }}>
              <CarProfile size={32} weight="fill" />
            </div>
            <div className={`px-1 py-1 rounded-lg ${isBike ? "bg-green-custom text-white" : "bg-default text-[#837c7c]"} transition-all`} onClick={() => { defineModeDrive("bike") }}>
              <PersonSimpleBike size={32} weight="fill" />
            </div>
          </fieldset>
          <Button Title={"Traçar rota"} onClick={() => testeRota()} />

        </aside>

        <figure ref={mapRef} className="min-h-screen"></figure>

        <aside className={`bg-black-custom py-8 px-5 flex items-center justify-center transition-all duration-500`}>
          <h3>Informações sobre sua rota:</h3>
        
        </aside>

      </section>
    </>
  );

};
