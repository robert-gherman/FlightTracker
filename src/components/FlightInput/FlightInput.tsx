import { Input } from 'shadcn/components/ui/input';
export function FlightInput() {
    return (
        <div className="flex flex-col">
            <div className="my-3 ">Flight #</div>
            <Input />
        </div>
    );
}
