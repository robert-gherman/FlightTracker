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

const first100FLights = {
    "pagination": {
      "limit": 100,
      "offset": 0,
      "count": 100,
      "total": 418957
    },
    "data": [
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Kunming",
          "timezone": "Asia/Shanghai",
          "iata": "KMG",
          "icao": "ZPPP",
          "terminal": null,
          "gate": "23",
          "delay": null,
          "scheduled": "2024-02-05T06:55:00+00:00",
          "estimated": "2024-02-05T06:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Mangshi",
          "timezone": "Asia/Shanghai",
          "iata": "LUM",
          "icao": "ZPLX",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:10:00+00:00",
          "estimated": "2024-02-05T08:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Ruili Airlines",
          "iata": "DR",
          "icao": "RLH"
        },
        "flight": {
          "number": "6507",
          "iata": "DR6507",
          "icao": "RLH6507",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Urumqi",
          "timezone": "Asia/Shanghai",
          "iata": "URC",
          "icao": "ZWWW",
          "terminal": "2",
          "gate": "15",
          "delay": null,
          "scheduled": "2024-02-05T07:00:00+00:00",
          "estimated": "2024-02-05T07:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Taiyuan",
          "timezone": "Asia/Shanghai",
          "iata": "TYN",
          "icao": "ZBYN",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T10:40:00+00:00",
          "estimated": "2024-02-05T10:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Tibet Airlines",
          "iata": "TV",
          "icao": "TBA"
        },
        "flight": {
          "number": "3260",
          "iata": "TV3260",
          "icao": "TBA3260",
          "codeshared": {
            "airline_name": "shandong airlines",
            "airline_iata": "sc",
            "airline_icao": "cdg",
            "flight_number": "4951",
            "flight_iata": "sc4951",
            "flight_icao": "cdg4951"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Komatsu",
          "timezone": "Asia/Tokyo",
          "iata": "KMQ",
          "icao": "RJNK",
          "terminal": null,
          "gate": "1",
          "delay": null,
          "scheduled": "2024-02-05T07:45:00+00:00",
          "estimated": "2024-02-05T07:45:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Haneda Airport",
          "timezone": "Asia/Tokyo",
          "iata": "HND",
          "icao": "RJTT",
          "terminal": "1",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:50:00+00:00",
          "estimated": "2024-02-05T08:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Bangkok Airways",
          "iata": "PG",
          "icao": "BKP"
        },
        "flight": {
          "number": "4191",
          "iata": "PG4191",
          "icao": "BKP4191",
          "codeshared": {
            "airline_name": "jal",
            "airline_iata": "jl",
            "airline_icao": "jal",
            "flight_number": "182",
            "flight_iata": "jl182",
            "flight_icao": "jal182"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Kuwait International",
          "timezone": "Asia/Kuwait",
          "iata": "KWI",
          "icao": "OKKK",
          "terminal": null,
          "gate": null,
          "delay": 43,
          "scheduled": "2024-02-05T01:05:00+00:00",
          "estimated": "2024-02-05T01:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Sialkot International",
          "timezone": "Asia/Karachi",
          "iata": "SKT",
          "icao": "OPST",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T06:35:00+00:00",
          "estimated": "2024-02-05T06:35:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Pakistan International Airlines",
          "iata": "PK",
          "icao": "PIA"
        },
        "flight": {
          "number": "240",
          "iata": "PK240",
          "icao": "PIA240",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Kuwait International",
          "timezone": "Asia/Kuwait",
          "iata": "KWI",
          "icao": "OKKK",
          "terminal": "1",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T01:00:00+00:00",
          "estimated": "2024-02-05T01:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Cochin International",
          "timezone": "Asia/Kolkata",
          "iata": "COK",
          "icao": "VOCI",
          "terminal": "3",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:15:00+00:00",
          "estimated": "2024-02-05T08:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "IndiGo",
          "iata": "6E",
          "icao": "IGO"
        },
        "flight": {
          "number": "1238",
          "iata": "6E1238",
          "icao": "IGO1238",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Kuwait International",
          "timezone": "Asia/Kuwait",
          "iata": "KWI",
          "icao": "OKKK",
          "terminal": "1",
          "gate": "4",
          "delay": 10,
          "scheduled": "2024-02-05T00:15:00+00:00",
          "estimated": "2024-02-05T00:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Indira Gandhi International",
          "timezone": "Asia/Kolkata",
          "iata": "DEL",
          "icao": "VIDP",
          "terminal": "3",
          "gate": null,
          "baggage": "9",
          "delay": null,
          "scheduled": "2024-02-05T06:50:00+00:00",
          "estimated": "2024-02-05T06:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "IndiGo",
          "iata": "6E",
          "icao": "IGO"
        },
        "flight": {
          "number": "1938",
          "iata": "6E1938",
          "icao": "IGO1938",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Kuwait International",
          "timezone": "Asia/Kuwait",
          "iata": "KWI",
          "icao": "OKKK",
          "terminal": "4",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T00:15:00+00:00",
          "estimated": "2024-02-05T00:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Cochin International",
          "timezone": "Asia/Kolkata",
          "iata": "COK",
          "icao": "VOCI",
          "terminal": "3",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:35:00+00:00",
          "estimated": "2024-02-05T07:35:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Kuwait Airways",
          "iata": "KU",
          "icao": "KAC"
        },
        "flight": {
          "number": "351",
          "iata": "KU351",
          "icao": "KAC351",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Kuwait International",
          "timezone": "Asia/Kuwait",
          "iata": "KWI",
          "icao": "OKKK",
          "terminal": "4",
          "gate": "51A",
          "delay": null,
          "scheduled": "2024-02-05T00:10:00+00:00",
          "estimated": "2024-02-05T00:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Suvarnabhumi International",
          "timezone": "Asia/Bangkok",
          "iata": "BKK",
          "icao": "VTBS",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T11:00:00+00:00",
          "estimated": "2024-02-05T11:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Kuwait Airways",
          "iata": "KU",
          "icao": "KAC"
        },
        "flight": {
          "number": "411",
          "iata": "KU411",
          "icao": "KAC411",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Kuwait International",
          "timezone": "Asia/Kuwait",
          "iata": "KWI",
          "icao": "OKKK",
          "terminal": "4",
          "gate": "51A",
          "delay": null,
          "scheduled": "2024-02-05T00:10:00+00:00",
          "estimated": "2024-02-05T00:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Suvarnabhumi International",
          "timezone": "Asia/Bangkok",
          "iata": "BKK",
          "icao": "VTBS",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T11:00:00+00:00",
          "estimated": "2024-02-05T11:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Aegean Airlines",
          "iata": "A3",
          "icao": "AEE"
        },
        "flight": {
          "number": "1180",
          "iata": "A31180",
          "icao": "AEE1180",
          "codeshared": {
            "airline_name": "kuwait airways",
            "airline_iata": "ku",
            "airline_icao": "kac",
            "flight_number": "411",
            "flight_iata": "ku411",
            "flight_icao": "kac411"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Kuwait International",
          "timezone": "Asia/Kuwait",
          "iata": "KWI",
          "icao": "OKKK",
          "terminal": "5",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T00:10:00+00:00",
          "estimated": "2024-02-05T00:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Cairo International Airport",
          "timezone": "Africa/Cairo",
          "iata": "CAI",
          "icao": "HECA",
          "terminal": "2",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T02:15:00+00:00",
          "estimated": "2024-02-05T02:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Jazeera Airways",
          "iata": "J9",
          "icao": "JZR"
        },
        "flight": {
          "number": "735",
          "iata": "J9735",
          "icao": "JZR735",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Netaji Subhas Chandra",
          "timezone": "Asia/Kolkata",
          "iata": "CCU",
          "icao": "VECC",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T03:35:00+00:00",
          "estimated": "2024-02-05T03:35:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Doha International",
          "timezone": "Asia/Qatar",
          "iata": "DOH",
          "icao": "OTHH",
          "terminal": null,
          "gate": null,
          "baggage": "7",
          "delay": null,
          "scheduled": "2024-02-05T06:45:00+00:00",
          "estimated": "2024-02-05T06:45:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Qatar Airways",
          "iata": "QR",
          "icao": "QTR"
        },
        "flight": {
          "number": "541",
          "iata": "QR541",
          "icao": "QTR541",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Xuzhou",
          "timezone": "Asia/Shanghai",
          "iata": "XUZ",
          "icao": "ZSXZ",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T07:05:00+00:00",
          "estimated": "2024-02-05T07:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "2",
          "gate": null,
          "baggage": "37",
          "delay": null,
          "scheduled": "2024-02-05T09:35:00+00:00",
          "estimated": "2024-02-05T09:35:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "China Southern Airlines",
          "iata": "CZ",
          "icao": "CSN"
        },
        "flight": {
          "number": "6282",
          "iata": "CZ6282",
          "icao": "CSN6282",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Esenboga International",
          "timezone": "Europe/Istanbul",
          "iata": "ESB",
          "icao": "LTAC",
          "terminal": null,
          "gate": "111",
          "delay": 10,
          "scheduled": "2024-02-05T00:55:00+00:00",
          "estimated": "2024-02-05T00:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Istanbul Airport",
          "timezone": "Europe/Istanbul",
          "iata": "IST",
          "icao": "LTFM",
          "terminal": "I",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T02:15:00+00:00",
          "estimated": "2024-02-05T02:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Turkish Airlines",
          "iata": "TK",
          "icao": "THY"
        },
        "flight": {
          "number": "2185",
          "iata": "TK2185",
          "icao": "THY2185",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Esenboga International",
          "timezone": "Europe/Istanbul",
          "iata": "ESB",
          "icao": "LTAC",
          "terminal": null,
          "gate": "111",
          "delay": 10,
          "scheduled": "2024-02-05T00:55:00+00:00",
          "estimated": "2024-02-05T00:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Istanbul Airport",
          "timezone": "Europe/Istanbul",
          "iata": "IST",
          "icao": "LTFM",
          "terminal": "I",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T02:15:00+00:00",
          "estimated": "2024-02-05T02:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "SAS",
          "iata": "SK",
          "icao": "SAS"
        },
        "flight": {
          "number": "3447",
          "iata": "SK3447",
          "icao": "SAS3447",
          "codeshared": {
            "airline_name": "turkish airlines",
            "airline_iata": "tk",
            "airline_icao": "thy",
            "flight_number": "2185",
            "flight_iata": "tk2185",
            "flight_icao": "thy2185"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Esenboga International",
          "timezone": "Europe/Istanbul",
          "iata": "ESB",
          "icao": "LTAC",
          "terminal": null,
          "gate": "111",
          "delay": 10,
          "scheduled": "2024-02-05T00:55:00+00:00",
          "estimated": "2024-02-05T00:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Istanbul Airport",
          "timezone": "Europe/Istanbul",
          "iata": "IST",
          "icao": "LTFM",
          "terminal": "I",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T02:15:00+00:00",
          "estimated": "2024-02-05T02:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "TAROM",
          "iata": "RO",
          "icao": "ROT"
        },
        "flight": {
          "number": "9188",
          "iata": "RO9188",
          "icao": "ROT9188",
          "codeshared": {
            "airline_name": "turkish airlines",
            "airline_iata": "tk",
            "airline_icao": "thy",
            "flight_number": "2185",
            "flight_iata": "tk2185",
            "flight_icao": "thy2185"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Esenboga International",
          "timezone": "Europe/Istanbul",
          "iata": "ESB",
          "icao": "LTAC",
          "terminal": null,
          "gate": "111",
          "delay": 10,
          "scheduled": "2024-02-05T00:55:00+00:00",
          "estimated": "2024-02-05T00:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Istanbul Airport",
          "timezone": "Europe/Istanbul",
          "iata": "IST",
          "icao": "LTFM",
          "terminal": "I",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T02:15:00+00:00",
          "estimated": "2024-02-05T02:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Air Serbia",
          "iata": "JU",
          "icao": "ASL"
        },
        "flight": {
          "number": "8188",
          "iata": "JU8188",
          "icao": "ASL8188",
          "codeshared": {
            "airline_name": "turkish airlines",
            "airline_iata": "tk",
            "airline_icao": "thy",
            "flight_number": "2185",
            "flight_iata": "tk2185",
            "flight_icao": "thy2185"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Esenboga International",
          "timezone": "Europe/Istanbul",
          "iata": "ESB",
          "icao": "LTAC",
          "terminal": null,
          "gate": "304",
          "delay": 10,
          "scheduled": "2024-02-05T00:30:00+00:00",
          "estimated": "2024-02-05T00:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Canakkale",
          "timezone": "Europe/Istanbul",
          "iata": "CKZ",
          "icao": "LTBH",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T01:50:00+00:00",
          "estimated": "2024-02-05T01:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Turkish Airlines",
          "iata": "TK",
          "icao": "THY"
        },
        "flight": {
          "number": "7178",
          "iata": "TK7178",
          "icao": "THY7178",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Esenboga International",
          "timezone": "Europe/Istanbul",
          "iata": "ESB",
          "icao": "LTAC",
          "terminal": null,
          "gate": "120",
          "delay": 10,
          "scheduled": "2024-02-05T00:10:00+00:00",
          "estimated": "2024-02-05T00:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": null,
          "timezone": null,
          "iata": "IKA",
          "icao": "OIIE",
          "terminal": "MAIN",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T03:15:00+00:00",
          "estimated": "2024-02-05T03:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Turkish Airlines",
          "iata": "TK",
          "icao": "THY"
        },
        "flight": {
          "number": "7880",
          "iata": "TK7880",
          "icao": "THY7880",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Ginbata Airport",
          "timezone": null,
          "iata": "GBW",
          "icao": "YGIA",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T00:10:00+00:00",
          "estimated": "2024-02-05T00:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Port Hedland",
          "timezone": "Australia/Perth",
          "iata": "PHE",
          "icao": "YPPD",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T00:56:00+00:00",
          "estimated": "2024-02-05T00:56:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "empty",
          "iata": null,
          "icao": null
        },
        "flight": {
          "number": null,
          "iata": null,
          "icao": null,
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Zhengzhou",
          "timezone": "Asia/Shanghai",
          "iata": "CGO",
          "icao": "ZHCC",
          "terminal": "2",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T06:05:00+00:00",
          "estimated": "2024-02-05T06:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Zhuhai Airport",
          "timezone": "Asia/Shanghai",
          "iata": "ZUH",
          "icao": "ZGSD",
          "terminal": "T1",
          "gate": null,
          "baggage": "1",
          "delay": null,
          "scheduled": "2024-02-05T08:35:00+00:00",
          "estimated": "2024-02-05T08:35:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "West Air (China)",
          "iata": "PN",
          "icao": "CHB"
        },
        "flight": {
          "number": "6243",
          "iata": "PN6243",
          "icao": "CHB6243",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Zhengzhou",
          "timezone": "Asia/Shanghai",
          "iata": "CGO",
          "icao": "ZHCC",
          "terminal": "2",
          "gate": "E",
          "delay": null,
          "scheduled": "2024-02-05T06:00:00+00:00",
          "estimated": "2024-02-05T06:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Kunming",
          "timezone": "Asia/Shanghai",
          "iata": "KMG",
          "icao": "ZPPP",
          "terminal": null,
          "gate": null,
          "baggage": "14",
          "delay": null,
          "scheduled": "2024-02-05T08:50:00+00:00",
          "estimated": "2024-02-05T08:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "West Air (China)",
          "iata": "PN",
          "icao": "CHB"
        },
        "flight": {
          "number": "6547",
          "iata": "PN6547",
          "icao": "CHB6547",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Zhengzhou",
          "timezone": "Asia/Shanghai",
          "iata": "CGO",
          "icao": "ZHCC",
          "terminal": "2",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T06:00:00+00:00",
          "estimated": "2024-02-05T06:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Kunming",
          "timezone": "Asia/Shanghai",
          "iata": "KMG",
          "icao": "ZPPP",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:50:00+00:00",
          "estimated": "2024-02-05T08:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "West Air (China)",
          "iata": "PN",
          "icao": "CHB"
        },
        "flight": {
          "number": "6377",
          "iata": "PN6377",
          "icao": "CHB6377",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Zhengzhou",
          "timezone": "Asia/Shanghai",
          "iata": "CGO",
          "icao": "ZHCC",
          "terminal": "2",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T06:00:00+00:00",
          "estimated": "2024-02-05T06:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Kunming",
          "timezone": "Asia/Shanghai",
          "iata": "KMG",
          "icao": "ZPPP",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:50:00+00:00",
          "estimated": "2024-02-05T08:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Hainan Airlines",
          "iata": "HU",
          "icao": "CHH"
        },
        "flight": {
          "number": "4115",
          "iata": "HU4115",
          "icao": "CHH4115",
          "codeshared": {
            "airline_name": "west air (china)",
            "airline_iata": "pn",
            "airline_icao": "chb",
            "flight_number": "6377",
            "flight_iata": "pn6377",
            "flight_icao": "chb6377"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Zhengzhou",
          "timezone": "Asia/Shanghai",
          "iata": "CGO",
          "icao": "ZHCC",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:45:00+00:00",
          "estimated": "2024-02-05T05:45:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Los Angeles International",
          "timezone": "America/Los_Angeles",
          "iata": "LAX",
          "icao": "KLAX",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T02:45:00+00:00",
          "estimated": "2024-02-05T02:45:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Suparna Airlines",
          "iata": "Y8",
          "icao": "YZR"
        },
        "flight": {
          "number": "7407",
          "iata": "Y87407",
          "icao": "YZR7407",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Zhengzhou",
          "timezone": "Asia/Shanghai",
          "iata": "CGO",
          "icao": "ZHCC",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:30:00+00:00",
          "estimated": "2024-02-05T05:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Zia International",
          "timezone": "Asia/Dhaka",
          "iata": "DAC",
          "icao": "VGHS",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:40:00+00:00",
          "estimated": "2024-02-05T07:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "SF Airlines",
          "iata": "O3",
          "icao": "CSS"
        },
        "flight": {
          "number": "7185",
          "iata": "O37185",
          "icao": "CSS7185",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Zhengzhou",
          "timezone": "Asia/Shanghai",
          "iata": "CGO",
          "icao": "ZHCC",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:20:00+00:00",
          "estimated": "2024-02-05T05:20:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Shenzhen",
          "timezone": "Asia/Shanghai",
          "iata": "SZX",
          "icao": "ZGSZ",
          "terminal": "T3",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:50:00+00:00",
          "estimated": "2024-02-05T07:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Tianjin Air Cargo",
          "iata": "HT",
          "icao": "CTJ"
        },
        "flight": {
          "number": "3806",
          "iata": "HT3806",
          "icao": "CTJ3806",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Kobe",
          "timezone": "Asia/Tokyo",
          "iata": "UKB",
          "icao": "RJBE",
          "terminal": null,
          "gate": "4",
          "delay": null,
          "scheduled": "2024-02-05T07:05:00+00:00",
          "estimated": "2024-02-05T07:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Haneda Airport",
          "timezone": "Asia/Tokyo",
          "iata": "HND",
          "icao": "RJTT",
          "terminal": "2",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:15:00+00:00",
          "estimated": "2024-02-05T08:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "ANA",
          "iata": "NH",
          "icao": "ANA"
        },
        "flight": {
          "number": "412",
          "iata": "NH412",
          "icao": "ANA412",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": "1",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T06:05:00+00:00",
          "estimated": "2024-02-05T06:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Hong Kong International",
          "timezone": "Asia/Hong_Kong",
          "iata": "HKG",
          "icao": "VHHH",
          "terminal": "1",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T10:05:00+00:00",
          "estimated": "2024-02-05T10:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Scoot",
          "iata": "TR",
          "icao": "TGW"
        },
        "flight": {
          "number": "978",
          "iata": "TR978",
          "icao": "TGW978",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": "2",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T06:00:00+00:00",
          "estimated": "2024-02-05T06:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Kuala Lumpur International Airport (klia)",
          "timezone": "Asia/Kuala_Lumpur",
          "iata": "KUL",
          "icao": "WMKK",
          "terminal": "1",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:20:00+00:00",
          "estimated": "2024-02-05T07:20:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Malaysia Airlines",
          "iata": "MH",
          "icao": "MAS"
        },
        "flight": {
          "number": "602",
          "iata": "MH602",
          "icao": "MAS602",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": "1",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T06:00:00+00:00",
          "estimated": "2024-02-05T06:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Noibai International",
          "timezone": "Asia/Ho_Chi_Minh",
          "iata": "HAN",
          "icao": "VVNB",
          "terminal": "2",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:35:00+00:00",
          "estimated": "2024-02-05T08:35:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Scoot",
          "iata": "TR",
          "icao": "TGW"
        },
        "flight": {
          "number": "310",
          "iata": "TR310",
          "icao": "TGW310",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:55:00+00:00",
          "estimated": "2024-02-05T05:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Hong Kong International",
          "timezone": "Asia/Hong_Kong",
          "iata": "HKG",
          "icao": "VHHH",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T09:50:00+00:00",
          "estimated": "2024-02-05T09:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Qatar Airways",
          "iata": "QR",
          "icao": "QTR"
        },
        "flight": {
          "number": "8406",
          "iata": "QR8406",
          "icao": "QTR8406",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": "2",
          "gate": "2",
          "delay": null,
          "scheduled": "2024-02-05T05:30:00+00:00",
          "estimated": "2024-02-05T05:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Bangalore International Airport",
          "timezone": "Asia/Kolkata",
          "iata": "BLR",
          "icao": "VOBL",
          "terminal": "2",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:40:00+00:00",
          "estimated": "2024-02-05T07:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "IndiGo",
          "iata": "6E",
          "icao": "IGO"
        },
        "flight": {
          "number": "1006",
          "iata": "6E1006",
          "icao": "IGO1006",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": "1",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:30:00+00:00",
          "estimated": "2024-02-05T05:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Raja Sansi International Airport",
          "timezone": "Asia/Kolkata",
          "iata": "ATQ",
          "icao": "VIAR",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T09:05:00+00:00",
          "estimated": "2024-02-05T09:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Scoot",
          "iata": "TR",
          "icao": "TGW"
        },
        "flight": {
          "number": "504",
          "iata": "TR504",
          "icao": "TGW504",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": "1",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:30:00+00:00",
          "estimated": "2024-02-05T05:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "1",
          "gate": null,
          "baggage": "1",
          "delay": null,
          "scheduled": "2024-02-05T09:30:00+00:00",
          "estimated": "2024-02-05T09:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Scoot",
          "iata": "TR",
          "icao": "TGW"
        },
        "flight": {
          "number": "100",
          "iata": "TR100",
          "icao": "TGW100",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": "4",
          "gate": "7",
          "delay": null,
          "scheduled": "2024-02-05T06:10:00+00:00",
          "estimated": "2024-02-05T06:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Ninoy Aquino International",
          "timezone": "Asia/Manila",
          "iata": "MNL",
          "icao": "RPLL",
          "terminal": "3",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T10:00:00+00:00",
          "estimated": "2024-02-05T10:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Jetstar Asia",
          "iata": "3K",
          "icao": "JSA"
        },
        "flight": {
          "number": "761",
          "iata": "3K761",
          "icao": "JSA761",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Soekarno-Hatta International",
          "timezone": "Asia/Jakarta",
          "iata": "CGK",
          "icao": "WIII",
          "terminal": "3",
          "gate": "E",
          "delay": null,
          "scheduled": "2024-02-05T05:05:00+00:00",
          "estimated": "2024-02-05T05:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Ngurah Rai International",
          "timezone": "Asia/Makassar",
          "iata": "DPS",
          "icao": "WADD",
          "terminal": "D",
          "gate": null,
          "baggage": "D.2",
          "delay": null,
          "scheduled": "2024-02-05T08:05:00+00:00",
          "estimated": "2024-02-05T08:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Citilink",
          "iata": "QG",
          "icao": "CTV"
        },
        "flight": {
          "number": "680",
          "iata": "QG680",
          "icao": "CTV680",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Soekarno-Hatta International",
          "timezone": "Asia/Jakarta",
          "iata": "CGK",
          "icao": "WIII",
          "terminal": "2",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:00:00+00:00",
          "estimated": "2024-02-05T05:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": null,
          "timezone": null,
          "iata": "KNO",
          "icao": "WIMM",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:20:00+00:00",
          "estimated": "2024-02-05T07:20:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Citilink",
          "iata": "QG",
          "icao": "CTV"
        },
        "flight": {
          "number": "882",
          "iata": "QG882",
          "icao": "CTV882",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Soekarno-Hatta International",
          "timezone": "Asia/Jakarta",
          "iata": "CGK",
          "icao": "WIII",
          "terminal": "1",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:00:00+00:00",
          "estimated": "2024-02-05T05:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Ngurah Rai International",
          "timezone": "Asia/Makassar",
          "iata": "DPS",
          "icao": "WADD",
          "terminal": "D",
          "gate": null,
          "baggage": "D.3",
          "delay": null,
          "scheduled": "2024-02-05T07:50:00+00:00",
          "estimated": "2024-02-05T07:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "AirAsia",
          "iata": "AK",
          "icao": "AXM"
        },
        "flight": {
          "number": "800",
          "iata": "AK800",
          "icao": "AXM800",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Soekarno-Hatta International",
          "timezone": "Asia/Jakarta",
          "iata": "CGK",
          "icao": "WIII",
          "terminal": "2",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:00:00+00:00",
          "estimated": "2024-02-05T05:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Hasanudin",
          "timezone": "Asia/Makassar",
          "iata": "UPG",
          "icao": "WAAA",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:30:00+00:00",
          "estimated": "2024-02-05T08:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Batik Air",
          "iata": "ID",
          "icao": "BTK"
        },
        "flight": {
          "number": "6286",
          "iata": "ID6286",
          "icao": "BTK6286",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Soekarno-Hatta International",
          "timezone": "Asia/Jakarta",
          "iata": "CGK",
          "icao": "WIII",
          "terminal": "1",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:00:00+00:00",
          "estimated": "2024-02-05T05:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Lombok International",
          "timezone": "Asia/Makassar",
          "iata": "LOP",
          "icao": "WADL",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:05:00+00:00",
          "estimated": "2024-02-05T08:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Lion Air",
          "iata": "JT",
          "icao": "LNI"
        },
        "flight": {
          "number": "656",
          "iata": "JT656",
          "icao": "LNI656",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Soekarno-Hatta International",
          "timezone": "Asia/Jakarta",
          "iata": "CGK",
          "icao": "WIII",
          "terminal": "1",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:00:00+00:00",
          "estimated": "2024-02-05T05:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Lombok International",
          "timezone": "Asia/Makassar",
          "iata": "LOP",
          "icao": "WADL",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:05:00+00:00",
          "estimated": "2024-02-05T08:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": null,
          "iata": "X1",
          "icao": "X1"
        },
        "flight": {
          "number": "6206",
          "iata": "X16206",
          "icao": "X16206",
          "codeshared": {
            "airline_name": "lion air",
            "airline_iata": "jt",
            "airline_icao": "lni",
            "flight_number": "656",
            "flight_iata": "jt656",
            "flight_icao": "lni656"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Soekarno-Hatta International",
          "timezone": "Asia/Jakarta",
          "iata": "CGK",
          "icao": "WIII",
          "terminal": "2",
          "gate": "C22",
          "delay": null,
          "scheduled": "2024-02-05T05:00:00+00:00",
          "estimated": "2024-02-05T05:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Juanda",
          "timezone": "Asia/Jakarta",
          "iata": "SUB",
          "icao": "WARR",
          "terminal": "1",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T06:35:00+00:00",
          "estimated": "2024-02-05T06:35:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Batik Air",
          "iata": "ID",
          "icao": "BTK"
        },
        "flight": {
          "number": "6370",
          "iata": "ID6370",
          "icao": "BTK6370",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Soekarno-Hatta International",
          "timezone": "Asia/Jakarta",
          "iata": "CGK",
          "icao": "WIII",
          "terminal": "2",
          "gate": "C22",
          "delay": null,
          "scheduled": "2024-02-05T04:50:00+00:00",
          "estimated": "2024-02-05T04:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Aji Pangeran Tumenggung Pranoto International Airport",
          "timezone": null,
          "iata": "AAP",
          "icao": "WALS",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:10:00+00:00",
          "estimated": "2024-02-05T08:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Batik Air",
          "iata": "ID",
          "icao": "BTK"
        },
        "flight": {
          "number": "6672",
          "iata": "ID6672",
          "icao": "BTK6672",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Soekarno-Hatta International",
          "timezone": "Asia/Jakarta",
          "iata": "CGK",
          "icao": "WIII",
          "terminal": "3",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:05:00+00:00",
          "estimated": "2024-02-05T05:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Supadio",
          "timezone": "Asia/Pontianak",
          "iata": "PNK",
          "icao": "WIOO",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T06:45:00+00:00",
          "estimated": "2024-02-05T06:45:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Citilink",
          "iata": "QG",
          "icao": "CTV"
        },
        "flight": {
          "number": "416",
          "iata": "QG416",
          "icao": "CTV416",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:10:00+00:00",
          "estimated": "2024-02-05T05:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Changsha",
          "timezone": "Asia/Shanghai",
          "iata": "CSX",
          "icao": "ZGHA",
          "terminal": "1",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T06:30:00+00:00",
          "estimated": "2024-02-05T06:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "China Postal Airlines",
          "iata": "CF",
          "icao": "CYZ"
        },
        "flight": {
          "number": "9152",
          "iata": "CF9152",
          "icao": "CYZ9152",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "1",
          "gate": "K",
          "delay": null,
          "scheduled": "2024-02-05T05:30:00+00:00",
          "estimated": "2024-02-05T05:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Zia International",
          "timezone": "Asia/Dhaka",
          "iata": "DAC",
          "icao": "VGHS",
          "terminal": "2",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:25:00+00:00",
          "estimated": "2024-02-05T07:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Biman Bangladesh Airlines",
          "iata": "BG",
          "icao": "BBC"
        },
        "flight": {
          "number": "367",
          "iata": "BG367",
          "icao": "BBC367",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:30:00+00:00",
          "estimated": "2024-02-05T05:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Nanjing Lukou International Airport",
          "timezone": "Asia/Shanghai",
          "iata": "NKG",
          "icao": "ZSNJ",
          "terminal": "2",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:55:00+00:00",
          "estimated": "2024-02-05T07:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "SF Airlines",
          "iata": "O3",
          "icao": "CSS"
        },
        "flight": {
          "number": "6950",
          "iata": "O36950",
          "icao": "CSS6950",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "2",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:30:00+00:00",
          "estimated": "2024-02-05T05:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Madras International (Meenambakkam)",
          "timezone": "Asia/Kolkata",
          "iata": "MAA",
          "icao": "VOMM",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:30:00+00:00",
          "estimated": "2024-02-05T08:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "YTO Cargo Airlines",
          "iata": "YG",
          "icao": "HYT"
        },
        "flight": {
          "number": "9165",
          "iata": "YG9165",
          "icao": "HYT9165",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "1",
          "gate": "G",
          "delay": null,
          "scheduled": "2024-02-05T05:45:00+00:00",
          "estimated": "2024-02-05T05:45:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Don Muang",
          "timezone": "Asia/Bangkok",
          "iata": "DMK",
          "icao": "VTBD",
          "terminal": "1",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:40:00+00:00",
          "estimated": "2024-02-05T07:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "AirAsia",
          "iata": "AK",
          "icao": "AXM"
        },
        "flight": {
          "number": "537",
          "iata": "AK537",
          "icao": "AXM537",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "2",
          "gate": null,
          "delay": 90,
          "scheduled": "2024-02-05T05:49:00+00:00",
          "estimated": "2024-02-05T05:49:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Ted Stevens Anchorage International Airport",
          "timezone": "America/Anchorage",
          "iata": "ANC",
          "icao": "PANC",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-04T22:12:00+00:00",
          "estimated": "2024-02-04T22:12:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "FedEx",
          "iata": "FX",
          "icao": "FDX"
        },
        "flight": {
          "number": "9075",
          "iata": "FX9075",
          "icao": "FDX9075",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "2",
          "gate": "P,Q",
          "delay": 10,
          "scheduled": "2024-02-05T05:50:00+00:00",
          "estimated": "2024-02-05T05:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Ted Stevens Anchorage International Airport",
          "timezone": "America/Anchorage",
          "iata": "ANC",
          "icao": "PANC",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-04T23:20:00+00:00",
          "estimated": "2024-02-04T23:20:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "China Southern Airlines",
          "iata": "CZ",
          "icao": "CSN"
        },
        "flight": {
          "number": "471",
          "iata": "CZ471",
          "icao": "CSN471",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "1",
          "gate": "G",
          "delay": null,
          "scheduled": "2024-02-05T05:55:00+00:00",
          "estimated": "2024-02-05T05:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Kuala Lumpur International Airport (klia)",
          "timezone": "Asia/Kuala_Lumpur",
          "iata": "KUL",
          "icao": "WMKK",
          "terminal": "2",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T10:10:00+00:00",
          "estimated": "2024-02-05T10:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "AirAsia",
          "iata": "AK",
          "icao": "AXM"
        },
        "flight": {
          "number": "115",
          "iata": "AK115",
          "icao": "AXM115",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "2",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:50:00+00:00",
          "estimated": "2024-02-05T05:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Ted Stevens Anchorage International Airport",
          "timezone": "America/Anchorage",
          "iata": "ANC",
          "icao": "PANC",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-04T22:06:00+00:00",
          "estimated": "2024-02-04T22:06:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "FedEx",
          "iata": "FX",
          "icao": "FDX"
        },
        "flight": {
          "number": "6010",
          "iata": "FX6010",
          "icao": "FDX6010",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "1",
          "gate": "F,K",
          "delay": null,
          "scheduled": "2024-02-05T05:55:00+00:00",
          "estimated": "2024-02-05T05:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Don Muang",
          "timezone": "Asia/Bangkok",
          "iata": "DMK",
          "icao": "VTBD",
          "terminal": "1",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:40:00+00:00",
          "estimated": "2024-02-05T07:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Spring Airlines",
          "iata": "9C",
          "icao": "CQH"
        },
        "flight": {
          "number": "7419",
          "iata": "9C7419",
          "icao": "CQH7419",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "2",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:55:00+00:00",
          "estimated": "2024-02-05T05:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Ted Stevens Anchorage International Airport",
          "timezone": "America/Anchorage",
          "iata": "ANC",
          "icao": "PANC",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-04T23:25:00+00:00",
          "estimated": "2024-02-04T23:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "China Southern Airlines",
          "iata": "CZ",
          "icao": "CSN"
        },
        "flight": {
          "number": "2535",
          "iata": "CZ2535",
          "icao": "CSN2535",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "2",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:59:00+00:00",
          "estimated": "2024-02-05T05:59:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Ted Stevens Anchorage International Airport",
          "timezone": "America/Anchorage",
          "iata": "ANC",
          "icao": "PANC",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-04T22:22:00+00:00",
          "estimated": "2024-02-04T22:22:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "FedEx",
          "iata": "FX",
          "icao": "FDX"
        },
        "flight": {
          "number": "9052",
          "iata": "FX9052",
          "icao": "FDX9052",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "1",
          "gate": "M",
          "delay": null,
          "scheduled": "2024-02-05T06:05:00+00:00",
          "estimated": "2024-02-05T06:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Enshi",
          "timezone": "Asia/Shanghai",
          "iata": "ENH",
          "icao": "ZHES",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:10:00+00:00",
          "estimated": "2024-02-05T08:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Loong Air",
          "iata": "GJ",
          "icao": "CDC"
        },
        "flight": {
          "number": "8925",
          "iata": "GJ8925",
          "icao": "CDC8925",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "1",
          "gate": "L",
          "delay": null,
          "scheduled": "2024-02-05T06:05:00+00:00",
          "estimated": "2024-02-05T06:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Guiyang",
          "timezone": "Asia/Shanghai",
          "iata": "KWE",
          "icao": "ZUGY",
          "terminal": "2",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:55:00+00:00",
          "estimated": "2024-02-05T07:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "9 Air Co",
          "iata": "AQ",
          "icao": "JYH"
        },
        "flight": {
          "number": "1123",
          "iata": "AQ1123",
          "icao": "JYH1123",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Guangzhou Baiyun International",
          "timezone": "Asia/Shanghai",
          "iata": "CAN",
          "icao": "ZGGG",
          "terminal": "1",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T06:05:00+00:00",
          "estimated": "2024-02-05T06:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Jinan",
          "timezone": "Asia/Shanghai",
          "iata": "TNA",
          "icao": "ZSJN",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T09:00:00+00:00",
          "estimated": "2024-02-05T09:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "9 Air Co",
          "iata": "AQ",
          "icao": "JYH"
        },
        "flight": {
          "number": "1153",
          "iata": "AQ1153",
          "icao": "JYH1153",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Tribhuvan International",
          "timezone": "Asia/Kathmandu",
          "iata": "KTM",
          "icao": "VNKT",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T03:05:00+00:00",
          "estimated": "2024-02-05T03:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Dhangarhi",
          "timezone": "Asia/Kathmandu",
          "iata": "DHI",
          "icao": "VNDH",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T03:55:00+00:00",
          "estimated": "2024-02-05T03:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Sharp Airlines",
          "iata": "SH",
          "icao": "SHA"
        },
        "flight": {
          "number": "225",
          "iata": "SH225",
          "icao": "SHA225",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Townsville International",
          "timezone": "Australia/Brisbane",
          "iata": "TSV",
          "icao": "YBTL",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T07:15:00+00:00",
          "estimated": "2024-02-05T07:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Palm Island",
          "timezone": "Australia/Brisbane",
          "iata": "PMK",
          "icao": "YPAM",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:38:00+00:00",
          "estimated": "2024-02-05T07:38:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Hinterland Aviation",
          "iata": "OI",
          "icao": "HND"
        },
        "flight": {
          "number": "700",
          "iata": "OI700",
          "icao": "HND700",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Townsville International",
          "timezone": "Australia/Brisbane",
          "iata": "TSV",
          "icao": "YBTL",
          "terminal": null,
          "gate": "5",
          "delay": null,
          "scheduled": "2024-02-05T07:30:00+00:00",
          "estimated": "2024-02-05T07:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Hughenden",
          "timezone": "Australia/Brisbane",
          "iata": "HGD",
          "icao": "YHUG",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:35:00+00:00",
          "estimated": "2024-02-05T08:35:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Rex Regional Express",
          "iata": "ZL",
          "icao": "RXA"
        },
        "flight": {
          "number": "5267",
          "iata": "ZL5267",
          "icao": "RXA5267",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Townsville International",
          "timezone": "Australia/Brisbane",
          "iata": "TSV",
          "icao": "YBTL",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T07:45:00+00:00",
          "estimated": "2024-02-05T07:45:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Palm Island",
          "timezone": "Australia/Brisbane",
          "iata": "PMK",
          "icao": "YPAM",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:08:00+00:00",
          "estimated": "2024-02-05T08:08:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Hinterland Aviation",
          "iata": "OI",
          "icao": "HND"
        },
        "flight": {
          "number": "702",
          "iata": "OI702",
          "icao": "HND702",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Townsville International",
          "timezone": "Australia/Brisbane",
          "iata": "TSV",
          "icao": "YBTL",
          "terminal": null,
          "gate": "6",
          "delay": null,
          "scheduled": "2024-02-05T07:50:00+00:00",
          "estimated": "2024-02-05T07:50:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Mackay",
          "timezone": "Australia/Brisbane",
          "iata": "MKY",
          "icao": "YBMK",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:45:00+00:00",
          "estimated": "2024-02-05T08:45:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Qantas",
          "iata": "QF",
          "icao": "QFA"
        },
        "flight": {
          "number": "2355",
          "iata": "QF2355",
          "icao": "QFA2355",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Palm Island",
          "timezone": "Australia/Brisbane",
          "iata": "PMK",
          "icao": "YPAM",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T07:45:00+00:00",
          "estimated": "2024-02-05T07:45:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Townsville International",
          "timezone": "Australia/Brisbane",
          "iata": "TSV",
          "icao": "YBTL",
          "terminal": "D",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:08:00+00:00",
          "estimated": "2024-02-05T08:08:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Hinterland Aviation",
          "iata": "OI",
          "icao": "HND"
        },
        "flight": {
          "number": "701",
          "iata": "OI701",
          "icao": "HND701",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Beijing Capital International",
          "timezone": "Asia/Shanghai",
          "iata": "PEK",
          "icao": "ZBAA",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:25:00+00:00",
          "estimated": "2024-02-05T05:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Frankfurt International Airport",
          "timezone": "Europe/Berlin",
          "iata": "FRA",
          "icao": "EDDF",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T11:05:00+00:00",
          "estimated": "2024-02-05T11:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Lufthansa",
          "iata": "LH",
          "icao": "DLH"
        },
        "flight": {
          "number": "8431",
          "iata": "LH8431",
          "icao": "DLH8431",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Beijing Capital International",
          "timezone": "Asia/Shanghai",
          "iata": "PEK",
          "icao": "ZBAA",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:45:00+00:00",
          "estimated": "2024-02-05T05:45:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Shenzhen",
          "timezone": "Asia/Shanghai",
          "iata": "SZX",
          "icao": "ZGSZ",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:40:00+00:00",
          "estimated": "2024-02-05T08:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "SF Airlines",
          "iata": "O3",
          "icao": "CSS"
        },
        "flight": {
          "number": "7304",
          "iata": "O37304",
          "icao": "CSS7304",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Beijing Capital International",
          "timezone": "Asia/Shanghai",
          "iata": "PEK",
          "icao": "ZBAA",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:25:00+00:00",
          "estimated": "2024-02-05T05:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Shenzhen",
          "timezone": "Asia/Shanghai",
          "iata": "SZX",
          "icao": "ZGSZ",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:55:00+00:00",
          "estimated": "2024-02-05T08:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "China Postal Airlines",
          "iata": "CF",
          "icao": "CYZ"
        },
        "flight": {
          "number": "9088",
          "iata": "CF9088",
          "icao": "CYZ9088",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Beijing Capital International",
          "timezone": "Asia/Shanghai",
          "iata": "PEK",
          "icao": "ZBAA",
          "terminal": "2",
          "gate": "G",
          "delay": null,
          "scheduled": "2024-02-05T06:00:00+00:00",
          "estimated": "2024-02-05T06:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Dali",
          "timezone": "Asia/Shanghai",
          "iata": "DLU",
          "icao": "ZPDL",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T10:00:00+00:00",
          "estimated": "2024-02-05T10:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Air China LTD",
          "iata": "CA",
          "icao": "CCA"
        },
        "flight": {
          "number": "9619",
          "iata": "CA9619",
          "icao": "CCA9619",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Beijing Capital International",
          "timezone": "Asia/Shanghai",
          "iata": "PEK",
          "icao": "ZBAA",
          "terminal": "3",
          "gate": "J,K",
          "delay": null,
          "scheduled": "2024-02-05T06:00:00+00:00",
          "estimated": "2024-02-05T06:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Yanji",
          "timezone": "Asia/Shanghai",
          "iata": "YNJ",
          "icao": "ZYYJ",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:00:00+00:00",
          "estimated": "2024-02-05T08:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Air China LTD",
          "iata": "CA",
          "icao": "CCA"
        },
        "flight": {
          "number": "9643",
          "iata": "CA9643",
          "icao": "CCA9643",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Saga",
          "timezone": "Asia/Tokyo",
          "iata": "HSG",
          "icao": "RJFS",
          "terminal": null,
          "gate": "22",
          "delay": null,
          "scheduled": "2024-02-05T06:55:00+00:00",
          "estimated": "2024-02-05T06:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Haneda Airport",
          "timezone": "Asia/Tokyo",
          "iata": "HND",
          "icao": "RJTT",
          "terminal": "2",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:25:00+00:00",
          "estimated": "2024-02-05T08:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "ANA",
          "iata": "NH",
          "icao": "ANA"
        },
        "flight": {
          "number": "452",
          "iata": "NH452",
          "icao": "ANA452",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Babullah",
          "timezone": "Asia/Jayapura",
          "iata": "TTE",
          "icao": "WAMT",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T06:40:00+00:00",
          "estimated": "2024-02-05T06:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Hasanudin",
          "timezone": "Asia/Makassar",
          "iata": "UPG",
          "icao": "WAAA",
          "terminal": "D",
          "gate": null,
          "baggage": "3",
          "delay": null,
          "scheduled": "2024-02-05T07:40:00+00:00",
          "estimated": "2024-02-05T07:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": null,
          "iata": "X1",
          "icao": "X1"
        },
        "flight": {
          "number": "6237",
          "iata": "X16237",
          "icao": "X16237",
          "codeshared": {
            "airline_name": "lion air",
            "airline_iata": "jt",
            "airline_icao": "lni",
            "flight_number": "981",
            "flight_iata": "jt981",
            "flight_icao": "lni981"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Babullah",
          "timezone": "Asia/Jayapura",
          "iata": "TTE",
          "icao": "WAMT",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T06:40:00+00:00",
          "estimated": "2024-02-05T06:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Hasanudin",
          "timezone": "Asia/Makassar",
          "iata": "UPG",
          "icao": "WAAA",
          "terminal": "D",
          "gate": null,
          "baggage": "3",
          "delay": null,
          "scheduled": "2024-02-05T07:40:00+00:00",
          "estimated": "2024-02-05T07:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Lion Air",
          "iata": "JT",
          "icao": "LNI"
        },
        "flight": {
          "number": "981",
          "iata": "JT981",
          "icao": "LNI981",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Tottori",
          "timezone": "Asia/Tokyo",
          "iata": "TTJ",
          "icao": "RJOR",
          "terminal": null,
          "gate": "1",
          "delay": null,
          "scheduled": "2024-02-05T07:05:00+00:00",
          "estimated": "2024-02-05T07:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Haneda Airport",
          "timezone": "Asia/Tokyo",
          "iata": "HND",
          "icao": "RJTT",
          "terminal": "2",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T08:15:00+00:00",
          "estimated": "2024-02-05T08:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "ANA",
          "iata": "NH",
          "icao": "ANA"
        },
        "flight": {
          "number": "292",
          "iata": "NH292",
          "icao": "ANA292",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "3",
          "gate": "25",
          "delay": null,
          "scheduled": "2024-02-05T05:10:00+00:00",
          "estimated": "2024-02-05T05:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Learmonth",
          "timezone": "Australia/Perth",
          "iata": "LEA",
          "icao": "YPLM",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:05:00+00:00",
          "estimated": "2024-02-05T07:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Air New Zealand",
          "iata": "NZ",
          "icao": "ANZ"
        },
        "flight": {
          "number": "7270",
          "iata": "NZ7270",
          "icao": "ANZ7270",
          "codeshared": {
            "airline_name": "qantas",
            "airline_iata": "qf",
            "airline_icao": "qfa",
            "flight_number": "1600",
            "flight_iata": "qf1600",
            "flight_icao": "qfa1600"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "3",
          "gate": "25",
          "delay": null,
          "scheduled": "2024-02-05T05:10:00+00:00",
          "estimated": "2024-02-05T05:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Learmonth",
          "timezone": "Australia/Perth",
          "iata": "LEA",
          "icao": "YPLM",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:05:00+00:00",
          "estimated": "2024-02-05T07:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Qantas",
          "iata": "QF",
          "icao": "QFA"
        },
        "flight": {
          "number": "1600",
          "iata": "QF1600",
          "icao": "QFA1600",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "3",
          "gate": "20",
          "delay": null,
          "scheduled": "2024-02-05T05:15:00+00:00",
          "estimated": "2024-02-05T05:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Karratha",
          "timezone": "Australia/Perth",
          "iata": "KTA",
          "icao": "YPKA",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:15:00+00:00",
          "estimated": "2024-02-05T07:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Emirates",
          "iata": "EK",
          "icao": "UAE"
        },
        "flight": {
          "number": "5417",
          "iata": "EK5417",
          "icao": "UAE5417",
          "codeshared": {
            "airline_name": "qantas",
            "airline_iata": "qf",
            "airline_icao": "qfa",
            "flight_number": "1824",
            "flight_iata": "qf1824",
            "flight_icao": "qfa1824"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "3",
          "gate": "20",
          "delay": null,
          "scheduled": "2024-02-05T05:15:00+00:00",
          "estimated": "2024-02-05T05:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Karratha",
          "timezone": "Australia/Perth",
          "iata": "KTA",
          "icao": "YPKA",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:15:00+00:00",
          "estimated": "2024-02-05T07:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Air New Zealand",
          "iata": "NZ",
          "icao": "ANZ"
        },
        "flight": {
          "number": "7444",
          "iata": "NZ7444",
          "icao": "ANZ7444",
          "codeshared": {
            "airline_name": "qantas",
            "airline_iata": "qf",
            "airline_icao": "qfa",
            "flight_number": "1824",
            "flight_iata": "qf1824",
            "flight_icao": "qfa1824"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "3",
          "gate": "20",
          "delay": null,
          "scheduled": "2024-02-05T05:15:00+00:00",
          "estimated": "2024-02-05T05:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Karratha",
          "timezone": "Australia/Perth",
          "iata": "KTA",
          "icao": "YPKA",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:15:00+00:00",
          "estimated": "2024-02-05T07:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Qantas",
          "iata": "QF",
          "icao": "QFA"
        },
        "flight": {
          "number": "1824",
          "iata": "QF1824",
          "icao": "QFA1824",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "3",
          "gate": "16",
          "delay": null,
          "scheduled": "2024-02-05T05:20:00+00:00",
          "estimated": "2024-02-05T05:20:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Newman",
          "timezone": "Australia/Perth",
          "iata": "ZNE",
          "icao": "YNWN",
          "terminal": "3",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:05:00+00:00",
          "estimated": "2024-02-05T07:05:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Air New Zealand",
          "iata": "NZ",
          "icao": "ANZ"
        },
        "flight": {
          "number": "7657",
          "iata": "NZ7657",
          "icao": "ANZ7657",
          "codeshared": {
            "airline_name": "qantas",
            "airline_iata": "qf",
            "airline_icao": "qfa",
            "flight_number": "1094",
            "flight_iata": "qf1094",
            "flight_icao": "qfa1094"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "1",
          "gate": "48B",
          "delay": null,
          "scheduled": "2024-02-05T06:00:00+00:00",
          "estimated": "2024-02-05T06:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Sydney Kingsford Smith Airport",
          "timezone": "Australia/Sydney",
          "iata": "SYD",
          "icao": "YSSY",
          "terminal": "2",
          "gate": "38",
          "baggage": "D1",
          "delay": null,
          "scheduled": "2024-02-05T13:15:00+00:00",
          "estimated": "2024-02-05T13:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Singapore Airlines",
          "iata": "SQ",
          "icao": "SIA"
        },
        "flight": {
          "number": "6885",
          "iata": "SQ6885",
          "icao": "SIA6885",
          "codeshared": {
            "airline_name": "virgin australia",
            "airline_iata": "va",
            "airline_icao": "voz",
            "flight_number": "552",
            "flight_iata": "va552",
            "flight_icao": "voz552"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "1",
          "gate": "48B",
          "delay": null,
          "scheduled": "2024-02-05T06:00:00+00:00",
          "estimated": "2024-02-05T06:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Sydney Kingsford Smith Airport",
          "timezone": "Australia/Sydney",
          "iata": "SYD",
          "icao": "YSSY",
          "terminal": "2",
          "gate": "38",
          "baggage": "D1",
          "delay": null,
          "scheduled": "2024-02-05T13:15:00+00:00",
          "estimated": "2024-02-05T13:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Virgin Australia",
          "iata": "VA",
          "icao": "VOZ"
        },
        "flight": {
          "number": "552",
          "iata": "VA552",
          "icao": "VOZ552",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "2",
          "gate": "9",
          "delay": null,
          "scheduled": "2024-02-05T06:00:00+00:00",
          "estimated": "2024-02-05T06:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": " Gruyere Mine Airport",
          "timezone": null,
          "iata": "GYZ",
          "icao": "YGRM",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:45:00+00:00",
          "estimated": "2024-02-05T07:45:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Virgin Australia",
          "iata": "VA",
          "icao": "VOZ"
        },
        "flight": {
          "number": "9393",
          "iata": "VA9393",
          "icao": "VOZ9393",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": "3",
          "gate": "B9",
          "delay": 9,
          "scheduled": "2024-02-05T00:25:00+00:00",
          "estimated": "2024-02-05T00:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "1",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T05:25:00+00:00",
          "estimated": "2024-02-05T05:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Lufthansa",
          "iata": "LH",
          "icao": "DLH"
        },
        "flight": {
          "number": "7206",
          "iata": "LH7206",
          "icao": "DLH7206",
          "codeshared": {
            "airline_name": "singapore airlines",
            "airline_iata": "sq",
            "airline_icao": "sia",
            "flight_number": "225",
            "flight_iata": "sq225",
            "flight_icao": "sia225"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T06:00:00+00:00",
          "estimated": "2024-02-05T06:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Karratha",
          "timezone": "Australia/Perth",
          "iata": "KTA",
          "icao": "YPKA",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:40:00+00:00",
          "estimated": "2024-02-05T07:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "empty",
          "iata": null,
          "icao": null
        },
        "flight": {
          "number": null,
          "iata": null,
          "icao": null,
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": "3",
          "gate": "B9",
          "delay": 9,
          "scheduled": "2024-02-05T00:25:00+00:00",
          "estimated": "2024-02-05T00:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "1",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T05:25:00+00:00",
          "estimated": "2024-02-05T05:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "SWISS",
          "iata": "LX",
          "icao": "SWR"
        },
        "flight": {
          "number": "9042",
          "iata": "LX9042",
          "icao": "SWR9042",
          "codeshared": {
            "airline_name": "singapore airlines",
            "airline_iata": "sq",
            "airline_icao": "sia",
            "flight_number": "225",
            "flight_iata": "sq225",
            "flight_icao": "sia225"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": "3",
          "gate": "B9",
          "delay": 9,
          "scheduled": "2024-02-05T00:25:00+00:00",
          "estimated": "2024-02-05T00:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "1",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T05:25:00+00:00",
          "estimated": "2024-02-05T05:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Asiana Airlines",
          "iata": "OZ",
          "icao": "AAR"
        },
        "flight": {
          "number": "6797",
          "iata": "OZ6797",
          "icao": "AAR6797",
          "codeshared": {
            "airline_name": "singapore airlines",
            "airline_iata": "sq",
            "airline_icao": "sia",
            "flight_number": "225",
            "flight_iata": "sq225",
            "flight_icao": "sia225"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": "3",
          "gate": "B9",
          "delay": 9,
          "scheduled": "2024-02-05T00:25:00+00:00",
          "estimated": "2024-02-05T00:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "1",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T05:25:00+00:00",
          "estimated": "2024-02-05T05:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "SAS",
          "iata": "SK",
          "icao": "SAS"
        },
        "flight": {
          "number": "8071",
          "iata": "SK8071",
          "icao": "SAS8071",
          "codeshared": {
            "airline_name": "singapore airlines",
            "airline_iata": "sq",
            "airline_icao": "sia",
            "flight_number": "225",
            "flight_iata": "sq225",
            "flight_icao": "sia225"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Singapore Changi",
          "timezone": "Asia/Singapore",
          "iata": "SIN",
          "icao": "WSSS",
          "terminal": "3",
          "gate": "B9",
          "delay": 9,
          "scheduled": "2024-02-05T00:25:00+00:00",
          "estimated": "2024-02-05T00:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Perth International",
          "timezone": "Australia/Perth",
          "iata": "PER",
          "icao": "YPPH",
          "terminal": "1",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T05:25:00+00:00",
          "estimated": "2024-02-05T05:25:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Turkish Airlines",
          "iata": "TK",
          "icao": "THY"
        },
        "flight": {
          "number": "9316",
          "iata": "TK9316",
          "icao": "THY9316",
          "codeshared": {
            "airline_name": "singapore airlines",
            "airline_iata": "sq",
            "airline_icao": "sia",
            "flight_number": "225",
            "flight_iata": "sq225",
            "flight_icao": "sia225"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Nelson",
          "timezone": "Pacific/Auckland",
          "iata": "NSN",
          "icao": "NZNS",
          "terminal": null,
          "gate": "5",
          "delay": null,
          "scheduled": "2024-02-05T10:15:00+00:00",
          "estimated": "2024-02-05T10:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Christchurch International",
          "timezone": "Pacific/Auckland",
          "iata": "CHC",
          "icao": "NZCH",
          "terminal": null,
          "gate": "D15",
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T11:10:00+00:00",
          "estimated": "2024-02-05T11:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Qantas",
          "iata": "QF",
          "icao": "QFA"
        },
        "flight": {
          "number": "8555",
          "iata": "QF8555",
          "icao": "QFA8555",
          "codeshared": {
            "airline_name": "air new zealand",
            "airline_iata": "nz",
            "airline_icao": "anz",
            "flight_number": "8845",
            "flight_iata": "nz8845",
            "flight_icao": "anz8845"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Nelson",
          "timezone": "Pacific/Auckland",
          "iata": "NSN",
          "icao": "NZNS",
          "terminal": null,
          "gate": "5",
          "delay": null,
          "scheduled": "2024-02-05T10:15:00+00:00",
          "estimated": "2024-02-05T10:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Christchurch International",
          "timezone": "Pacific/Auckland",
          "iata": "CHC",
          "icao": "NZCH",
          "terminal": null,
          "gate": "D15",
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T11:10:00+00:00",
          "estimated": "2024-02-05T11:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Singapore Airlines",
          "iata": "SQ",
          "icao": "SIA"
        },
        "flight": {
          "number": "4526",
          "iata": "SQ4526",
          "icao": "SIA4526",
          "codeshared": {
            "airline_name": "air new zealand",
            "airline_iata": "nz",
            "airline_icao": "anz",
            "flight_number": "8845",
            "flight_iata": "nz8845",
            "flight_icao": "anz8845"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Nelson",
          "timezone": "Pacific/Auckland",
          "iata": "NSN",
          "icao": "NZNS",
          "terminal": null,
          "gate": "5",
          "delay": null,
          "scheduled": "2024-02-05T10:15:00+00:00",
          "estimated": "2024-02-05T10:15:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Christchurch International",
          "timezone": "Pacific/Auckland",
          "iata": "CHC",
          "icao": "NZCH",
          "terminal": null,
          "gate": "D15",
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T11:10:00+00:00",
          "estimated": "2024-02-05T11:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Air New Zealand",
          "iata": "NZ",
          "icao": "ANZ"
        },
        "flight": {
          "number": "8845",
          "iata": "NZ8845",
          "icao": "ANZ8845",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Nelson",
          "timezone": "Pacific/Auckland",
          "iata": "NSN",
          "icao": "NZNS",
          "terminal": null,
          "gate": "3",
          "delay": null,
          "scheduled": "2024-02-05T10:30:00+00:00",
          "estimated": "2024-02-05T10:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Auckland International",
          "timezone": "Pacific/Auckland",
          "iata": "AKL",
          "icao": "NZAA",
          "terminal": "D",
          "gate": "35",
          "baggage": "DTB3",
          "delay": null,
          "scheduled": "2024-02-05T11:55:00+00:00",
          "estimated": "2024-02-05T11:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Qantas",
          "iata": "QF",
          "icao": "QFA"
        },
        "flight": {
          "number": "8630",
          "iata": "QF8630",
          "icao": "QFA8630",
          "codeshared": {
            "airline_name": "air new zealand",
            "airline_iata": "nz",
            "airline_icao": "anz",
            "flight_number": "5068",
            "flight_iata": "nz5068",
            "flight_icao": "anz5068"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Nelson",
          "timezone": "Pacific/Auckland",
          "iata": "NSN",
          "icao": "NZNS",
          "terminal": null,
          "gate": "3",
          "delay": null,
          "scheduled": "2024-02-05T10:30:00+00:00",
          "estimated": "2024-02-05T10:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Auckland International",
          "timezone": "Pacific/Auckland",
          "iata": "AKL",
          "icao": "NZAA",
          "terminal": "D",
          "gate": "35",
          "baggage": "DTB3",
          "delay": null,
          "scheduled": "2024-02-05T11:55:00+00:00",
          "estimated": "2024-02-05T11:55:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Air New Zealand",
          "iata": "NZ",
          "icao": "ANZ"
        },
        "flight": {
          "number": "5068",
          "iata": "NZ5068",
          "icao": "ANZ5068",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Auckland International",
          "timezone": "Pacific/Auckland",
          "iata": "AKL",
          "icao": "NZAA",
          "terminal": "D",
          "gate": "43",
          "delay": null,
          "scheduled": "2024-02-05T09:10:00+00:00",
          "estimated": "2024-02-05T09:10:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Nelson",
          "timezone": "Pacific/Auckland",
          "iata": "NSN",
          "icao": "NZNS",
          "terminal": "D",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T10:40:00+00:00",
          "estimated": "2024-02-05T10:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Air China LTD",
          "iata": "CA",
          "icao": "CCA"
        },
        "flight": {
          "number": "5949",
          "iata": "CA5949",
          "icao": "CCA5949",
          "codeshared": {
            "airline_name": "air new zealand",
            "airline_iata": "nz",
            "airline_icao": "anz",
            "flight_number": "5069",
            "flight_iata": "nz5069",
            "flight_icao": "anz5069"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Juanda",
          "timezone": "Asia/Jakarta",
          "iata": "SUB",
          "icao": "WARR",
          "terminal": "1",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:00:00+00:00",
          "estimated": "2024-02-05T05:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Soekarno-Hatta International",
          "timezone": "Asia/Jakarta",
          "iata": "CGK",
          "icao": "WIII",
          "terminal": "2",
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T06:30:00+00:00",
          "estimated": "2024-02-05T06:30:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Batik Air",
          "iata": "ID",
          "icao": "BTK"
        },
        "flight": {
          "number": "6589",
          "iata": "ID6589",
          "icao": "BTK6589",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Juanda",
          "timezone": "Asia/Jakarta",
          "iata": "SUB",
          "icao": "WARR",
          "terminal": "1",
          "gate": "62",
          "delay": null,
          "scheduled": "2024-02-05T05:00:00+00:00",
          "estimated": "2024-02-05T05:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Halim Perdana Kusuma",
          "timezone": "Asia/Jakarta",
          "iata": "HLP",
          "icao": "WIHH",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T06:20:00+00:00",
          "estimated": "2024-02-05T06:20:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Batik Air",
          "iata": "ID",
          "icao": "BTK"
        },
        "flight": {
          "number": "7508",
          "iata": "ID7508",
          "icao": "BTK7508",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Juanda",
          "timezone": "Asia/Jakarta",
          "iata": "SUB",
          "icao": "WARR",
          "terminal": null,
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:00:00+00:00",
          "estimated": "2024-02-05T05:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Sultan Aji Muhamad Sulaiman Airport\r\n",
          "timezone": null,
          "iata": "BPN",
          "icao": "WALL",
          "terminal": null,
          "gate": null,
          "baggage": null,
          "delay": null,
          "scheduled": "2024-02-05T07:40:00+00:00",
          "estimated": "2024-02-05T07:40:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Super Air Jet",
          "iata": "IU",
          "icao": "SJV"
        },
        "flight": {
          "number": "610",
          "iata": "IU610",
          "icao": "SJV610",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Juanda",
          "timezone": "Asia/Jakarta",
          "iata": "SUB",
          "icao": "WARR",
          "terminal": "1",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:00:00+00:00",
          "estimated": "2024-02-05T05:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Hasanudin",
          "timezone": "Asia/Makassar",
          "iata": "UPG",
          "icao": "WAAA",
          "terminal": "D",
          "gate": null,
          "baggage": "4",
          "delay": null,
          "scheduled": "2024-02-05T07:35:00+00:00",
          "estimated": "2024-02-05T07:35:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": null,
          "iata": "X1",
          "icao": "X1"
        },
        "flight": {
          "number": "6320",
          "iata": "X16320",
          "icao": "X16320",
          "codeshared": {
            "airline_name": "lion air",
            "airline_iata": "jt",
            "airline_icao": "lni",
            "flight_number": "786",
            "flight_iata": "jt786",
            "flight_icao": "lni786"
          }
        },
        "aircraft": null,
        "live": null
      },
      {
        "flight_date": "2024-02-05",
        "flight_status": "scheduled",
        "departure": {
          "airport": "Juanda",
          "timezone": "Asia/Jakarta",
          "iata": "SUB",
          "icao": "WARR",
          "terminal": "1",
          "gate": null,
          "delay": null,
          "scheduled": "2024-02-05T05:00:00+00:00",
          "estimated": "2024-02-05T05:00:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "arrival": {
          "airport": "Hasanudin",
          "timezone": "Asia/Makassar",
          "iata": "UPG",
          "icao": "WAAA",
          "terminal": "D",
          "gate": null,
          "baggage": "4",
          "delay": null,
          "scheduled": "2024-02-05T07:35:00+00:00",
          "estimated": "2024-02-05T07:35:00+00:00",
          "actual": null,
          "estimated_runway": null,
          "actual_runway": null
        },
        "airline": {
          "name": "Lion Air",
          "iata": "JT",
          "icao": "LNI"
        },
        "flight": {
          "number": "786",
          "iata": "JT786",
          "icao": "LNI786",
          "codeshared": null
        },
        "aircraft": null,
        "live": null
      }
    ]
  }
