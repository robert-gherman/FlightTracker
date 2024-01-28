import { FlightHistoryDetails } from 'components/FlightHistoryDetails';
import { FlightInfoDetails } from 'components/FlightInfoDetails';
import { FlightInfoHeader } from 'components/FlightInfoHeader';

export default function Flights() {
    return (
        <div className="flex flex-wrap">
            <div>
                <FlightInfoHeader />
                <FlightHistoryDetails />
            </div>
            <FlightInfoDetails />
        </div>
    );
}
