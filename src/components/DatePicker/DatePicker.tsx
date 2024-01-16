import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from 'shadcn/lib/utils';
import { Button } from 'shadcn/components/ui/button';
import { Calendar } from 'shadcn/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from 'shadcn/components/ui/popover';
import { useFlightSelectionStore } from '../../store';

export function DatePicker() {
    const selectedDate = useFlightSelectionStore((state) => state.selectedDate);
    const setSelectedDate = useFlightSelectionStore((state) => state.setSelectedDate);

    return (
        <div className="flex flex-col">
            <div className="my-3">Select date</div>
            <PopoverComponent selected={selectedDate} onSelect={setSelectedDate} />
        </div>
    );
}
interface PopoverComponentProps {
    selected: Date | undefined;
    onSelect: (date: Date | undefined) => void;
}
function PopoverComponent({ selected, onSelect }: PopoverComponentProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={'outline'}
                    className={cn(
                        'max-w-[180px] justify-start text-left font-normal',
                        !selected && 'text-muted-foreground'
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selected ? format(selected, 'PPP') : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={selected} onSelect={onSelect} initialFocus />
            </PopoverContent>
        </Popover>
    );
}
