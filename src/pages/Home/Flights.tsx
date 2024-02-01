import { FlightHistoryDetails } from 'components/FlightHistoryDetails';
import { FlightInfoDetails } from 'components/FlightInfoDetails';
import { FlightInfoHeader } from 'components/FlightInfoHeader';
import { FlightSingleMap } from 'components/FlightSingleMap';

export default function Flights() {
    return (
        <div className="flex flex-wrap">
            <div>
                <FlightInfoHeader />
                {/* <FlightSingleMap /> */}
                <FlightHistoryDetails />
            </div>
            <FlightInfoDetails />
        </div>
    );
}
