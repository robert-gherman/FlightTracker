import { FlightProgressBar } from 'components/FlightProgressBar';
import { format, parseISO, differenceInSeconds } from 'date-fns';
import { dummyFlightInfo } from '../../mockData';
import { useTranslation } from 'react-i18next';

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

    return (
        <div className=" mx-11 my-[50px] max-h-[600px] w-[900px] rounded-lg border-2 border-slate-300 p-10">
            <div>
                <div className="mb-5 text-4xl">Singapore Airlines 351</div>
            </div>
            <div className="flex justify-between">
                <AirportInfo
                    iata={dummyFlightInfo.departure.iata}
                    airportName={dummyFlightInfo.departure.airport}
                    gate={dummyFlightInfo.departure.gate}
                    time={dummyFlightInfo.departure.time}
                    isDeparture
                />
                <AirportInfo
                    iata={dummyFlightInfo.arrival.iata}
                    airportName={dummyFlightInfo.arrival.airport}
                    gate={dummyFlightInfo.arrival.gate}
                    time={dummyFlightInfo.arrival.time}
                    isDeparture={false}
                />
            </div>
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
