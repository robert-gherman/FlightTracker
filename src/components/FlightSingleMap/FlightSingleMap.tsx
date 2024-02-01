import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

import highlightPlane from '../../assets/highlight-plane.svg';
interface Flight {
    icao24: string;
    callsign: string;
    startTime: number;
    endTime: number;
    path: Array<[number, number, number, number, number, boolean]>;
}
interface FlightDataArray extends Array<unknown> {
    0: string;
    1: string;
    2: string;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: boolean;
    9: number;
    10: number;
    11: number;
    12: number[] | null;
    13: number | null;
    14: string;
    15: boolean;
    16: number;
}
export function FlightSingleMap() {
    const planeIcon = new Icon({
        iconUrl: highlightPlane, // Change icon based on highlighted state
        iconSize: [25, 25]
    });
    const [flight, setFlight] = useState<Flight | undefined>();
    const storedFlight = localStorage.getItem('selectedFlight');
    const parsedFlight = JSON.parse(storedFlight as string);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(
    //                 `https://opensky-network.org/api/tracks/?icao24=${selectedInputValue}`
    //             );
    //             const data = await response.json();
    //             console.log(data);
    //             setFlight(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);
    return (
        <>
            <div className="leaflet-container m-auto mx-11   my-[50px] h-[600px]  w-[990px] ">
                <MapContainer
                    center={[parsedFlight.lat, parsedFlight.lon]}
                    zoom={6}
                    scrollWheelZoom={true}
                    style={{ height: '100vh' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker
                        icon={planeIcon}
                        key={parsedFlight.icao24}
                        position={[parsedFlight.lat, parsedFlight.lon]}
                    ></Marker>
                </MapContainer>
            </div>
        </>
    );
}

export default FlightSingleMap;
