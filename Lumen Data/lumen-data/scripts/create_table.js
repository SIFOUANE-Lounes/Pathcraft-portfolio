const { Client } = require('pg');

const client = new Client({
    user: 'lumen_user',
    host: 'localhost',
    database: 'lumen_data',
    password: 'samir',
    port: 5433,

});

const sql = `
DROP TABLE IF EXISTS meteo_hourly;
CREATE TABLE meteo_hourly (
  city          TEXT NOT NULL,
  observed_hour TIMESTAMP NOT NULL,
  temp_c        DOUBLE PRECISION,
  wind_ms       DOUBLE PRECISION,
  rain_mm       DOUBLE PRECISION,
  PRIMARY KEY (city, observed_hour)
);

CREATE INDEX idx_meteo_city_hour ON meteo_hourly(city, observed_hour);
`;

async function createTable() {
    try {
        await client.connect();
        console.log("connexion à la base de données reussie, bravo");
        await client.query(sql);

        
        console.log("table 'meteo_hourly' créée avec succès !");
    } catch (err) {
        
        console.error("eerreur :", err.message);
    } finally {
        await client.end();
    }
}

createTable();