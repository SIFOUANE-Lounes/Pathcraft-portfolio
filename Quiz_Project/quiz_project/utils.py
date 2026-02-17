"""exercice"""

__author__ = "sifoua_l"
import json
import os
import csv


def charger(fichier):
    """exercice"""
    if os.path.exists(fichier):
        with open(fichier, "r", encoding="utf-8") as f:
            return json.load(f)


def save_score(fichier, data):
    """exercice"""
    try:
        with open(fichier, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=4)
    except:
        print(f"Impossible d'ecrire le fichier")
