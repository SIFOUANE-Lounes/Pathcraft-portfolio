"""exercice"""

__author__ = "sifoua_l"
import os
import csv
import json


class Etre:
    """exercice"""

    def __init__(self, nom: str, points_de_vie: int):
        """exercice"""
        self.nom = nom
        self.points_de_vie = points_de_vie
        self.force = 0

    @property
    def force(self):
        """exercice"""
        return self._force

    @force.setter
    def force(self, valeur):
        """exercice"""
        if isinstance(valeur, (int, float)) and valeur >= 0:
            self._force = valeur


class Aventurier(Etre):
    """exercice"""

    def __init__(self, nom: str, points_de_vie: int):
        """exercice"""
        super().__init__(nom, points_de_vie)


class Marchand(Etre):
    """exercice"""

    def __init__(self, nom: str, points_de_vie: int):
        """exercice"""
        super().__init__(nom, points_de_vie)


def sauvegarder_personnage(personnage: Etre, fichier: str):
    """exercice"""
    with open(fichier, 'w', encoding='utf-8') as f:
        json.dump(personnage.__dict__, f, indent=4)


def charger_personnage(fichier: str) -> Etre:
    """exercice"""
    with open(fichier, 'r', encoding='utf-8') as file:
        donnees = json.loads(file)
    return donnees


class Item:
    """exercice"""

    def __init__(self, nom: str, prix: int):
        """exercice"""
        self.nom = nom
        self.prix = prix

    def __repr__(self) -> str:
        """exercice"""
        return f"Item(nom={self.nom}, prix={self.prix})"


class Inventaire:
    """exercice"""

    def __init__(self):
        """exercice"""
        self.items = []

    def ajoute_item(self, item):
        """exercice"""
        self.items.append(item)

    def retire_item(self, item):
        """exercice"""
        if item in self.items:
            self.items.remove(item)

    def afficher_item(self):
        """exercice"""
        for item in self.items:
            print(f"{item.name} - {item.image}")

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

    def ajouter_object_marche(nom: str, prix: int, fichier: str):
        """exercice"""
        fichier_existe = os.path.isfile(fichier)

        with open(fichier, 'a', newline='', encoding='utf-8') as csvfile:

            writer = csv.writer(csvfile)

        if not fichier_existe:
            writer.writerow(['nom', 'prix'])
        writer.writerow([nom, prix])
