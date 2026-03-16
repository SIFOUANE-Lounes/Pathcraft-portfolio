const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());

const pool = new Pool({
    user: 'lumen_user',
    host: 'localhost',
    database: 'lumen_data',
    password: 'samir',
    port: 5433,
});

app.get('/cities', (req, res) => {
    res.json(["Paris", "Rennes", "Toulouse", "Lyon", "Marseille", "Lille"]);
});

// ROUTE 1 : Heure
app.get('/stats/accidents-by-hour', async (req, res) => {
    const city = (req.query.city || 'Paris').trim();
    try {
        const query = `
            SELECT EXTRACT(HOUR FROM occured_at) AS hour, COUNT(*) AS count
            FROM accidents
            WHERE city = $1
            GROUP BY hour
            ORDER BY hour;
        `;
        const result = await pool.query(query, [city]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ROUTE 2 : Pluie
app.get('/stats/accidents-by-rain', async (req, res) => {
    const city = (req.query.city || 'Paris').trim();
    try {
        const query = `
            SELECT 
                CASE 
                    WHEN m.rain_mm = 0 OR m.rain_mm IS NULL THEN '0mm'
                    WHEN m.rain_mm > 0 AND m.rain_mm <= 1 THEN '0-1mm'
                    WHEN m.rain_mm > 1 AND m.rain_mm <= 5 THEN '1-5mm'
                    ELSE '>5mm'
                END as rain_bin,
                COUNT(a.id) as count
            FROM accidents a
            LEFT JOIN meteo_hourly m 
              ON a.city = m.city AND DATE_TRUNC('hour', a.occured_at) = m.observed_hour
            WHERE a.city = $1
            GROUP BY rain_bin;
        `;
        const result = await pool.query(query, [city]);
        res.json(result.rows);

    } catch (err) {
        res.status(500).json({ error: err.message });
    
    }
});

// ROUTE 3 : Température
app.get('/stats/accidents-by-temp', async (req, res) => {
    const city = (req.query.city || 'Paris').trim();
    try {
        const query = `
            SELECT 
                CASE 
                    WHEN m.temp_c < 0 THEN '< 0°C (Gel)'
                    WHEN m.temp_c >= 0 AND m.temp_c < 10 THEN '0-10°C'
                    WHEN m.temp_c >= 10 AND m.temp_c < 20 THEN '10-20°C'
                    ELSE '> 20°C'
                END as temp_bin,
                COUNT(a.id) as count
                m.temp_c as temperature,

            FROM accidents a
            LEFT JOIN meteo_hourly m 
              ON a.city = m.city AND DATE_TRUNC('hour', a.occured_at) = m.observed_hour
            WHERE a.city = $1
            GROUP BY temp_bin;
        `;
        const result = await pool.query(query, [city]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log('API prête et propre !');
});