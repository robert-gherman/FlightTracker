import { FaShareFromSquare } from 'react-icons/fa6';
import icon from '../../assets/plane-i.png';
import { ReactNode, useEffect, useState } from 'react';
import { countries } from '../../mockData';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

export function FlightInfoDetails() {
    const { t } = useTranslation();
    const storedFlight = localStorage.getItem('selectedFlight');
    const parsedFlight = JSON.parse(storedFlight as string);
    const flightProperties = [
        t('web.aviationTerms.registration'),
        t('web.aviationTerms.model'),
        t('web.aviationTerms.modeSCode'),
        t('web.aviationTerms.operator'),
        t('web.aviationTerms.callsign'),
        t('web.aviationTerms.flight'),
        t('web.aviationTerms.engine'),
        t('web.aviationTerms.velocity'),
        t('web.aviationTerms.geomAltitude'),
        t('web.aviationTerms.baromAltitude'),
        t('web.aviationTerms.country'),
        t('web.aviationTerms.squawk')
    ];
    const flightDummyMap = [
        'registration',
        'model',
        'serialNumber',
        'operator',
        'operatorCallsign',
        'icao24',
        'engines',
        'velocity',
        'geoAltitude',
        'baroAltitude',
        'country',
        'squawk'
    ];

    const [aircraftData, setAircraftData] = useState(null);

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
                            let value;

                            switch (key) {
                                case 'callSign':
                                    value = parsedFlight.callsign;
                                    break;
                                case 'velocity':
                                    value = parsedFlight.velocity;
                                    break;
                                case 'geoAltitude':
                                    value = parsedFlight.geoAltitude;
                                    break;
                                case 'baroAltitude':
                                    value = parsedFlight.baroAltitude;
                                    break;
                                case 'squawk':
                                    value = parsedFlight.squak;
                                    break;
                                default:
                                    value = aircraftData[key];
                            }

                            return value ? (
                                <div className="my-4 text-sm" key={key}>
                                    {value as ReactNode}
                                </div>
                            ) : (
                                <div className="my-4 text-sm" key={key}>
                                    N/A
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
