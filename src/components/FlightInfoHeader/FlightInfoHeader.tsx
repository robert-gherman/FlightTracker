import { FlightProgressBar } from 'components/FlightProgressBar';
import { format, parseISO, differenceInSeconds } from 'date-fns';
import { dummyFlightInfo } from '../../mockData';
import { useTranslation } from 'react-i18next';
import { useFlightSelectionStore } from '../../store';
import { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../../shadcn/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

function convertTimeToSeconds(departureTime: string, arrivalTime: string): number {
    const parsedArrivalTime = parseISO(arrivalTime);
    const parsedDepartureTime = parseISO(departureTime);
    const differenceArrivalDeparture = differenceInSeconds(parsedArrivalTime, parsedDepartureTime);
    return differenceArrivalDeparture;
}
function getCurrentTimeInSeconds(departureTime: string): number {
    const currentTime = new Date();
    const parsedDepartureTime = parseISO(departureTime);
    const differenceDepartureCurrent = differenceInSeconds(currentTime, parsedDepartureTime);
    return differenceDepartureCurrent;
}
function convertInPercentage(totalTime: number, currentTime: number) {
    if (totalTime === 0) return 0;
    const percentage = (currentTime * 100) / totalTime;
    if (percentage > 100) return 100;
    return percentage;
}

export function FlightInfoHeader() {
    const totalTimeInSeconds = convertTimeToSeconds(
        dummyFlightInfo.departure.time,
        dummyFlightInfo.arrival.time
    );

    const currentTimeInSeconds = getCurrentTimeInSeconds(dummyFlightInfo.departure.time);

    const progressPercentage = convertInPercentage(totalTimeInSeconds, currentTimeInSeconds);

    const selectedCallsign = useFlightSelectionStore((state) => state.selectedCallsign);
    const [routeData, setRouteData] = useState<RouteData>();
    const [departureAirport, setDepartureAirport] = useState();
    const [arrivalAirport, setArrivalAirport] = useState();
    const [couldfindFlight, setCouldFindFlight] = useState(true);
    useEffect(() => {
        const fetchAircraftData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/routes/${selectedCallsign}`);

                if (!response.ok) {
                    setCouldFindFlight(false);
                    return;
                }

                const data = await response.json();

                setRouteData(data);
            } catch (error) {
                console.error('Error fetching aircraft data:', error);
            }
        };

        fetchAircraftData();
    }, [selectedCallsign]);
    useEffect(() => {
        const fetchDepartureAirportData = async () => {
            if (routeData) {
                try {
                    const response = await fetch(
                        `http://localhost:3001/airports/${routeData?.route[0]}`
                    );

                    const data = await response.json();

                    setDepartureAirport(data);
                } catch (error) {
                    console.error('Error fetching airport data:', error);
                }
            }
        };

        const fetchArrivalAirportData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3001/airports/${routeData?.route[1]}`
                );

                const data = await response.json();

                setArrivalAirport(data);
            } catch (error) {
                console.error('Error fetching aircraft data:', error);
            }
        };

        fetchDepartureAirportData();
        fetchArrivalAirportData();
    }, [routeData]);

    return (
        <div className=" mx-11 my-[50px] max-h-[600px] w-[900px] rounded-lg border-2 border-slate-300 p-10">
            <div>
                <div className="mb-5 text-4xl">Singapore Airlines 351</div>
            </div>
            {couldfindFlight ? (
                <>
                    <div className="flex justify-between">
                        {departureAirport && (
                            <AirportInfo
                                iata={departureAirport.icao}
                                airportName={departureAirport.name}
                                gate={dummyFlightInfo.departure.gate}
                                time={dummyFlightInfo.departure.time}
                                isDeparture
                            />
                        )}
                        {arrivalAirport && (
                            <AirportInfo
                                iata={arrivalAirport.icao}
                                airportName={arrivalAirport.name}
                                gate={dummyFlightInfo.arrival.gate}
                                time={dummyFlightInfo.arrival.time}
                                isDeparture={false}
                            />
                        )}
                    </div>
                </>
            ) : (
                <AlertError />
            )}

            <FlightProgressBar value={progressPercentage} />
        </div>
    );
}

interface AirportInfoProps {
    iata: string;
    airportName: string;
    gate: string;
    time: string;
    isDeparture: boolean;
}
interface RouteData {
    callsign: string;
    flightNumber: number;
    operatorIata: string;
    route: Array<string>;
    updateTime: number;
}
function AlertError() {
    return (
        <div className="mx-11">
            <Alert variant="destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Could not find the flight invalid ICAO code.</AlertDescription>
            </Alert>
        </div>
    );
}
function AirportInfo({ iata, airportName, gate, time, isDeparture }: AirportInfoProps) {
    const formatDateTime = (dateTime: string): { date: string; time: string } => {
        const parsedDate = new Date(dateTime);
        const formattedDate = format(parsedDate, 'EEEE d-MMM-yyyy');
        const formattedTime = format(parsedDate, 'hh:mma OOOO');
        return { date: formattedDate, time: formattedTime };
    };

    const { date, time: formattedTime } = formatDateTime(time);
    const { t } = useTranslation();

    return (
        <div className={`mb-2 text-lg ${isDeparture ? 'text-left' : 'text-right'}`}>
            <div>{iata}</div>
            <div className="font-bold">{airportName}</div>
            <div className="mt-4 text-sm">
                {isDeparture ? `${t('web.flightInfo.left')}` : `${t('web.flightInfo.arriving')}`}
                <span className="font-bold">{` GATE ${gate}`}</span>
            </div>
            <div className="mt-4">{date}</div>
            <div className="mt-2 font-bold">{formattedTime}</div>
        </div>
    );
}
