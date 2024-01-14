import { useState, useEffect } from 'react';
import {
    Select as ShadcnSelect,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from 'shadcn/components/ui/select';

interface FlightData {
    airline_name: string;
}

export function Select() {
    const [airlines, setAirlines] = useState<string[]>([]);
    const [, setSelectedAirline] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch(
                //     'http://api.aviationstack.com/v1/airlines?access_key=2d9672996a3c072502b6d3f164fc3caf'
                // );
                // const data: { data: FlightData[] } = await response.json();
                // console.log(data);
                // const airlineNames = data.data.map((flight) => flight.airline_name);
                // setAirlines([...new Set(airlineNames)]);
            } catch (error) {
                console.error('Error fetching airline data', error);
            }
        };

        fetchData();
    }, []);

    const handleAirlineSelect = (value: string) => {
        setSelectedAirline(value);
    };

    return (
        <div className="flex flex-col ">
            <div className="my-3 ">Airline</div>
            <ShadcnSelectComponent airlines={airlines} handleAirlineSelect={handleAirlineSelect} />
        </div>
    );
}

interface ShadcnSelectComponentProps {
    airlines: string[];
    handleAirlineSelect: (value: string) => void;
}
function ShadcnSelectComponent({ airlines, handleAirlineSelect }: ShadcnSelectComponentProps) {
    return (
        <ShadcnSelect>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an airline" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Airlines</SelectLabel>
                    {airlines.map((airline, index) => (
                        <SelectItem
                            key={index}
                            value={airline}
                            onClick={() => handleAirlineSelect(airline)}
                        >
                            {airline}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </ShadcnSelect>
    );
}
