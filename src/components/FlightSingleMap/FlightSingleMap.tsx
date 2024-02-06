import { forwardRef, useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import 'leaflet-rotatedmarker';
import highlightPlane from '../../assets/highlight-plane.svg';

interface Flight {
    icao: string;
    iata: string;
    name: string;
    city: string | null;
    type: string | null;
    position: {
        longitude: number;
        latitude: number;
        altitude: number;
        reasonable: boolean;
    };
    continent: string;
    country: string;
    region: string;
    municipality: string;
    gpsCode: string;
    homepage: string;
    wikipedia: string;
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

const RotatedMarker = forwardRef(({ children, ...props }, forwardRef) => {
    const markerRef = useRef<any>();

    const { rotationAngle, rotationOrigin } = props;
    useEffect(() => {
        const marker = markerRef.current;
        if (marker) {
            marker.setRotationAngle(rotationAngle);
            marker.setRotationOrigin(rotationOrigin);
        }
    }, [rotationAngle, rotationOrigin]);

    return (
        <Marker
            ref={(ref) => {
                markerRef.current = ref;
                if (forwardRef) {
                    forwardRef.current = ref;
                }
            }}
            {...props}
        >
            {children}
        </Marker>
    );
});
export function FlightSingleMap() {
    const planeIcon = new Icon({
        iconUrl: highlightPlane,
        iconSize: [25, 25]
    });
    const [flightDeparture, setFlightDeparture] = useState<Flight | undefined>();
    const [flightArrival, setFlightArrival] = useState<Flight | undefined>();
    const storedFlight = localStorage.getItem('selectedFlight');
    const parsedFlight = JSON.parse(storedFlight as string);
    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchDataDeparture = async () => {
            try {
                if (parsedFlight.departure) {
                    const response = await fetch(
                        `http://localhost:3001/airports/${parsedFlight.departure.icao}`
                    );
                    const data = await response.json();
                    setFlightDeparture(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const fetchDataArrival = async () => {
            try {
                if (parsedFlight.arrival) {
                    const response = await fetch(
                        `http://localhost:3001/airports/${parsedFlight.arrival.icao}`
                    );
                    const data = await response.json();
                    setFlightArrival(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDataDeparture();
        fetchDataArrival();
        setIsLoading(true);
    }, [isloading]);

    function toRadians(degrees: number) {
        return (degrees * Math.PI) / 180;
    }

    function bearing(
        startLat: number,
        startLng: number,
        destLat: number | undefined,
        destLng: number | undefined
    ) {
        const start_latitude = toRadians(startLat);
        const start_longitude = toRadians(startLng);

        const stop_latitude = toRadians(destLat as number);
        const stop_longitude = toRadians(destLng as number);

        const y = Math.sin(stop_longitude - start_longitude) * Math.cos(stop_latitude);
        const x =
            Math.cos(start_latitude) * Math.sin(stop_latitude) -
            Math.sin(start_latitude) *
                Math.cos(stop_latitude) *
                Math.cos(stop_longitude - start_longitude);
        const brng = (Math.atan2(y, x) * 180) / Math.PI - 50;

        return brng;
    }
    const departureToFlightBearing = bearing(
        parsedFlight.lat,
        parsedFlight.lon,
        flightArrival?.position.latitude,
        flightArrival?.position.longitude
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
                    {flightDeparture && flightArrival && isloading && (
                        <>
                            <RotatedMarker
                                position={[parsedFlight.lat, parsedFlight.lon]}
                                icon={planeIcon}
                                rotationAngle={departureToFlightBearing}
                                rotationOrigin="center"
                            />

                            <Marker
                                position={[
                                    flightDeparture.position.latitude,
                                    flightDeparture.position.longitude
                                ]}
                            >
                                <Popup>{flightDeparture.name}</Popup>
                            </Marker>
                            <Marker
                                position={[
                                    flightArrival.position.latitude,
                                    flightArrival.position.longitude
                                ]}
                            >
                                <Popup>{flightArrival?.name}</Popup>
                            </Marker>

                            <Polyline
                                positions={[
                                    [
                                        flightDeparture?.position.latitude,
                                        flightDeparture?.position.longitude
                                    ],
                                    [parsedFlight.lat, parsedFlight.lon]
                                ]}
                                color="#5a5afe"
                            />

                            <Polyline
                                positions={[
                                    [
                                        flightArrival?.position.latitude,
                                        flightArrival?.position.longitude
                                    ],
                                    [parsedFlight.lat, parsedFlight.lon]
                                ]}
                                color="yellow"
                                dashArray="5, 5"
                            />
                        </>
                    )}
                </MapContainer>
            </div>
        </>
    );
}

export default FlightSingleMap;
