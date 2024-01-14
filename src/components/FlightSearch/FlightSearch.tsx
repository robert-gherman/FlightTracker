import { DatePicker } from 'components/DatePicker/DatePicker';
import { FlightInput } from 'components/FlightInput';
import { Select } from 'components/Select/Select';
import { Button } from 'shadcn/components/ui/button';
import { IoSearchOutline } from 'react-icons/io5';

export default function FlightSearch() {
    return (
        <div className="max-h-[350px] max-w-[650px] rounded-lg bg-slate-900">
            <FlightSearchHeader />
            <FlightSearchForm />
            <FlightSearchButton />
        </div>
    );
}

function FlightSearchHeader() {
    return <div className="p-5 text-xl">Check Flight Status</div>;
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
    return (
        <div className="p-5">
            <Button>
                <div className="flex items-center justify-center">
                    <IoSearchOutline />
                    <div className="ml-1">Search</div>
                </div>
            </Button>
        </div>
    );
}
