const fs = require('fs');


const { Client } = require('pg');

const client = new Client({
    user: 'lumen_user',
    host: 'localhost',
    database: 'lumen_data',
    password: 'samir',
    port: 5433,
});

async function importAccidents() {
    await client.connect();
    console.log("Connexion réussie, création de la table accidents...");
    
    // 1. On crée la tableux
    await client.query(`
        DROP TABLE IF EXISTS accidents;
        CREATE TABLE accidents (
            accident_id TEXT PRIMARY KEY,
            city TEXT,
            occured_at TIMESTAMP,
            occured_hour TIMESTAMP
        );
    `);

    // 2. On lit le fichier CSV
    const csv = fs.readFileSync('data/processed/accidents_filtered.csv', 'utf-8');
    const lines = csv.split('\n');
    let count = 0;

    console.log("Importation des accidents en cours...");

    // 3. On insère les donnee
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const cols = line.split(','); 
        const accident_id = cols[0];
        const city = cols[1];
        const occured_at = cols[2];
        const occured_hour = cols[3];

        await client.query(
            'INSERT INTO accidents (accident_id, city, occured_at, occured_hour) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING',
            [accident_id, city, occured_at, occured_hour]
        );
        count++;
    }
    
    console.log(`OK ! ${count} accidents importés avec succès ! bravo`);
    await client.end();
}

importAccidents();