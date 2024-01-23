import '@immfly/flights-map';
import { useEffect, useRef } from 'react';
import { flights } from '../../mockData';
interface Flight {
    name: string;
    origin: { city: string; latitude: number; longitude: number };
    destination: { city: string; latitude: number; longitude: number };
    state: number;
    color?: string;
    hideGlowingEffect?: boolean;
}
interface refProps {
    flights: Flight[];
}
export function FlightsMap() {
    const flightsMapRef = useRef<refProps | null>(null);

    useEffect(() => {
        // Set flights data when component mounts
        if (flightsMapRef.current) {
            flightsMapRef.current.flights = flights;
        }

        // Make flights selectable
        const updatedFlights = flights.map((f) => ({ ...f, selectable: true }));

        // Set the updated flights data
        if (flightsMapRef.current) {
            flightsMapRef.current.flights = updatedFlights;
        }
    }, [flights]);

    return (
        <div className="m-auto my-20 h-[600px]  w-[990px] ">
            <flights-map ref={flightsMapRef} />
        </div>
    );
}
