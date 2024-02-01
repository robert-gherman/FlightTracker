import { create } from 'zustand';

type FlightSelectionStore = {
    selectedAirline: string;
    selectedInputValue: string;
    selectedDate: Date | undefined;
    setSelectedDate: (selectedDate: Date | undefined) => void;
    setSelectedAirline: (selectedAirline: string) => void;
    selectedCallsign: string;
    setSelectedCallsign: (selectedCallsign: string) => void;
};

export const useFlightSelectionStore = create<FlightSelectionStore>((set) => ({
    selectedAirline: '',
    selectedInputValue: '',
    selectedCallsign: '',
    selectedDate: undefined,
    setSelectedDate: (date: Date | undefined) => set({ selectedDate: date }),
    setSelectedAirline: (selectedAirline: string) => set({ selectedAirline: selectedAirline }),
    setSelectedCallsign: (selectedCallsign: string) => set({ selectedCallsign: selectedCallsign })
}));
