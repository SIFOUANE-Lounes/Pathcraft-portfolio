# Dictionnaire de Données - Lumen Prévention

Voici les données que nous avons décidé de garder pour notre projet et pourquoi nous les avons choisies. 

## 1. Les données des Accidents
Nous avons supprimé beaucoup de colonnes inutiles (comme l'adresse exacte, le type de route ou le département) pour ne pas surcharger notre base de données. Voici ce qu'on a gardé :

* **ville** : Indispensable pour ne garder que les 6 villes imposées par le sujet (Paris, Lyon, Marseille, etc.).
* **occured_at (Date et Heure)** : C'est la colonne la plus importante. Elle nous permet de faire le lien avec la météo qu'il faisait à cette heure précise.
* **gravite** : Pour savoir si l'accident était grave ou léger, et faire nos graphiques dessus.
* **latitude et longitude** : Les coordonnées GPS pour avoir la localisation exacte.

## 2. Les données Météo
Nous avons récupéré la météo heure par heure pour l'année 2024. Voici ce qu'on a gardé :

* **ville** : Pour associer la météo à la bonne ville.
* **observed_at (Date et Heure)** : Pour associer la météo à l'heure de l'accident.
* **temperature_c (Température)** : Pour repérer les moments où il fait moins de 0°C (pour analyser l'effet du gel le matin).
* **pluie_mm (Pluie)** : Pour classer la météo (Temps sec, petite pluie, grosse pluie) et voir si ça cause plus d'accidents.