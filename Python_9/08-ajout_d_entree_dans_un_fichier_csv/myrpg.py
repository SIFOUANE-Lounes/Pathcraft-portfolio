"""exercice"""

__author__ = "sifoua_l"


import csv
import os


def ajouter_object_marche(nom: str, prix: int, fichier: str):
    """exercice"""
    fichier_existe = os.path.isfile(fichier)

    with open(fichier, 'a', newline='', encoding='utf-8') as csvfile:

        writer = csv.writer(csvfile)

        if not fichier_existe:
            writer.writerow(['nom', 'prix'])
        writer.writerow([nom, prix])
