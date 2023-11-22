'use client'

import { useMap } from "../hooks/useMap";
import { useApi } from "../hooks/useApi";
import { MapNav } from "./MapNav";
import { Button } from "./Button";
import { Ilustration } from "../animations/Ilustration";
import { useRenderMap } from "../hooks/useRenderMap";

export const Map = () => {
  const { buttonRef, ValidationDataOfRequest } = useMap();
  const { isLoaded } = useApi();
  const { mapRef } = useRenderMap()

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <section className="min-h-[100vh] flex flex-col gap-10 relative max-lg:-skew-y-3">
      <aside className="flex justify-center lg:py-8 xl:items-center px-3">
        <div className='w-full lg:max-w-4xl lg:px-3 lg:max-xl:m-auto '>
          <MapNav />
          <aside className="px-3 py-5 max-lg:hidden">
            <Button Title={"Traçar rota"} onClick={() => {   ValidationDataOfRequest() }} ref={buttonRef} />
          </aside>
        </div>
        <figure className="max-lg:hidden lg:flex lg:justify-end lg:items-center">
          <Ilustration person="aleff" typeAnimation="fromTheBotton" />
        </figure>
      </aside>
      <figure ref={mapRef} className="min-h-[65vh] xl:min-[75vh]:" />
      <aside className="px-3 flex flex-col items-center gap-8 lg:hidden ">
        <Button Title={"Traçar rota"} onClick={() => {   ValidationDataOfRequest() }} ref={buttonRef} />
        <Ilustration person="aleff" typeAnimation="fromTheBotton" />
      </aside>
    </section>
  );
};

