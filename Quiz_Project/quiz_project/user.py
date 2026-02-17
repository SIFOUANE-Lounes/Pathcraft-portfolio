"""exercice"""

__author__ = "sifoua_l"
import json
import os
from utils import save_score
from utils import charger


class User:
    """exercice"""

    def __init__(self, nom):
        self.nom = nom
        base_dir = os.path.dirname(os.path.abspath(__file__))
        self.fichier = os.path.join(base_dir, "data", "utilisateurs.json")
        self.data = charger(self.fichier)


    def afficher_resultats(self):
        """exercice"""
        if self.nom not in self.data or self.data[self.nom]["scores"] == []:
            print("Aucun score enregistré pour", self.nom)
            return
        for s in self.data[self.nom]["scores"]:
            print(f"{s['theme']} : {s['score']}")

    def sauvegarder_score(self, theme, score, total):
        """exercice"""
        if self.nom not in self.data:
            self.data[self.nom] = {"scores": []}
        self.data[self.nom]["scores"].append({"theme": theme, "score": score, "total": total})
        save_score(self.fichier, self.data)
        print(" Score sauvegarde")
