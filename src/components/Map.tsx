'use client'
import { useApi } from "../hooks/useApi";
import { useRenderMap } from "../hooks/useRenderMap";

export const Map = () => {

  const { isLoaded } = useApi();
  const { mapRef } = useRenderMap()

  if (!isLoaded) {
    return (
      <figure className="min-h-[65vh] xl:min-h-[75vh] bg-gray-300 animate-pulse" />
    )
  }

  return (
    <figure ref={mapRef} className="min-h-[65vh] xl:min-h-[75vh]" />
  );
};