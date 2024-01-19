import { FlightProgressBar } from 'components/FlightProgressBar';
import { format } from 'date-fns';

interface FlightInfo {
    flight_date: string;
    departure: {
        airport: string;
        iata: string;
        gate: string;
        time: string;
    };
    arrival: {
        airport: string;
        iata: string;
        gate: string;
        time: string;
    };
    airline: {
        name: string;
    };
}

export function FlightInfoHeader() {
    const dummyFlightInfo: FlightInfo = {
        flight_date: '2019-12-12',
        departure: {
            airport: 'San Francisco International',
            iata: 'SFO',
            gate: 'D11',
            time: '2019-12-12T04:20:13+00:00'
        },
        arrival: {
            airport: 'Dallas/Fort Worth International',
            iata: 'DFW',
            gate: 'A22',
            time: '2019-12-12T12:22:00+00:00'
        },
        airline: {
            name: 'American Airlines'
        }
    };
    return (
        <div className="mx-28 my-[50px] max-h-[600px] w-[800px] rounded-lg border-2 border-slate-300 p-10">
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
            <FlightProgressBar />
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

    return (
        <div className={`mb-2 text-lg ${isDeparture ? 'text-left' : 'text-right'}`}>
            <div>{iata}</div>
            <div className="font-bold">{airportName}</div>
            <div className="mt-4 text-sm">
                {isDeparture ? 'left' : 'arriving at'}
                <span className="font-bold">{` GATE ${gate}`}</span>
            </div>
            <div className="mt-4">{date}</div>
            <div className="mt-2 font-bold">{formattedTime}</div>
        </div>
    );
}
