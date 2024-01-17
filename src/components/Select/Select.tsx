import { useEffect } from 'react';
import {
    Select as ShadcnSelect,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from 'shadcn/components/ui/select';
import { useFlightSelectionStore } from '../../store';

interface FlightData {
    airline_name: string;
}
export function Select() {
    // const [airlines, setAirlines] = useState<string[]>([]);
    const airlines = ['USA', 'CANADA', 'PLM'];
    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const response = await fetch(
        //             'http://api.aviationstack.com/v1/airlines?access_key=2d9672996a3c072502b6d3f164fc3caf'
        //         );
        //         const data: { data: FlightData[] } = await response.json();
        //         const airlineNames = data.data.map((flight) => flight.airline_name);
        //         setAirlines([...new Set(airlineNames)]);
        //     } catch (error) {
        //         console.error('Error fetching airline data', error);
        //     }
        // };
        // fetchData();
    }, []);

    return (
        <div className="flex flex-col ">
            <div className="my-3 ">Airline</div>
            <ShadcnSelectComponent airlines={airlines} />
        </div>
    );
}

interface ShadcnSelectComponentProps {
    airlines: string[];
}

function ShadcnSelectComponent({ airlines }: ShadcnSelectComponentProps) {
    return (
        <ShadcnSelect
            onValueChange={(value) => {
                useFlightSelectionStore.getState().setSelectedAirline(value);
            }}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an airline" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Airlines</SelectLabel>

                    {airlines.map((airline, index) => (
                        <SelectItem key={index} value={airline}>
                            {airline}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </ShadcnSelect>
    );
}
