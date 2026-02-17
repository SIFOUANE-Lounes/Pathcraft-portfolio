"""exercice"""

__author__ = "sifoua_l"


class Etre:
    """exercice"""

    def __init__(self, nom: str, points_de_vie: int):
        """exercice"""
        self.nom = nom
        self.points_de_vie = points_de_vie


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
