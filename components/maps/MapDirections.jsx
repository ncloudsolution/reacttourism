"use client";
import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";

const MapComponent = () => {
  const position = { lat: 43.6532, lng: -79.3832 };
  const apikey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const mapid = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID;

  console.log("apikey", apikey);
  return (
    <APIProvider apiKey={apikey}>
      <div>Map direction Component</div>
      <div className="h-[80vh]">
        <Map zoom={14} center={position} mapId={mapid}>
          <Directions />
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapComponent;

function Directions() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState();
  const [directionsRenderer, setDirectionsRenderer] = useState();
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    if (!map || !routesLibrary) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [map, routesLibrary]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    directionsService
      .route({
        origin: "100 Front St, Toronto ON",
        destination: "500 Collage St, Toronto ON",
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer]);

  console.log(routes);

  return null;
}
