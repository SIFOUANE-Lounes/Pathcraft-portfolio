"""exercice"""

__author__ = "sifoua_l"


class Personnage:
    """exercice"""

    def __init__(self, nom: str, points_de_vie: int, force: int):
        """exercice"""
        self.nom = nom
        self.points_de_vie = points_de_vie
        self.force = force

    def se_presenter(self) -> str:
        """exercice"""
        return (
            f"Je suis {self.nom}, j'ai {self.points_de_vie} points de vie "
            f"et ma force est de {self.force}."
        )
