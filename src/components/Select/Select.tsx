import { useEffect, useState } from 'react';
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
import { useTranslation } from 'react-i18next';
import { airlines } from '../../mockData'; // Import Axios

interface AirportData {
    icao: string;
    iata: string;
    name: string;
    city: string | null;
    type: string;
    position: {
        longitude: number;
        latitude: number;
        altitude: number;
        reasonable: boolean;
    };
}

export function Select() {
    // const [airlines, setAirlines] = useState<string[]>([]);
    const { t } = useTranslation();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(
    //                 'http://opensky-network.org/api/airports/region?lamin=38.89103282648846&lamax=58.51665179936381&lomin=-23.642578125000004&lomax=28.652343750000004&type=large_airport',
    //                 {
    //                     headers: {
    //                         'Access-Control-Allow-Origin': '*'
    //                         // Add other necessary headers here
    //                     }
    //                 }
    //             );
    //             const data: AirportData[] = response.data;
    //             console.log(data);
    //             // const airlineNames = data.map((airport) => airport.name);
    //             // setAirlines([...new Set(airlineNames)]);
    //         } catch (error) {
    //             console.error('Error fetching airport data', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    return (
        <div className="flex flex-col ">
            <div className="my-3 ">{t('web.flightStatus.airline')}</div>
            <ShadcnSelectComponent airlines={airlines} />
        </div>
    );
}

interface ShadcnSelectComponentProps {
    airlines: {
        icao: string;
        iata: string;
        name: string;
        city: null;
        type: string;
        position: {
            longitude: number;
            latitude: number;
            altitude: number;
            reasonable: boolean;
        };
    }[];
}

function ShadcnSelectComponent({ airlines }: ShadcnSelectComponentProps) {
    const { t } = useTranslation();
    return (
        <ShadcnSelect
            onValueChange={(value) => {
                useFlightSelectionStore.getState().setSelectedAirline(value);
            }}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('web.flightStatus.pickAirline')} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Airlines</SelectLabel>

                    {airlines.map((airline, index) => (
                        <SelectItem key={index} value={airline.name}>
                            {airline.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </ShadcnSelect>
    );
}
