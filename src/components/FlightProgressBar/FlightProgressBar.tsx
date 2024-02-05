import { FaPlane } from 'react-icons/fa6';
import { Progress } from 'shadcn/components/ui/progress';
interface FlightProgressBarProps {
    value: number;
}
export function FlightProgressBar({ value }: FlightProgressBarProps) {
    return (
        <div className="relative my-5">
            <Progress value={value} />
            <div
                className=" absolute -translate-x-1 -translate-y-1/2 transform transition-all"
                style={{
                    left: `${value}%`,
                    paddingBottom: '13px'
                }}
            >
                <FaPlane size={40} />
            </div>
        </div>
    );
}
