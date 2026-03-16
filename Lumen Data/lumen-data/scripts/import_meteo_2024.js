

const { Client } = require('pg');

const cities = [
    { name: 'Paris', lat: 48.8566, lon: 2.3522 },
    { name: 'Rennes', lat: 48.1173, lon: -1.6778 },
    { name: 'Toulouse', lat: 43.6047, lon: 1.4442 },
    { name: 'Lyon', lat: 45.7500, lon: 4.8500 },
    { name: 'Marseille', lat: 43.2965, lon: 5.3698 },

    { name: 'Lille', lat: 50.6292, lon: 3.0573 }
];

const client = new Client({
    user: 'lumen_user', host: 'localhost', database: 'lumen_data', password: 'samir', port: 5433,
});

async function importMeteo() {

    await client.connect();
    console.log("connecte à la base...");

    for (const city of cities) {
        console.log(`Récupération pour ${city.name}...`);


        const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${city.lat}&longitude=${city.lon}&start_date=2024-01-01&end_date=2024-12-31&hourly=temperature_2m,rain,wind_speed_10m&timezone=Europe/Paris`;
        
        const response = await fetch(url);
        const data = await response.json();
        let count = 0;

        for (let i = 0; i < data.hourly.time.length; i++) {
            const time = data.hourly.time[i] + ":00"; 
            const temp = data.hourly.temperature_2m[i] || 0;
            const rain = data.hourly.rain[i] || 0;
            const wind = (data.hourly.wind_speed_10m[i] || 0) / 3.6; 

            const query = `
                INSERT iNTO meteo_hourly (city, observed_hour, temp_c, wind_ms, rain_mm)
                VALUES ($1, $2, $3, $4, $5)
                ON CONFLICT (city, observed_hour) DO NOTHING;
            `;
            await client.query(query, [city.name, time, temp, wind, rain]);
            count++;
        }
        console.log(`bravo ${count} lignes inserees pour ${city.name}`);
    }await client.end();
}importMeteo();