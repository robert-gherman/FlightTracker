import { FaShareFromSquare } from 'react-icons/fa6';

export function FlightInfoDetails() {
    return (
        <div className="mx-auto my-[50px] flex w-80 items-start justify-center bg-darkBlue">
            <div className="flex w-full items-center justify-center gap-3 bg-nightWhite">
                <div className="my-2 text-xl font-bold">Flight flightid</div>
                <FaShareFromSquare size={20} style={{ cursor: 'pointer' }} />
            </div>
        </div>
    );
}
