"""exercice"""

__author__ = "sifoua_l"

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
