import { FlightHistoryDetails } from 'components/FlightHistoryDetails';
import { FlightInfoHeader } from 'components/FlightInfoHeader';

export default function Flights() {
    return (
        <div>
            <FlightInfoHeader />
            <FlightHistoryDetails />
        </div>
    );
}
