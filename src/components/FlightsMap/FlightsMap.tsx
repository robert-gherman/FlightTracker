import '@immfly/flights-map';
import { useEffect, useRef } from 'react';
import { flights } from '../../mockData';
import { useTranslation } from 'react-i18next';
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
        if (flightsMapRef.current) {
            flightsMapRef.current.flights = flights;
        }

        const updatedFlights = flights.map((f) => ({ ...f, selectable: true }));

        if (flightsMapRef.current) {
            flightsMapRef.current.flights = updatedFlights;
        }
    }, [flights]);

    return (
        <>
            <FlightMapHeader />
            <div className="m-auto my-20 h-[600px]  w-[990px]">
                <flights-map ref={flightsMapRef} />
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
