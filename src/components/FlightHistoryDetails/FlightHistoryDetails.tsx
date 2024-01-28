import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from 'shadcn/components/ui/table';
import { historyFlightsInfo } from '../../mockData';

export function FlightHistoryDetails() {
    historyFlightsInfo.forEach((item, i) => {
        const departureTime = new Date(item.departure.time);
        const arrivalTime = new Date(item.arrival.time);

        if (!isNaN(departureTime) && !isNaN(arrivalTime)) {
            const formattedDepartureTime = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZoneName: 'short'
            }).format(departureTime);
            const formattedArrivalTime = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZoneName: 'short'
            }).format(arrivalTime);

            historyFlightsInfo[i].departure.time = formattedDepartureTime;
            historyFlightsInfo[i].arrival.time = formattedArrivalTime;
        } else {
            console.error(`Invalid date format at index ${i}: ${item.departure.time}`);
        }
    });

    return (
        <div className="mx-11 my-[50px] w-[900px] ">
            <Table>
                <TableCaption>A list of flight history.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead>Aircraft</TableHead>
                        <TableHead>Origin</TableHead>
                        <TableHead>Destination</TableHead>
                        <TableHead>Departure</TableHead>
                        <TableHead>Arrival</TableHead>
                        <TableHead>Duration</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {historyFlightsInfo.map((item) => {
                        return (
                            <TableRow>
                                <TableCell className="font-medium">{item.flight_data}</TableCell>
                                <TableCell>{item.aircraft}</TableCell>
                                <TableCell>
                                    {item.departure.airport_name}

                                    <span className="text-blue-500">
                                        {` (${item.departure.aiport_iata}) `}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    {item.arrival.airport_name}
                                    <span className="text-blue-500">
                                        {` (${item.arrival.aiport_iata}) `}
                                    </span>
                                </TableCell>
                                <TableCell>{item.departure.time}</TableCell>
                                <TableCell>{item.arrival.time}</TableCell>
                                <TableCell>{item.flight_duration}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}
