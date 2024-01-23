import { DatePicker } from 'components/DatePicker/DatePicker';
import { FlightInput } from 'components/FlightInput';
import { Select } from 'components/Select/Select';
import { Button } from 'shadcn/components/ui/button';
import { IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useFlightSelectionStore } from '../../store';
import { useTranslation } from 'react-i18next';

export default function FlightSearch() {
    return (
        <div className="max-h-[350px] max-w-[650px] rounded-lg bg-darkBlue">
            <FlightSearchHeader />
            <FlightSearchForm />
            <FlightSearchButton />
        </div>
    );
}

function FlightSearchHeader() {
    const { t } = useTranslation();
    return <div className="p-5 text-xl">{t('web.flightStatus.statusTitle')}</div>;
}

function FlightSearchForm() {
    return (
        <div className="flex items-center gap-7 p-11 font-bold">
            <Select />
            <FlightInput />
            <DatePicker />
        </div>
    );
}

function FlightSearchButton() {
    const navigate = useNavigate();
    const selectedAirline = useFlightSelectionStore((state) => state.selectedAirline);
    const selectedInputValue = useFlightSelectionStore((state) => state.selectedInputValue);
    console.log(selectedAirline);
    const handleSearchClick = () => {
        const url = `/search/${selectedAirline}/${selectedInputValue}`;
        navigate(url);
    };

    return (
        <div className="flex justify-end p-5">
            <Button onClick={handleSearchClick}>
                <div className="flex items-center justify-center">
                    <IoSearchOutline />
                    <div className="ml-1">Search</div>
                </div>
            </Button>
        </div>
    );
}
