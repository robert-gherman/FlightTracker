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
