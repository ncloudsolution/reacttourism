"use client";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const MapComponent = () => {
  const position = { lat: 53.54, lng: 10 };
  const apikey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const mapid = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID;

  console.log("apikey", apikey);
  return (
    <APIProvider apiKey={apikey}>
      <div>MapComponent</div>
      <div className="h-[80vh]">
        <Map defaultZoom={10} defaultCenter={position} mapId={mapid}>
          <AdvancedMarker position={position}></AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapComponent;
