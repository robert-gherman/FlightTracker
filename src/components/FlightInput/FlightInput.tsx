import { Input } from 'shadcn/components/ui/input';
import { useFlightSelectionStore } from '../../store';
export function FlightInput() {
    return (
        <div className="flex flex-col">
            <div className="my-3 ">Flight #</div>
            <Input
                onChangeCapture={(e) =>
                    useFlightSelectionStore.setState({ selectedInputValue: e.currentTarget.value })
                }
            />
        </div>
    );
}
