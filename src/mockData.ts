export const dummyFlightInfo = {
    flight_date: '2019-12-12',
    departure: {
        airport: 'San Francisco International',
        iata: 'SFO',
        gate: 'D11',
        time: '2024-01-19T04:20:13+00:00'
    },
    arrival: {
        airport: 'Dallas/Fort Worth International',
        iata: 'DFW',
        gate: 'A22',
        time: '2024-01-19T23:22:00+03:00'
    },
    airline: {
        name: 'American Airlines'
    }
};

export const historyFlightsInfo = [
    {
        flight_data: '2019-12-12',
        departure: {
            time: '2024-01-19T04:20:13+00:00',
            airport_name: 'London Gatwick',
            aiport_iata: 'FTO'
        },
        arrival: {
            time: '2024-01-19T23:22:00+03:00',
            airport_name: 'Shanghai Pudong Int',
            aiport_iata: 'CKG'
        },
        aircraft: 'B789',
        flight_duration: '9h59m'
    },
    {
        flight_data: '2019-12-13',
        departure: {
            time: '2024-01-19T04:20:13+00:00',
            airport_name: 'London Gatwick',
            aiport_iata: 'FTO'
        },
        arrival: {
            time: '2024-01-19T23:22:00+03:00',
            airport_name: 'Shanghai Pudong Int',
            aiport_iata: 'CKG'
        },
        aircraft: 'B789',
        flight_duration: '10h59m'
    },
    {
        flight_data: '2019-12-14',
        departure: {
            time: '2024-01-19T04:20:13+00:00',
            airport_name: 'London Gatwick',
            aiport_iata: 'FTO'
        },
        arrival: {
            time: '2024-01-19T23:22:00+03:00',
            airport_name: 'Shanghai Pudong Int',
            aiport_iata: 'CKG'
        },
        aircraft: 'B789',
        flight_duration: '10h24m'
    }
];
export const flights = [
    {
        name: 'V131',
        origin: { city: 'Paris', latitude: 48.8567, longitude: 2.351 },
        destination: { city: 'Toronto', latitude: 43.8163, longitude: -79.4287 },
        state: 0
    },
    {
        name: 'HJ83L',
        origin: {
            city: 'Ear Falls',
            latitude: 50.59182174718828,
            longitude: -91.0098349022146
        },
        destination: {
            city: 'El Retorno',
            latitude: 2.2321954407806093,
            longitude: -72.0254599022146
        },
        state: 1,
        color: '#F60000'
    },
    {
        name: 'WPODW',
        origin: { city: 'Barcelona', latitude: 41.3850639, longitude: 2.1734034999999494 },
        destination: { city: 'Medellin', latitude: 6.244203, longitude: -75.58121189999997 },
        state: 2
    },
    {
        name: 'L91KD',
        origin: {
            city: 'Magadan Oblast',
            latitude: 65.53348382646833,
            longitude: 155.57467375530678
        },
        destination: {
            city: 'Yukon-Koyukuk',
            latitude: 58.097365492959604,
            longitude: -117.80242816948964
        },
        state: 1,
        color: '#F60000'
    },
    {
        name: 'TY63D',
        origin: {
            city: 'Sarysu District',
            latitude: 45.33227998372203,
            longitude: 70.83132220892696
        },
        destination: {
            city: 'Tamanrasset Province',
            latitude: 24.840857099259473,
            longitude: 6.319603458926963
        },
        state: 2,
        color: '#F60000'
    },
    {
        name: 'SAT12',
        origin: {
            city: 'Phillipstown',
            latitude: -30.15056667657248,
            longitude: 24.073509708926963
        },
        destination: {
            city: 'Manandriana',
            latitude: -20.600097354605126,
            longitude: 46.94567912038565
        },
        state: 2,
        color: '#F60000'
    },
    {
        name: 'V1LD9',
        origin: {
            city: 'Nueve de Julio Department',
            latitude: -40.68747944944957,
            longitude: -67.48791462961435
        },
        destination: {
            city: 'Altamira',
            latitude: -9.467832305096195,
            longitude: -54.25036825556026
        },
        state: 1,
        hideGlowingEffect: true,
        color: '#003580'
    },
    {
        name: 'B91L',
        origin: { city: 'Birao', latitude: 9.515235805273386, longitude: 21.032549879116686 },
        destination: {
            city: 'Unnamed Road',
            latitude: 41.73585185436654,
            longitude: -110.66837859089878
        },
        state: 2,
        hideGlowingEffect: true,
        color: '#003580'
    },
    {
        name: 'U1827',
        origin: {
            city: "Route d'Epinac",
            latitude: 46.94781360614373,
            longitude: 21.032549879116686
        },
        destination: {
            city: 'Oppenberg',
            latitude: 47.4256605705743,
            longitude: 14.29217971951573
        },
        state: 0,
        hideGlowingEffect: true,
        color: '#003580'
    },
    {
        name: 'LUI192',
        origin: { city: 'Madrid', latitude: 40.4167754, longitude: -3.7037901999999576 },
        destination: {
            city: 'Champ de la Graule',
            latitude: 46.39289732540651,
            longitude: 2.1904644799112702
        },
        state: 1,
        hideGlowingEffect: true,
        color: '#FDC43E'
    },
    {
        name: 'SP45',
        origin: { city: 'SP45', latitude: 42.420631925375595, longitude: 12.754780952269016 },
        destination: {
            city: 'Unnamed Road',
            latitude: 39.78291681969057,
            longitude: 21.806853049909705
        },
        state: 2,
        color: '#FDC43E'
    },
    {
        name: 'Y1I2O',
        origin: {
            city: 'Yazıhan',
            latitude: 38.578564083525194,
            longitude: 38.344428375658254
        },
        destination: {
            city: 'Belarus',
            latitude: 53.06435476257335,
            longitude: 28.385817868123354
        },
        state: 0,
        color: '#FDC43E'
    },
    {
        name: 'P182U7',
        origin: { city: 'Road', latitude: 58.074997013530684, longitude: 50.226638180623354 },
        destination: {
            city: 'Belarus',
            latitude: 56.31351677529075,
            longitude: 36.559645993123354
        },
        state: 1,
        color: '#FDC43E'
    },
    {
        name: '19LADA',
        origin: {
            city: 'Sakha Republic',
            latitude: 67.83869854853688,
            longitude: 124.54257362977944
        },
        destination: {
            city: 'Birdsville',
            latitude: -25.596716743868345,
            longitude: 138.42929237977944
        },
        state: 0,
        color: '#824696'
    },
    {
        name: 'N39',
        origin: { city: 'N39', latitude: -7.138793513804092, longitude: 22.37131768752556 },
        destination: {
            city: 'Zadoi',
            latitude: 32.74647437694143,
            longitude: 94.81066352656649
        },
        state: 1,
        hideGlowingEffect: true,
        color: '#824696'
    },
    {
        name: 'DN67',
        origin: { city: 'Camino', latitude: 40.092134402692594, longitude: -4.505496806287283 },
        destination: {
            city: 'DN67',
            latitude: 44.812964600642715,
            longitude: 22.97834083428188
        },
        state: 2,
        color: '#824696'
    },
    {
        name: 'BJ192',
        origin: { city: 'Ukraine', latitude: 48.93681660670886, longitude: 31.035672342619364 },
        destination: {
            city: 'Bullock',
            latitude: 52.49604984500964,
            longitude: -0.3412807823806361
        },
        state: 0,
        color: '#DA291C'
    },
    {
        name: 'AM19',
        origin: {
            city: 'Canet lo Roig',
            latitude: 39.54864813244204,
            longitude: -1.0602180281757683
        },
        destination: { city: 'Amsterdam', latitude: 52.3679843, longitude: 4.903561399999944 },
        state: 1,
        color: '#DA291C'
    },
    {
        name: 'DC77',
        origin: { city: 'DC77', latitude: 45.925746531939645, longitude: 27.437269890501284 },
        destination: {
            city: 'Sverdlovskaya',
            latitude: 58.50663668260994,
            longitude: 62.12747601646129
        },
        state: 2,
        color: '#DA291C'
    },
    {
        name: 'SZ1D',
        origin: { city: 'Szuć', latitude: 53.502781611608455, longitude: 20.730991641461287 },
        destination: {
            city: 'Storuman',
            latitude: 64.833677697428,
            longitude: 17.316869897704464
        },
        state: 0,
        color: '#DA291C'
    },
    {
        name: 'WPODW',
        origin: { city: 'Barcelona', latitude: 41.3850639, longitude: 2.1734034999999494 },
        destination: { city: 'Medellin', latitude: 6.244203, longitude: -75.58121189999997 },
        state: 2,
        color: '#DA291C'
    }
];

export const airlines = [
    {
        icao: 'BKPR',
        iata: 'PRN',
        name: 'Priština International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 21.035801,
            latitude: 42.5728,
            altitude: 545.2872,
            reasonable: true
        }
    },
    {
        icao: 'EBBR',
        iata: 'BRU',
        name: 'Brussels Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 4.48443984985,
            latitude: 50.901401519800004,
            altitude: 56.083200000000005,
            reasonable: true
        }
    },
    {
        icao: 'EBCI',
        iata: 'CRL',
        name: 'Brussels South Charleroi Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 4.45382,
            latitude: 50.459202,
            altitude: 187.1472,
            reasonable: true
        }
    },
    {
        icao: 'EBLG',
        iata: 'LGG',
        name: 'Liège Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 5.443220138549805,
            latitude: 50.63740158081055,
            altitude: 200.8632,
            reasonable: true
        }
    },
    {
        icao: 'EDDB',
        iata: 'BER',
        name: 'Berlin Brandenburg Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 13.5225,
            latitude: 52.380001,
            altitude: 47.8536,
            reasonable: true
        }
    },
    {
        icao: 'EDDC',
        iata: 'DRS',
        name: 'Dresden Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 13.767200469970703,
            latitude: 51.1328010559082,
            altitude: 230.12400000000002,
            reasonable: true
        }
    },
    {
        icao: 'EDDF',
        iata: 'FRA',
        name: 'Frankfurt am Main Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 8.570556,
            latitude: 50.033333,
            altitude: 110.94720000000001,
            reasonable: true
        }
    },
    {
        icao: 'EDDG',
        iata: 'FMO',
        name: 'Münster Osnabrück Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 7.68483018875,
            latitude: 52.134601593,
            altitude: 48.768,
            reasonable: true
        }
    },
    {
        icao: 'EDDH',
        iata: 'HAM',
        name: 'Hamburg Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 9.9882297515869,
            latitude: 53.630401611328,
            altitude: 16.154400000000003,
            reasonable: true
        }
    },
    {
        icao: 'EDDK',
        iata: 'CGN',
        name: 'Cologne Bonn Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 7.1427397728,
            latitude: 50.8658981323,
            altitude: 92.0496,
            reasonable: true
        }
    },
    {
        icao: 'EDDL',
        iata: 'DUS',
        name: 'Düsseldorf Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 6.76678,
            latitude: 51.289501,
            altitude: 44.805600000000005,
            reasonable: true
        }
    },
    {
        icao: 'EDDM',
        iata: 'MUC',
        name: 'Munich Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 11.7861,
            latitude: 48.353802,
            altitude: 453.23760000000004,
            reasonable: true
        }
    },
    {
        icao: 'EDDN',
        iata: 'NUE',
        name: 'Nuremberg Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 11.078056,
            latitude: 49.498699,
            altitude: 318.8208,
            reasonable: true
        }
    },
    {
        icao: 'EDDP',
        iata: 'LEJ',
        name: 'Leipzig/Halle Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 12.236389,
            latitude: 51.423889,
            altitude: 141.732,
            reasonable: true
        }
    },
    {
        icao: 'EDDS',
        iata: 'STR',
        name: 'Stuttgart Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 9.22196006775,
            latitude: 48.689899444599995,
            altitude: 388.9248,
            reasonable: true
        }
    },
    {
        icao: 'EDDT',
        iata: 'TXL',
        name: 'Berlin-Tegel Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 13.2877,
            latitude: 52.5597,
            altitude: 37.1856,
            reasonable: true
        }
    },
    {
        icao: 'EDDV',
        iata: 'HAJ',
        name: 'Hannover Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 9.685079574580001,
            latitude: 52.461101532,
            altitude: 55.778400000000005,
            reasonable: true
        }
    },
    {
        icao: 'EDDW',
        iata: 'BRE',
        name: 'Bremen Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 8.78666973114,
            latitude: 53.0475006104,
            altitude: 4.2672,
            reasonable: true
        }
    },
    {
        icao: 'EDLW',
        iata: 'DTM',
        name: 'Dortmund Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 7.61223983765,
            latitude: 51.51829910279999,
            altitude: 129.54000000000002,
            reasonable: true
        }
    },
    {
        icao: 'EDSB',
        iata: 'FKB',
        name: 'Karlsruhe Baden-Baden Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 8.08049964905,
            latitude: 48.7793998718,
            altitude: 124.3584,
            reasonable: true
        }
    },
    {
        icao: 'EGAA',
        iata: 'BFS',
        name: 'Belfast International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -6.2158298492399995,
            latitude: 54.6575012207,
            altitude: 81.6864,
            reasonable: true
        }
    },
    {
        icao: 'EGAC',
        iata: 'BHD',
        name: 'George Best Belfast City Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -5.872499942779541,
            latitude: 54.618099212646484,
            altitude: 4.572,
            reasonable: true
        }
    },
    {
        icao: 'EGBB',
        iata: 'BHX',
        name: 'Birmingham International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -1.74802994728,
            latitude: 52.453899383499994,
            altitude: 99.6696,
            reasonable: true
        }
    },
    {
        icao: 'EGCC',
        iata: 'MAN',
        name: 'Manchester Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -2.2749500274658203,
            latitude: 53.35369873046875,
            altitude: 78.3336,
            reasonable: true
        }
    },
    {
        icao: 'EGCN',
        iata: 'DSA',
        name: 'Robin Hood Doncaster Sheffield Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -1.01065635681,
            latitude: 53.4805378105,
            altitude: 16.764,
            reasonable: true
        }
    },
    {
        icao: 'EGFF',
        iata: 'CWL',
        name: 'Cardiff International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -3.343329906463623,
            latitude: 51.39670181274414,
            altitude: 67.056,
            reasonable: true
        }
    },
    {
        icao: 'EGGD',
        iata: 'BRS',
        name: 'Bristol Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -2.71909,
            latitude: 51.382702,
            altitude: 189.5856,
            reasonable: true
        }
    },
    {
        icao: 'EGGP',
        iata: 'LPL',
        name: 'Liverpool John Lennon Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -2.849720001220703,
            latitude: 53.33359909057617,
            altitude: 24.384,
            reasonable: true
        }
    },
    {
        icao: 'EGGW',
        iata: 'LTN',
        name: 'London Luton Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -0.36833301186561584,
            latitude: 51.874698638916016,
            altitude: 160.3248,
            reasonable: true
        }
    },
    {
        icao: 'EGHH',
        iata: 'BOH',
        name: 'Bournemouth Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -1.8424999713897705,
            latitude: 50.779998779296875,
            altitude: 11.5824,
            reasonable: true
        }
    },
    {
        icao: 'EGHI',
        iata: 'SOU',
        name: 'Southampton Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -1.3567999601364136,
            latitude: 50.95029830932617,
            altitude: 13.411200000000001,
            reasonable: true
        }
    },
    {
        icao: 'EGKK',
        iata: 'LGW',
        name: 'London Gatwick Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -0.19027799367904663,
            latitude: 51.148101806640625,
            altitude: 61.5696,
            reasonable: true
        }
    },
    {
        icao: 'EGLL',
        iata: 'LHR',
        name: 'London Heathrow Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -0.461941,
            latitude: 51.4706,
            altitude: 25.2984,
            reasonable: true
        }
    },
    {
        icao: 'EGNM',
        iata: 'LBA',
        name: 'Leeds Bradford Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -1.6605700254440308,
            latitude: 53.86589813232422,
            altitude: 207.5688,
            reasonable: true
        }
    },
    {
        icao: 'EGNT',
        iata: 'NCL',
        name: 'Newcastle Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -1.6916699409484863,
            latitude: 55.037498474121094,
            altitude: 81.0768,
            reasonable: true
        }
    },
    {
        icao: 'EGNX',
        iata: 'EMA',
        name: 'East Midlands Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -1.32806003094,
            latitude: 52.8311004639,
            altitude: 93.2688,
            reasonable: true
        }
    },
    {
        icao: 'EGPD',
        iata: 'ABZ',
        name: 'Aberdeen Dyce Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -2.197779893875122,
            latitude: 57.201900482177734,
            altitude: 65.532,
            reasonable: true
        }
    },
    {
        icao: 'EGPF',
        iata: 'GLA',
        name: 'Glasgow International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -4.43306016922,
            latitude: 55.8718986511,
            altitude: 7.9248,
            reasonable: true
        }
    },
    {
        icao: 'EGPH',
        iata: 'EDI',
        name: 'Edinburgh Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -3.372499942779541,
            latitude: 55.95000076293945,
            altitude: 41.148,
            reasonable: true
        }
    },
    {
        icao: 'EGSH',
        iata: 'NWI',
        name: 'Norwich International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 1.28278005123,
            latitude: 52.6758003235,
            altitude: 35.6616,
            reasonable: true
        }
    },
    {
        icao: 'EGSS',
        iata: 'STN',
        name: 'London Stansted Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 0.234999999404,
            latitude: 51.8849983215,
            altitude: 106.0704,
            reasonable: true
        }
    },
    {
        icao: 'EGTE',
        iata: 'EXT',
        name: 'Exeter International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -3.4138898849487305,
            latitude: 50.73440170288086,
            altitude: 31.0896,
            reasonable: true
        }
    },
    {
        icao: 'EGUL',
        iata: 'LKZ',
        name: 'RAF Lakenheath',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 0.56099998951,
            latitude: 52.409301757799994,
            altitude: 9.7536,
            reasonable: true
        }
    },
    {
        icao: 'EGUN',
        iata: 'MHZ',
        name: 'RAF Mildenhall',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 0.48640599846839905,
            latitude: 52.361900329589844,
            altitude: 10.0584,
            reasonable: true
        }
    },
    {
        icao: 'EGVA',
        iata: 'FFD',
        name: 'RAF Fairford',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -1.7900300025900002,
            latitude: 51.6822013855,
            altitude: 87.17280000000001,
            reasonable: true
        }
    },
    {
        icao: 'EGVN',
        iata: 'BZZ',
        name: 'RAF Brize Norton',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -1.58362,
            latitude: 51.75,
            altitude: 87.78240000000001,
            reasonable: true
        }
    },
    {
        icao: 'EHAM',
        iata: 'AMS',
        name: 'Amsterdam Airport Schiphol',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 4.763889789579999,
            latitude: 52.3086013794,
            altitude: -3.3528000000000002,
            reasonable: true
        }
    },
    {
        icao: 'EHBK',
        iata: 'MST',
        name: 'Maastricht Aachen Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 5.77014017105,
            latitude: 50.9117012024,
            altitude: 114.30000000000001,
            reasonable: true
        }
    },
    {
        icao: 'EHEH',
        iata: 'EIN',
        name: 'Eindhoven Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 5.37452983856,
            latitude: 51.4500999451,
            altitude: 22.555200000000003,
            reasonable: true
        }
    },
    {
        icao: 'EICK',
        iata: 'ORK',
        name: 'Cork Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -8.491109848022461,
            latitude: 51.84130096435547,
            altitude: 153.0096,
            reasonable: true
        }
    },
    {
        icao: 'EIDW',
        iata: 'DUB',
        name: 'Dublin Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -6.2700700759887695,
            latitude: 53.42129898071289,
            altitude: 73.7616,
            reasonable: true
        }
    },
    {
        icao: 'EINN',
        iata: 'SNN',
        name: 'Shannon Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -8.9248199462891,
            latitude: 52.701999664307,
            altitude: 14.020800000000001,
            reasonable: true
        }
    },
    {
        icao: 'EKBI',
        iata: 'BLL',
        name: 'Billund Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 9.15178012848,
            latitude: 55.7402992249,
            altitude: 75.2856,
            reasonable: true
        }
    },
    {
        icao: 'EKCH',
        iata: 'CPH',
        name: 'Copenhagen Kastrup Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 12.656000137329,
            latitude: 55.617900848389,
            altitude: 5.1816,
            reasonable: true
        }
    },
    {
        icao: 'EKYT',
        iata: 'AAL',
        name: 'Aalborg Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 9.84924316406,
            latitude: 57.0927589138,
            altitude: 3.048,
            reasonable: true
        }
    },
    {
        icao: 'ELLX',
        iata: 'LUX',
        name: 'Luxembourg-Findel International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 6.2044444,
            latitude: 49.6233333,
            altitude: 376.1232,
            reasonable: true
        }
    },
    {
        icao: 'EPGD',
        iata: 'GDN',
        name: 'Gda?sk Lech Wa??sa Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 18.46619987487793,
            latitude: 54.377601623535156,
            altitude: 149.0472,
            reasonable: true
        }
    },
    {
        icao: 'EPKK',
        iata: 'KRK',
        name: 'John Paul II International Airport Kraków-Balice Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 19.784799575805664,
            latitude: 50.077701568603516,
            altitude: 241.0968,
            reasonable: true
        }
    },
    {
        icao: 'EPKT',
        iata: 'KTW',
        name: 'Katowice International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 19.08,
            latitude: 50.4743,
            altitude: 303.276,
            reasonable: true
        }
    },
    {
        icao: 'EPMO',
        iata: 'WMI',
        name: 'Modlin Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 20.6518001556,
            latitude: 52.4510993958,
            altitude: 103.9368,
            reasonable: true
        }
    },
    {
        icao: 'EPPO',
        iata: 'POZ',
        name: 'Pozna?-?awica Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 16.8262996674,
            latitude: 52.421001434299995,
            altitude: 93.8784,
            reasonable: true
        }
    },
    {
        icao: 'EPWA',
        iata: 'WAW',
        name: 'Warsaw Chopin Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 20.967100143399996,
            latitude: 52.1656990051,
            altitude: 110.33760000000001,
            reasonable: true
        }
    },
    {
        icao: 'EPWR',
        iata: 'WRO',
        name: 'Copernicus Wroc?aw Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 16.885799408,
            latitude: 51.1026992798,
            altitude: 123.1392,
            reasonable: true
        }
    },
    {
        icao: 'ESGG',
        iata: 'GOT',
        name: 'Gothenburg-Landvetter Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 12.279800415039,
            latitude: 57.662799835205,
            altitude: 154.2288,
            reasonable: true
        }
    },
    {
        icao: 'ESMS',
        iata: 'MMX',
        name: 'Malmö Sturup Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 13.376197814900001,
            latitude: 55.536305364,
            altitude: 71.9328,
            reasonable: true
        }
    },
    {
        icao: 'ETAR',
        iata: 'RMS',
        name: 'Ramstein Air Base',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 7.600279808044434,
            latitude: 49.4369010925293,
            altitude: 236.5248,
            reasonable: true
        }
    },
    {
        icao: 'EVRA',
        iata: 'RIX',
        name: 'Riga International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 23.971099853515625,
            latitude: 56.92359924316406,
            altitude: 10.972800000000001,
            reasonable: true
        }
    },
    {
        icao: 'EYVI',
        iata: 'VNO',
        name: 'Vilnius International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 25.285801,
            latitude: 54.634102,
            altitude: 197.5104,
            reasonable: true
        }
    },
    {
        icao: 'LATI',
        iata: 'TIA',
        name: 'Tirana International Airport Mother Teresa',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 19.7206001282,
            latitude: 41.4146995544,
            altitude: 38.4048,
            reasonable: true
        }
    },
    {
        icao: 'LBBG',
        iata: 'BOJ',
        name: 'Burgas Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 27.515199661254883,
            latitude: 42.56959915161133,
            altitude: 41.148,
            reasonable: true
        }
    },
    {
        icao: 'LBSF',
        iata: 'SOF',
        name: 'Sofia Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 23.411436080932617,
            latitude: 42.696693420410156,
            altitude: 530.9616,
            reasonable: true
        }
    },
    {
        icao: 'LBWN',
        iata: 'VAR',
        name: 'Varna Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 27.8251,
            latitude: 43.232101,
            altitude: 70.104,
            reasonable: true
        }
    },
    {
        icao: 'LDZA',
        iata: 'ZAG',
        name: 'Zagreb Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 16.0687999725,
            latitude: 45.7429008484,
            altitude: 107.59440000000001,
            reasonable: true
        }
    },
    {
        icao: 'LEBL',
        iata: 'BCN',
        name: 'Barcelona International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 2.0784599781036,
            latitude: 41.297100067139,
            altitude: 3.6576000000000004,
            reasonable: true
        }
    },
    {
        icao: 'LEMD',
        iata: 'MAD',
        name: 'Adolfo Suárez Madrid–Barajas Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -3.56264,
            latitude: 40.471926,
            altitude: 608.9904,
            reasonable: true
        }
    },
    {
        icao: 'LEPA',
        iata: 'PMI',
        name: 'Palma De Mallorca Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 2.73881006241,
            latitude: 39.551700592,
            altitude: 8.2296,
            reasonable: true
        }
    },
    {
        icao: 'LEST',
        iata: 'SCQ',
        name: 'Santiago de Compostela Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -8.415140151977539,
            latitude: 42.89630126953125,
            altitude: 369.7224,
            reasonable: true
        }
    },
    {
        icao: 'LFBD',
        iata: 'BOD',
        name: 'Bordeaux-Mérignac Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -0.715556025505,
            latitude: 44.828300476100004,
            altitude: 49.3776,
            reasonable: true
        }
    },
    {
        icao: 'LFBO',
        iata: 'TLS',
        name: 'Toulouse-Blagnac Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 1.36382,
            latitude: 43.629101,
            altitude: 152.0952,
            reasonable: true
        }
    },
    {
        icao: 'LFLL',
        iata: 'LYS',
        name: 'Lyon Saint-Exupéry Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 5.081111,
            latitude: 45.725556,
            altitude: 250.2408,
            reasonable: true
        }
    },
    {
        icao: 'LFML',
        iata: 'MRS',
        name: 'Marseille Provence Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 5.22142410278,
            latitude: 43.439271922,
            altitude: 22.555200000000003,
            reasonable: true
        }
    },
    {
        icao: 'LFMN',
        iata: 'NCE',
        name: "Nice-Côte d'Azur Airport",
        city: null,
        type: 'large_airport',
        position: {
            longitude: 7.215869903560001,
            latitude: 43.6584014893,
            altitude: 3.6576000000000004,
            reasonable: true
        }
    },
    {
        icao: 'LFOA',
        iata: '',
        name: 'Avord (BA 702) Air Base',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 2.6325,
            latitude: 47.053299,
            altitude: 176.78400000000002,
            reasonable: true
        }
    },
    {
        icao: 'LFPG',
        iata: 'CDG',
        name: 'Charles de Gaulle International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 2.54999995232,
            latitude: 49.0127983093,
            altitude: 119.4816,
            reasonable: true
        }
    },
    {
        icao: 'LFPO',
        iata: 'ORY',
        name: 'Paris-Orly Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 2.3794444,
            latitude: 48.7233333,
            altitude: 88.69680000000001,
            reasonable: true
        }
    },
    {
        icao: 'LFSB',
        iata: 'BSL',
        name: 'EuroAirport Basel-Mulhouse-Freiburg Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 7.5291667,
            latitude: 47.59,
            altitude: 269.748,
            reasonable: true
        }
    },
    {
        icao: 'LGTS',
        iata: 'SKG',
        name: 'Thessaloniki Macedonia International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 22.97089958190918,
            latitude: 40.51969909667969,
            altitude: 6.7056000000000004,
            reasonable: true
        }
    },
    {
        icao: 'LHBP',
        iata: 'BUD',
        name: 'Budapest Ferenc Liszt International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 19.255599975599996,
            latitude: 47.436901092499994,
            altitude: 150.876,
            reasonable: true
        }
    },
    {
        icao: 'LIBD',
        iata: 'BRI',
        name: 'Bari Karol Wojty?a Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 16.760599,
            latitude: 41.138901,
            altitude: 53.949600000000004,
            reasonable: true
        }
    },
    {
        icao: 'LIEE',
        iata: 'CAG',
        name: 'Cagliari Elmas Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 9.05428,
            latitude: 39.251499,
            altitude: 3.9624,
            reasonable: true
        }
    },
    {
        icao: 'LIMC',
        iata: 'MXP',
        name: 'Malpensa International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 8.72811,
            latitude: 45.6306,
            altitude: 234.08640000000003,
            reasonable: true
        }
    },
    {
        icao: 'LIME',
        iata: 'BGY',
        name: 'Il Caravaggio International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 9.70417,
            latitude: 45.673901,
            altitude: 238.3536,
            reasonable: true
        }
    },
    {
        icao: 'LIMF',
        iata: 'TRN',
        name: 'Turin Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 7.64963,
            latitude: 45.200802,
            altitude: 301.4472,
            reasonable: true
        }
    },
    {
        icao: 'LIMJ',
        iata: 'GOA',
        name: 'Genoa Cristoforo Colombo Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 8.8375,
            latitude: 44.4133,
            altitude: 3.9624,
            reasonable: true
        }
    },
    {
        icao: 'LIML',
        iata: 'LIN',
        name: 'Milano Linate Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 9.27674,
            latitude: 45.445099,
            altitude: 107.59440000000001,
            reasonable: true
        }
    },
    {
        icao: 'LIPE',
        iata: 'BLQ',
        name: 'Bologna Guglielmo Marconi Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 11.2887,
            latitude: 44.5354,
            altitude: 37.4904,
            reasonable: true
        }
    },
    {
        icao: 'LIPH',
        iata: 'TSF',
        name: "Treviso-Sant'Angelo Airport",
        city: null,
        type: 'large_airport',
        position: {
            longitude: 12.1944,
            latitude: 45.648399,
            altitude: 17.9832,
            reasonable: true
        }
    },
    {
        icao: 'LIPX',
        iata: 'VRN',
        name: 'Verona Villafranca Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 10.8885,
            latitude: 45.395699,
            altitude: 72.8472,
            reasonable: true
        }
    },
    {
        icao: 'LIPZ',
        iata: 'VCE',
        name: 'Venice Marco Polo Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 12.3519,
            latitude: 45.505299,
            altitude: 2.1336,
            reasonable: true
        }
    },
    {
        icao: 'LIRA',
        iata: 'CIA',
        name: 'Ciampino–G. B. Pastine International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 12.5949,
            latitude: 41.7994,
            altitude: 130.1496,
            reasonable: true
        }
    },
    {
        icao: 'LIRF',
        iata: 'FCO',
        name: 'Leonardo da Vinci–Fiumicino Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 12.2388889,
            latitude: 41.8002778,
            altitude: 3.9624,
            reasonable: true
        }
    },
    {
        icao: 'LIRN',
        iata: 'NAP',
        name: 'Naples International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 14.2908,
            latitude: 40.886002,
            altitude: 89.61120000000001,
            reasonable: true
        }
    },
    {
        icao: 'LIRP',
        iata: 'PSA',
        name: 'Pisa International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 10.3927,
            latitude: 43.683899,
            altitude: 1.8288000000000002,
            reasonable: true
        }
    },
    {
        icao: 'LJLJ',
        iata: 'LJU',
        name: 'Ljubljana Jože Pu?nik Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 14.4576,
            latitude: 46.223701,
            altitude: 388.0104,
            reasonable: true
        }
    },
    {
        icao: 'LKPR',
        iata: 'PRG',
        name: 'Václav Havel Airport Prague',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 14.26,
            latitude: 50.1008,
            altitude: 380.0856,
            reasonable: true
        }
    },
    {
        icao: 'LOWW',
        iata: 'VIE',
        name: 'Vienna International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 16.569700241089,
            latitude: 48.110298156738,
            altitude: 182.88,
            reasonable: true
        }
    },
    {
        icao: 'LPPR',
        iata: 'OPO',
        name: 'Francisco de Sá Carneiro Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: -8.68138980865,
            latitude: 41.2481002808,
            altitude: 69.4944,
            reasonable: true
        }
    },
    {
        icao: 'LQSA',
        iata: 'SJJ',
        name: 'Sarajevo International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 18.331499099731445,
            latitude: 43.82460021972656,
            altitude: 520.5984,
            reasonable: true
        }
    },
    {
        icao: 'LROP',
        iata: 'OTP',
        name: 'Henri Coand? International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 26.085,
            latitude: 44.5711111,
            altitude: 95.7072,
            reasonable: true
        }
    },
    {
        icao: 'LSGG',
        iata: 'GVA',
        name: 'Geneva Cointrin International Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 6.108950138092041,
            latitude: 46.23809814453125,
            altitude: 430.07280000000003,
            reasonable: true
        }
    },
    {
        icao: 'LSZH',
        iata: 'ZRH',
        name: 'Zürich Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 8.54917,
            latitude: 47.464699,
            altitude: 431.59680000000003,
            reasonable: true
        }
    },
    {
        icao: 'LYBE',
        iata: 'BEG',
        name: 'Belgrade Nikola Tesla Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 20.3090991974,
            latitude: 44.8184013367,
            altitude: 102.108,
            reasonable: true
        }
    },
    {
        icao: 'LYPG',
        iata: 'TGD',
        name: 'Podgorica Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 19.2519,
            latitude: 42.359402,
            altitude: 42.976800000000004,
            reasonable: true
        }
    },
    {
        icao: 'LZIB',
        iata: 'BTS',
        name: 'M. R. Štefánik Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 17.21269989013672,
            latitude: 48.17020034790039,
            altitude: 132.8928,
            reasonable: true
        }
    },
    {
        icao: 'UMMS',
        iata: 'MSQ',
        name: 'Minsk National Airport',
        city: null,
        type: 'large_airport',
        position: {
            longitude: 28.030700683594,
            latitude: 53.882499694824,
            altitude: 204.216,
            reasonable: true
        }
    }
];

export const countries = {
    Afghanistan: 'AF',
    'Aland Islands': 'AX',
    Albania: 'AL',
    Algeria: 'DZ',
    'American Samoa': 'AS',
    Andorra: 'AD',
    Angola: 'AO',
    Anguilla: 'AI',
    Antarctica: 'AQ',
    'Antigua And Barbuda': 'AG',
    Argentina: 'AR',
    Armenia: 'AM',
    Aruba: 'AW',
    Australia: 'AU',
    Austria: 'AT',
    Azerbaijan: 'AZ',
    Bahamas: 'BS',
    Bahrain: 'BH',
    Bangladesh: 'BD',
    Barbados: 'BB',
    Belarus: 'BY',
    Belgium: 'BE',
    Belize: 'BZ',
    Benin: 'BJ',
    Bermuda: 'BM',
    Bhutan: 'BT',
    Bolivia: 'BO',
    'Bosnia And Herzegovina': 'BA',
    Botswana: 'BW',
    'Bouvet Island': 'BV',
    Brazil: 'BR',
    'British Indian Ocean Territory': 'IO',
    'Brunei Darussalam': 'BN',
    Bulgaria: 'BG',
    'Burkina Faso': 'BF',
    Burundi: 'BI',
    Cambodia: 'KH',
    Cameroon: 'CM',
    Canada: 'CA',
    'Cape Verde': 'CV',
    'Cayman Islands': 'KY',
    'Central African Republic': 'CF',
    Chad: 'TD',
    Chile: 'CL',
    China: 'CN',
    'Christmas Island': 'CX',
    'Cocos (Keeling) Islands': 'CC',
    Colombia: 'CO',
    Comoros: 'KM',
    Congo: 'CG',
    'Congo, Democratic Republic': 'CD',
    'Cook Islands': 'CK',
    'Costa Rica': 'CR',
    "Cote D'Ivoire": 'CI',
    Croatia: 'HR',
    Cuba: 'CU',
    Cyprus: 'CY',
    'Czech Republic': 'CZ',
    Denmark: 'DK',
    Djibouti: 'DJ',
    Dominica: 'DM',
    'Dominican Republic': 'DO',
    Ecuador: 'EC',
    Egypt: 'EG',
    'El Salvador': 'SV',
    'Equatorial Guinea': 'GQ',
    Eritrea: 'ER',
    Estonia: 'EE',
    Ethiopia: 'ET',
    'Falkland Islands (Malvinas)': 'FK',
    'Faroe Islands': 'FO',
    Fiji: 'FJ',
    Finland: 'FI',
    France: 'FR',
    'French Guiana': 'GF',
    'French Polynesia': 'PF',
    'French Southern Territories': 'TF',
    Gabon: 'GA',
    Gambia: 'GM',
    Georgia: 'GE',
    Germany: 'DE',
    Ghana: 'GH',
    Gibraltar: 'GI',
    Greece: 'GR',
    Greenland: 'GL',
    Grenada: 'GD',
    Guadeloupe: 'GP',
    Guam: 'GU',
    Guatemala: 'GT',
    Guernsey: 'GG',
    Guinea: 'GN',
    'Guinea-Bissau': 'GW',
    Guyana: 'GY',
    Haiti: 'HT',
    'Heard Island & Mcdonald Islands': 'HM',
    'Holy See (Vatican City State)': 'VA',
    Honduras: 'HN',
    'Hong Kong': 'HK',
    Hungary: 'HU',
    Iceland: 'IS',
    India: 'IN',
    Indonesia: 'ID',
    'Iran, Islamic Republic Of': 'IR',
    Iraq: 'IQ',
    Ireland: 'IE',
    'Isle Of Man': 'IM',
    Israel: 'IL',
    Italy: 'IT',
    Jamaica: 'JM',
    Japan: 'JP',
    Jersey: 'JE',
    Jordan: 'JO',
    Kazakhstan: 'KZ',
    Kenya: 'KE',
    Kiribati: 'KI',
    Korea: 'KR',
    Kuwait: 'KW',
    Kyrgyzstan: 'KG',
    "Lao People's Democratic Republic": 'LA',
    Latvia: 'LV',
    Lebanon: 'LB',
    Lesotho: 'LS',
    Liberia: 'LR',
    'Libyan Arab Jamahiriya': 'LY',
    Liechtenstein: 'LI',
    Lithuania: 'LT',
    Luxembourg: 'LU',
    Macao: 'MO',
    Macedonia: 'MK',
    Madagascar: 'MG',
    Malawi: 'MW',
    Malaysia: 'MY',
    Maldives: 'MV',
    Mali: 'ML',
    Malta: 'MT',
    'Marshall Islands': 'MH',
    Martinique: 'MQ',
    Mauritania: 'MR',
    Mauritius: 'MU',
    Mayotte: 'YT',
    Mexico: 'MX',
    'Micronesia, Federated States Of': 'FM',
    Moldova: 'MD',
    Monaco: 'MC',
    Mongolia: 'MN',
    Montenegro: 'ME',
    Montserrat: 'MS',
    Morocco: 'MA',
    Mozambique: 'MZ',
    Myanmar: 'MM',
    Namibia: 'NA',
    Nauru: 'NR',
    Nepal: 'NP',
    Netherlands: 'NL',
    'Netherlands Antilles': 'AN',
    'New Caledonia': 'NC',
    'New Zealand': 'NZ',
    Nicaragua: 'NI',
    Niger: 'NE',
    Nigeria: 'NG',
    Niue: 'NU',
    'Norfolk Island': 'NF',
    'Northern Mariana Islands': 'MP',
    Norway: 'NO',
    Oman: 'OM',
    Pakistan: 'PK',
    Palau: 'PW',
    'Palestinian Territory, Occupied': 'PS',
    Panama: 'PA',
    'Papua New Guinea': 'PG',
    Paraguay: 'PY',
    Peru: 'PE',
    Philippines: 'PH',
    Pitcairn: 'PN',
    Poland: 'PL',
    Portugal: 'PT',
    'Puerto Rico': 'PR',
    Qatar: 'QA',
    Reunion: 'RE',
    Romania: 'RO',
    'Russian Federation': 'RU',
    Rwanda: 'RW',
    'Saint Barthelemy': 'BL',
    'Saint Helena': 'SH',
    'Saint Kitts And Nevis': 'KN',
    'Saint Lucia': 'LC',
    'Saint Martin': 'MF',
    'Saint Pierre And Miquelon': 'PM',
    'Saint Vincent And Grenadines': 'VC',
    Samoa: 'WS',
    'San Marino': 'SM',
    'Sao Tome And Principe': 'ST',
    'Saudi Arabia': 'SA',
    Senegal: 'SN',
    Serbia: 'RS',
    Seychelles: 'SC',
    'Sierra Leone': 'SL',
    Singapore: 'SG',
    Slovakia: 'SK',
    Slovenia: 'SI',
    'Solomon Islands': 'SB',
    Somalia: 'SO',
    'South Africa': 'ZA',
    'South Georgia And Sandwich Isl.': 'GS',
    Spain: 'ES',
    'Sri Lanka': 'LK',
    Sudan: 'SD',
    Suriname: 'SR',
    'Svalbard And Jan Mayen': 'SJ',
    Swaziland: 'SZ',
    Sweden: 'SE',
    Switzerland: 'CH',
    'Syrian Arab Republic': 'SY',
    Taiwan: 'TW',
    Tajikistan: 'TJ',
    Tanzania: 'TZ',
    Thailand: 'TH',
    'Timor-Leste': 'TL',
    Togo: 'TG',
    Tokelau: 'TK',
    Tonga: 'TO',
    'Trinidad And Tobago': 'TT',
    Tunisia: 'TN',
    Turkey: 'TR',
    Turkmenistan: 'TM',
    'Turks And Caicos Islands': 'TC',
    Tuvalu: 'TV',
    Uganda: 'UG',
    Ukraine: 'UA',
    'United Arab Emirates': 'AE',
    'United Kingdom': 'GB',
    'United States': 'US',
    'United States Outlying Islands': 'UM',
    Uruguay: 'UY',
    Uzbekistan: 'UZ',
    Vanuatu: 'VU',
    Venezuela: 'VE',
    'Viet Nam': 'VN',
    'Virgin Islands, British': 'VG',
    'Virgin Islands, U.S.': 'VI',
    'Wallis And Futuna': 'WF',
    'Western Sahara': 'EH',
    Yemen: 'YE',
    Zambia: 'ZM',
    Zimbabwe: 'ZW'
};
