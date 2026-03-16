# TIC-DAT2 — Observatoire Accidents & Conditions Météorologiques

Projet réalisé dans le cadre du module **TIC-DAT2** pour **Lumen Prévention**.

## Objectif

Concevoir une première version fonctionnelle d’un observatoire croisant :
- les données d’accidents corporels de la circulation routière,
- les données météorologiques,

afin de :
- détecter des situations à risque récurrentes,
- produire des indicateurs compréhensibles,
- proposer des recommandations utiles à la prévention.

## Périmètre

L’analyse porte uniquement sur les villes suivantes :
- Paris
- Rennes
- Toulouse
- Lyon
- Marseille
- Lille

Période d’étude :
- année 2024

## Structure du projet

- `docs/` : documentation du projet
- `scripts/` : scripts de traitement et d’import
- `data/processed/` : données préparées pour l’import
- `data/raw/` : données sources brutes
- `README.md` : documentation générale

## Données utilisées

### Accidents
Source : base BAAC 2024  
Fichiers exploités :
- `caract-2024.csv`
- `lieux-2024.csv`
- `vehicules-2024.csv`
- `usagers-2024.csv`

### Météo
Les données météo sont importées via le script prévu dans le projet.

## Traitement des données accidents

Le script `scripts/filter_accidents_2024.py` permet de :
- lire les données accidents,
- filtrer les 6 villes imposées,
- prendre en compte les arrondissements de Paris, Lyon et Marseille,
- fusionner la date et l’heure dans la colonne `occured_at`,
- conserver les colonnes utiles à l’analyse,
- générer le fichier `data/processed/accidents_filtered.csv`.

## Base de données

Le projet utilise PostgreSQL avec la configuration suivante :
- base : `lumen_data`
- utilisateur : `lumen_user`
- hôte : `localhost`
- port : `5433`

## Scripts principaux

- `scripts/filter_accidents_2024.py`
- `scripts/create_table.js`
- `scripts/import_accidents.js`
- `scripts/import_meteo_2024.js`

## Exécution

### Générer le fichier accidents filtré
```bash
python3 scripts/filter_accidents_2024.py