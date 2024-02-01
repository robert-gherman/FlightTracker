import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import icon from '../../assets/plane-i.png';
import { useFlightSelectionStore } from '../../store';

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
        iconUrl: icon,
        iconSize: [20, 20]
    });
    const [flight, setFlight] = useState<Flight | undefined>();
    const selectedInputValue = useFlightSelectionStore((state) => state.selectedInputValue);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://opensky-network.org/api/tracks/?icao24=${selectedInputValue}`
                );
                const data = await response.json();
                console.log(data);
                setFlight(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="leaflet-container m-auto mx-11   my-[50px] h-[600px]  w-[990px] ">
                <MapContainer
                    center={[37.892482, 32.3416759]}
                    zoom={6}
                    scrollWheelZoom={true}
                    style={{ height: '100vh' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {flight && (
                        <Marker
                            icon={planeIcon}
                            key={flight.icao24}
                            position={[flight.path[0][0], flight.path[0][1]]}
                        >
                            <Popup>
                                <div className="popup">
                                    <span>Kodu: {flight.callsign}</span>
                                    <button
                                        onClick={() => {
                                            console.log('mapid', flight.icao24);
                                        }}
                                    >
                                        Detay
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
        </>
    );
}

export default FlightSingleMap;
