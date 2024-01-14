import FlightSearch from 'components/FlightSearch/FlightSearch';

import ThemeButton from 'components/ThemeButton/ThemeButton';

export default function Hero() {
    return (
        <div className="h-1/2 w-full ">
            <ThemeButton />
            <div className="justify-left flex h-full items-end pl-16">
                <FlightSearch />
            </div>
        </div>
    );
}
