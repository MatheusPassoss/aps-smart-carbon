'use client'
import { useApi } from "../hooks/useApi";
import { MapNav } from "./MapNav";
import { Ilustration } from "./animations/animated-components/Ilustration";
import { useRenderMap } from "../hooks/useRenderMap";

export const Map = () => {
 
  const { isLoaded } = useApi();
  const { mapRef } = useRenderMap()

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <section className="min-h-[100vh] flex flex-col gap-10 relative max-lg:-skew-y-3">
      <aside className="flex justify-center lg:py-8 xl:items-center px-3">
        <aside className='w-full lg:max-w-4xl lg:px-3 lg:max-xl:m-auto '>
          <MapNav />
        </aside>
        <figure className="max-lg:hidden lg:flex lg:justify-end lg:items-center">
          <Ilustration person="allef" typeAnimation="fromTheBotton" />
        </figure>
      </aside>
      <figure ref={mapRef} className="min-h-[65vh] xl:min-h-[75vh]" />
      <figure className="px-3 flex flex-col items-center gap-8 lg:hidden ">
        <Ilustration person="allef" typeAnimation="fromTheBotton" />
      </figure>
    </section>
  );
};