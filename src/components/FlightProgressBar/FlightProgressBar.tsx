import { FaPlane } from 'react-icons/fa6';
import { Progress } from 'shadcn/components/ui/progress';

export function FlightProgressBar() {
    return (
        <div>
            <Progress value={30} />
            <div
                className=" absolute -translate-x-24 -translate-y-1/2 transform transition-all"
                style={{
                    left: `${30 || 0}%`,
                    paddingBottom: '13px'
                }}
            >
                <FaPlane size={50} />
            </div>
        </div>
    );
}
