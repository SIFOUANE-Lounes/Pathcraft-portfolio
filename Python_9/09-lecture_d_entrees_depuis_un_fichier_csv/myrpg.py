"""exercice"""

__author__ = "sifoua_l"
import os
import csv


def lire_objets_marche(fichier: str) -> list[tuple[str, int]]:
    """exo"""
    if not os.path.isfile(fichier):
        return []

    objets = []
    with open(fichier, 'r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for raw in reader:
            nom = raw['nom']
            prix = int(raw['prix'])
            objets.append((nom, prix))

    return sorted(objets, key=lambda x: x[1])
