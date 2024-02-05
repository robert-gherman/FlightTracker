import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Polyline } from 'react-leaflet';
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
        iconUrl: highlightPlane,
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
    const departureAirport = {
        name: 'Departure Airport',
        position: [37.7749, -122.4194] // Dummy values for latitude and longitude
    };

    const arrivalAirport = {
        name: 'Arrival Airport',
        position: [44.0522, 55.2437] // Dummy values for latitude and longitude
    };
    const calculateCurvePoints = (start: number[], end: [number, number], steps: number) => {
        const [x0, y0] = start;
        const [x1, y1] = end;
        const points: [number, number][] = [];

        // Mid-point of the line
        const mpx = (x1 + x0) * 0.5;
        const mpy = (y1 + y0) * 0.5;

        // Angle of perpendicular to the line
        const theta = Math.atan2(y1 - y0, x1 - x0) - Math.PI / 2;

        // Distance of control point from mid-point of the line
        const offset = 30;

        // Location of control point
        const c1x = mpx + offset * Math.cos(theta);
        const c1y = mpy + offset * Math.sin(theta);

        // Construct the command to draw a quadratic curve
        const curve = `M 100  30 Q 20 40, 40 80, 50 60`;

        return curve;
    };

    const departureToFlightCurve = calculateCurvePoints(
        departureAirport.position,
        [parsedFlight.lat, parsedFlight.lon],
        20
    );
    return (
        <>
            <div className="leaflet-container m-auto mx-11 my-[50px] h-[600px] w-[990px] ">
                <MapContainer
                    center={[parsedFlight.lat, parsedFlight.lon]}
                    zoom={6}
                    scrollWheelZoom={true}
                    style={{ height: '100vh', position: 'relative', zIndex: 0 }}
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
                    <Marker position={[departureAirport.position[0], departureAirport.position[1]]}>
                        <Popup>{departureAirport.name}</Popup>
                    </Marker>
                    <Marker position={[arrivalAirport.position[0], arrivalAirport.position[1]]}>
                        <Popup>{arrivalAirport.name}</Popup>
                    </Marker>
                    <div style={{ zIndex: 1 }}>
                        <svg width="100%" height="100%">
                            <path
                                d={departureToFlightCurve}
                                stroke="#5a5afe"
                                fill="none"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    {/* <Polyline
                        positions={[
                            [departureAirport.position[0], departureAirport.position[1]],
                            [parsedFlight.lat, parsedFlight.lon]
                        ]}
                        color="#5a5afe"
                    />

                    <Polyline
                        positions={[
                            [arrivalAirport.position[0], arrivalAirport.position[1]],
                            [parsedFlight.lat, parsedFlight.lon]
                        ]}
                        color="yellow"
                        dashArray="5, 5"
                    /> */}
                </MapContainer>
            </div>
        </>
    );
}

export default FlightSingleMap;
