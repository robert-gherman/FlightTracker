import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import icon from '../../assets/plane-i.png';
import { useTranslation } from 'react-i18next';
import { useFlightSelectionStore } from '../../store';
import { useNavigate } from 'react-router-dom';

interface Flight {
    icao24: string;
    callsign: string;
    originCountry: string;
    timePosition: number;
    lastContact: number;
    lat: number;
    lon: number;
    baroAltitude: number;
    onGround: boolean;
    trueHeading: number;
    velocity: number;
    verticalRate: number;
    sensors: number[] | null;
    geoAltitude: number | null;
    squawk: string;
    spi: boolean;
    positionSource: number;
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
export function FlightMap() {
    return (
        <>
            <FlightMapHeader />
            <div className="leaflet-container m-auto my-20 h-[600px]  w-[990px] ">
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
                    <DraggingCords />
                </MapContainer>
            </div>
        </>
    );
}
function FlightMapHeader() {
    const { t } = useTranslation();

    return (
        <div className="m-auto my-20 w-[990px]">
            <div className="text-4xl font-bold">{t('web.title.headerTitle')}</div>
            <div className="mt-4">{t('web.title.contentTitle')}</div>
        </div>
    );
}
interface coordsType {
    lamin: number;
    lamax: number;
    lomin: number;
    lomax: number;
}
function DraggingCords() {
    const [coords, setCoords] = useState<coordsType>({
        lamin: 38.82259097617713,
        lomin: -20.258789062500004,
        lamax: 58.47072082411973,
        lomax: 22.543945312500004
    });
    const [flights, setFlights] = useState<Flight[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://opensky-network.org/api/states/all?extended=false&lamin=${coords.lamin}&lomin=${coords.lomin}&lamax=${coords.lamax}&lomax=${coords.lomax}`
                );
                const data = await response.json();

                const flightsData = data.states.map((flightData: FlightDataArray) => ({
                    icao24: flightData[0],
                    callsign: flightData[1],
                    originCountry: flightData[2],
                    timePosition: flightData[3],
                    lastContact: flightData[4],
                    lon: flightData[5],
                    lat: flightData[6],
                    baroAltitude: flightData[7],
                    onGround: flightData[8],
                    trueHeading: flightData[9],
                    velocity: flightData[10],
                    verticalRate: flightData[11],
                    sensors: flightData[12],
                    geoAltitude: flightData[13],
                    squawk: flightData[14],
                    spi: flightData[15],
                    positionSource: flightData[16]
                }));

                setFlights(flightsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [coords]);
    useMapEvents({
        dragend: (e) => {
            const {
                _northEast: { lat: lamax, lng: lomax },
                _southWest: { lat: lamin, lng: lomin }
            } = e.target.getBounds();
            setCoords({ lamax, lomax, lamin, lomin });
        }
    });
    const planeIcon = new Icon({
        iconUrl: icon,
        iconSize: [20, 20]
    });
    const navigate = useNavigate();
    const handleSearchClick = (flighticao: string) => {
        const url = `/search/${flighticao}`;
        navigate(url);
    };

    return (
        <>
            {flights.map((flight: Flight) => (
                <Marker
                    icon={planeIcon}
                    key={flight.icao24}
                    position={[flight.lat, flight.lon]}
                    eventHandlers={{
                        click: () => {
                            const selectedFlight = {
                                icao: flight.icao24,
                                callsign: flight.callsign,
                                lat: flight.lat,
                                lon: flight.lon,
                                velocity: flight.velocity,
                                geoAltitude: flight.geoAltitude,
                                baroAltitude: flight.baroAltitude,
                                squak: flight.squawk
                            };

                            localStorage.setItem('selectedFlight', JSON.stringify(selectedFlight));

                            useFlightSelectionStore.setState({
                                selectedCallsign: flight.callsign
                            });
                        }
                    }}
                >
                    <Popup>
                        <div className="popup">
                            <span>ICAO: {flight.callsign} </span>
                            <button
                                className="text-blue-500"
                                onClick={() => {
                                    useFlightSelectionStore.setState({
                                        selectedCallsign: flight.callsign
                                    });
                                    handleSearchClick(flight.icao24);
                                }}
                            >
                                View Details
                            </button>
                        </div>
                    </Popup>
                </Marker>
            ))}
            ;
        </>
    );
}
export default FlightMap;
