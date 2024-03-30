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

const MapComponent = ({ fromValue, toValue }) => {
  const position = { lat: 43.6532, lng: -79.3832 };
  const apikey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const mapid = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID;

  console.log("apikey", apikey);

  return (
    <APIProvider apiKey={apikey}>
      <div>Map direction Component</div>
      <div className="h-[80vh]">
        {fromValue && toValue ? (
          <Map defaultZoom={14} defaultCenter={position} mapId={mapid}>
            <Directions fromValue={fromValue} toValue={toValue} />
          </Map>
        ) : (
          <div>search first</div>
        )}
      </div>
    </APIProvider>
  );
};

export default MapComponent;

function Directions({ fromValue, toValue }) {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  // //const [startPosition, setStartPosition] = useState(
  //   "100 Front St, Toronto ON"
  // );
  // const [destinationPosition, setDestinationPosition] = useState(
  //   "500 Collage St, Toronto ON"
  // );

  console.log("from", fromValue);
  console.log("to", toValue);

  const [directionsService, setDirectionsService] = useState();
  const [directionsRenderer, setDirectionsRenderer] = useState();
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!map || !routesLibrary) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [map, routesLibrary]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    directionsService
      .route({
        origin: fromValue,
        destination: toValue,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer, fromValue, toValue]);

  console.log(routes);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <>
      <div className="relative">
        <div className="bg-blue-950 text-white p-3 rounded absolute right-16 top-3 w-[280px] ">
          <div>{selected.summary}</div>
          <div className="flex flex-1 my-2">
            <div>From -</div>
            <div className="w-[200px]">
              <div className="ml-2 text-[10px] ">{leg.start_address}</div>
            </div>
          </div>

          <div className="flex flex-1 my-2">
            <div>To -</div>
            <div className="w-[200px]">
              <div className="ml-2 text-[10px]">{leg.end_address}</div>
            </div>
          </div>

          <div className="flex flex-1 my-2 items-center">
            <div>Distance -</div>
            <div className="w-fit">
              <div className="ml-2 text-[14px]">{leg.distance?.text}</div>
            </div>
          </div>

          <div className="flex flex-1 my-2 items-center">
            <div>Duration -</div>
            <div className="w-fit">
              <div className="ml-2 text-[14px]">{leg.duration?.text}</div>
            </div>
          </div>
          <div className="border-t-2 border-yellow-400 my-4">
            <div className=" py-2">Alternative routes</div>
            <ul>
              {routes.map((route, index) => (
                <li
                  key={index}
                  className={` ${
                    routeIndex == index ? "text-yellow-400" : ""
                  } text-[12px] list-disc ml-3 cursor-pointer hover:text-yellow-200`}
                  onClick={() => setRouteIndex(index)}
                >
                  {route.summary}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="absolute top-[600px] left-6">
          <div className="flex items-center">
            <div className=" bg-black rounded text-white text-[14px] px-3 py-2">
              From
            </div>
            <input
              type="text"
              onChange={(e) => setStartPosition(e.target.value)}
              value={startPosition}
              className="p-2 text-[14px] outline-none w-[250px] shadow-md rounded"
            />
          </div>
        </div>

        <div className="absolute top-[600px] right-24">
          <div className="flex items-center">
            <div className=" bg-black rounded text-white text-[14px] px-3 py-2">
              To
            </div>
            <input
              type="text"
              onChange={(e) => setDestinationPosition(e.target.value)}
              value={destinationPosition}
              className="p-2 text-[14px] outline-none w-[250px] shadow-md rounded"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
