import { Input } from 'shadcn/components/ui/input';
import { useFlightSelectionStore } from '../../store';
import { useTranslation } from 'react-i18next';

export function FlightInput() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col">
            <div className="my-3 ">{t('web.flightStatus.flight')} #</div>
            <Input
                onChangeCapture={(e) =>
                    useFlightSelectionStore.setState({ selectedInputValue: e.currentTarget.value })
                }
            />
        </div>
    );
}
