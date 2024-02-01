import { FaShareFromSquare } from 'react-icons/fa6';
import icon from '../../assets/plane-i.png';
import { ReactNode, useEffect, useState } from 'react';
import { countries } from '../../mockData';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

export function FlightInfoDetails() {
    const { t } = useTranslation();
    const flightProperties = [
        t('web.aviationTerms.registration'),
        t('web.aviationTerms.model'),
        t('web.aviationTerms.modeSCode'),
        t('web.aviationTerms.operator'),
        t('web.aviationTerms.callsign'),
        t('web.aviationTerms.flight'),
        t('web.aviationTerms.engine'),
        t('web.aviationTerms.callsign'),
        t('web.aviationTerms.country')
        // t('web.aviationTerms.velocity'),
        // t('web.aviationTerms.track'),
        // t('web.aviationTerms.geomAltitude'),
        // t('web.aviationTerms.baromAltitude'),
        // t('web.aviationTerms.verticalRate'),
        // t('web.aviationTerms.squawk'),
        // t('web.aviationTerms.source')
    ];
    const flightDummyMap = [
        'registration',
        'model',
        'serialNumber',
        'operator',
        'operatorCallsign',
        'icao24',
        'engines',
        // 'velocity',
        // 'track',
        // 'geomAltitude',
        // 'baromAltitude',
        // 'verticalRate',
        // 'squawk',
        'callSign',
        'country'
    ];

    const [aircraftData, setAircraftData] = useState(null);
    const storedFlight = localStorage.getItem('selectedFlight');
    const parsedFlight = JSON.parse(storedFlight as string);
    useEffect(() => {
        const fetchAircraftData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/aircraft/${parsedFlight.icao}`);

                const data = await response.json();

                setAircraftData(data);
            } catch (error) {
                console.error('Error fetching aircraft data:', error);
            }
        };

        fetchAircraftData();
    }, []);

    return (
        <div className="mx-auto my-[50px] flex max-h-[650px] w-[400px] flex-col items-start bg-darkBlue">
            <div className="flex w-full items-center justify-center gap-3 bg-nightWhite">
                <div className="my-2 text-xl font-bold">
                    {flightProperties[5]} {parsedFlight.icao}
                </div>
                <FaShareFromSquare size={20} style={{ cursor: 'pointer' }} />
            </div>
            <div className="flex w-full justify-around  bg-lightBlue py-2">
                <ReactCountryFlag
                    // @ts-ignore
                    countryCode={countries[aircraftData?.country as unknown]}
                    style={{
                        fontSize: '60px'
                    }}
                />
                <img
                    src={icon}
                    alt="Plane Icon"
                    style={{ width: '60px', height: '60px', transform: 'scaleX(-1)' }}
                />
            </div>
            <div className="flex">
                <div className="mx-5 mt-4">
                    {flightProperties.map((propertyName, index) => (
                        <div className="my-4 text-sm text-[#72746f]" key={index}>
                            {propertyName}
                        </div>
                    ))}
                </div>

                <div className="mx-5 mt-4">
                    {aircraftData &&
                        flightDummyMap.map((key) => {
                            const value =
                                key === 'callSign' ? parsedFlight.callsign : aircraftData[key];
                            return value ? (
                                <div className="my-4 text-sm" key={key}>
                                    {value as ReactNode}
                                </div>
                            ) : (
                                <div>N/A</div>
                            );
                        })}
                    <div>{parsedFlight.callSign}</div>
                </div>
            </div>
        </div>
    );
}
