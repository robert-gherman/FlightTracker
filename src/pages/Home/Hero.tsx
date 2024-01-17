import FlightSearch from 'components/FlightSearch/FlightSearch';

export default function Hero() {
    return (
        <div className="h-1/2 w-full ">
            <div className="justify-left flex h-full items-end pl-16">
                <FlightSearch />
            </div>
        </div>
    );
}
