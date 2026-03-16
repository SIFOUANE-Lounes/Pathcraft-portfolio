# Documentation de l'API (Lumen Prévention)

Ce document explique comment notre page web demande les données à notre serveur. Notre serveur utilise des "routes" (comme des liens web) pour envoyer les bonnes informations à nos graphiques D3.js.

## 1. Récupérer tous les accidents
* **L'adresse (Route) :** `GET /api/accidents`
* **À quoi ça sert :** Ça renvoie la liste de tous les accidents dans les 6 villes, avec la météo qu'il faisait à ce moment précis. C'est la base pour afficher nos données.

## 2. Les statistiques pour le graphique sur la Pluie
* **L'adresse (Route) :** `GET /api/stats/meteo`
* **À quoi ça sert :** Au lieu de renvoyer tous les accidents un par un, cette route fait le calcul pour nous. Elle compte combien d'accidents ont eu lieu par temps sec, sous une petite pluie, ou sous une grosse pluie. Notre graphique D3.js n'a plus qu'à dessiner les barres.

## 3. L'analyse du Gel le matin
* **L'adresse (Route) :** `GET /api/stats/gel`
* **À quoi ça sert :** Cette route filtre uniquement les accidents qui ont eu lieu le matin (entre 6h et 10h). Elle sépare les jours où il a fait très froid (température en dessous de 0°C) et les jours normaux, pour voir si le gel provoque plus de crashs.