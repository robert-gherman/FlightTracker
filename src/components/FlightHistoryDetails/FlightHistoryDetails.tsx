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
import { useTranslation } from 'react-i18next';

export function FlightHistoryDetails() {
    historyFlightsInfo.forEach((item, i) => {
        const departureTime = new Date(item.departure.time);
        const arrivalTime = new Date(item.arrival.time);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
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
    const { t } = useTranslation();
    return (
        <div className="mx-11 my-[50px] w-[900px] ">
            <Table>
                <TableCaption>{t('web.tableHeaders.caption')}</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">{t('web.tableHeaders.date')}</TableHead>
                        <TableHead>{t('web.tableHeaders.aircraft')}</TableHead>
                        <TableHead>{t('web.tableHeaders.origin')}</TableHead>
                        <TableHead>{t('web.tableHeaders.destination')}</TableHead>
                        <TableHead>{t('web.tableHeaders.departure')}</TableHead>
                        <TableHead>{t('web.tableHeaders.arrival')}</TableHead>
                        <TableHead>{t('web.tableHeaders.duration')}</TableHead>
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
