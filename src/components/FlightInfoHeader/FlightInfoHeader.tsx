import { FlightProgressBar } from 'components/FlightProgressBar';
import { format, parseISO, differenceInSeconds } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../../shadcn/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { use } from 'i18next';

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
    const [flightData, setFlightData] = useState<FlightData>();
    const [couldfindFlight, setCouldFindFlight] = useState(false);
    const storedFlight = localStorage.getItem('selectedFlight');
    const parsedFlight = JSON.parse(storedFlight as string);
    useEffect(() => {
        setFlightData({
            flight_date: '2019-12-12',
            flight_status: 'active',
            departure: {
                airport: 'San Francisco International',
                timezone: 'America/Los_Angeles',
                iata: 'SFO',
                icao: 'KSFO',
                terminal: '2',
                gate: 'D11',
                baggage: null,
                delay: 13,
                scheduled: '2019-12-12T04:20:00+00:00',
                estimated: '2019-12-12T04:20:00+00:00',
                actual: '2019-12-12T04:20:13+00:00',
                estimated_runway: '2019-12-12T04:20:13+00:00',
                actual_runway: '2019-12-12T04:20:13+00:00'
            },
            arrival: {
                airport: 'Dallas/Fort Worth International',
                timezone: 'America/Chicago',
                iata: 'DFW',
                icao: 'KDFW',
                terminal: 'A',
                gate: 'A22',
                baggage: null,
                delay: null,
                scheduled: '2019-12-12T04:20:00+00:00',
                estimated: '2019-12-12T04:22:00+00:00',
                actual: null,
                estimated_runway: null,
                actual_runway: null
            },
            airline: {
                name: 'American Airlines',
                iata: 'AA',
                icao: 'AAL'
            },
            flight: {
                number: '1004',
                iata: 'AA1004',
                icao: 'AAL1004',
                codeshared: null
            },
            aircraft: {
                registration: 'N160AN',
                iata: 'A321',
                icao: 'A321',
                icao24: 'A0F1BB'
            },
            live: null
        });
        setCouldFindFlight(true);
        const selectedAircraft = {
            departure: {
                icao: 'KSFO'
            },
            arrival: {
                icao: 'KDFW'
            }
        };
        const existingData = localStorage.getItem('selectedFlight');
        const existingAircraft = JSON.parse(existingData as string);
        const mergedData = { ...existingAircraft, ...selectedAircraft };
        localStorage.setItem('selectedFlight', JSON.stringify(mergedData));
    }, []);

    // useEffect(() => {
    //     const fetchFlightInfo = async () => {
    //         try {
    //             const response = await fetch(
    //                 `http://api.aviationstack.com/v1/flights?access_key=3b034e23d91e6601b6e00dbc915a0bcc&flight_icao=${parsedFlight.callsign}`
    //             );
    //             const data = await response.json();

    //             if (response.ok) {
    //                 setCouldFindFlight(true);
    //                 const selectedAircraft = {
    //                     departure: {
    //                         iata: data.data[0].departure.iata
    //                     },
    //                     arrival: {
    //                         iata: data.data[0].arrival.iata
    //                     }
    //                 };
    //                 localStorage.setItem('selectedFlight', JSON.stringify({ ...selectedAircraft }));
    //             }

    //             setFlightData(data.data[0]);
    //         } catch (error) {
    //             console.error('Error fetching airport data:', error);
    //         }
    //     };
    //     fetchFlightInfo();
    // }, []);

    return (
        <div className=" mx-11 my-[50px] max-h-[600px] w-[900px] rounded-lg border-2 border-slate-300 p-10">
            <div>
                <div className="mb-5 text-4xl">
                    {flightData?.airline.name} Airlines {flightData?.flight.number}
                </div>
            </div>
            {couldfindFlight ? (
                <>
                    <div className="flex justify-between">
                        <AirportInfo
                            iata={flightData?.departure.icao}
                            airportName={flightData?.departure.airport}
                            gate={flightData?.departure.gate}
                            time={flightData?.departure.actual}
                            isDeparture
                        />

                        <AirportInfo
                            iata={flightData?.arrival.icao}
                            airportName={flightData?.arrival.airport}
                            gate={flightData?.arrival.gate}
                            time={flightData?.arrival.estimated}
                            isDeparture={false}
                        />
                    </div>
                </>
            ) : (
                <AlertError />
            )}

            {flightData && (
                <FlightProgressBar
                    value={convertInPercentage(
                        convertTimeToSeconds(
                            flightData.departure.actual,
                            flightData.arrival.estimated
                        ),
                        getCurrentTimeInSeconds(flightData.departure.actual)
                    )}
                />
            )}
        </div>
    );
}

interface AirportInfoProps {
    iata: string | undefined;
    airportName: string | undefined;
    gate: string | undefined;
    time: string | undefined;
    isDeparture: boolean;
}
interface FlightData {
    flight_date: string;
    flight_status: string;
    departure: {
        airport: string;
        timezone: string;
        iata: string;
        actual: string;
        actual_runway: string;
        baggage: null;
        delay: number | null;
        estimated: string;
        estimated_runway: string | null;
        gate: string;

        icao: string;
        scheduled: string;
        terminal: string;
    };
    arrival: {
        airport: string;
        timezone: string;
        iata: string;
        actual: null;
        actual_runway: null;
        baggage: null;
        delay: null;
        estimated: string;
        estimated_runway: null;
        gate: string;

        icao: string;
        scheduled: string;
        terminal: string;
    };
    flight: {
        number: string;
        iata: string;
        icao: string;
        codeshared: null;
    };
    aircraft: {
        registration: string;
        iata: string;
        icao: string;
        icao24: string;
    };
    airline: {
        name: string;
        iata: string;
        icao: string;
    };
    live: null;
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
