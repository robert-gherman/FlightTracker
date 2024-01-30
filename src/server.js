import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3001;
app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/aircraft/:icao', async (req, res) => {
    const icao = req.params.icao;
    try {
        const userAgent =
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36';

        const response = await fetch(
            `http://opensky-network.org/api/metadata/aircraft/icao/${icao}`,
            {
                headers: {
                    'User-Agent': userAgent
                },
                credentials: 'include'
            }
        );

        const data = await response.json();
        console.log('DA');
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching aircraft data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.options('/aircraft/:icao', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
