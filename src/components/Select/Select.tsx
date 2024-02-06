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

export function Select() {
    const { t } = useTranslation();

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
