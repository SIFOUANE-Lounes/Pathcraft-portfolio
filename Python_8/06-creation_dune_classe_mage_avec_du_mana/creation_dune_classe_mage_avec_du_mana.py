"""exercice"""

__author__ = "sifoua_l"


class Personnage:
    """exercice"""

    def __init__(self, nom: str, points_de_vie: int, force: int):
        """exercice"""
        self.nom = nom
        self.points_de_vie = points_de_vie
        self.force = force

    def attaquer(self, autre: "Personnage"):
        """exercice"""
        autre.points_de_vie = autre.points_de_vie - self.force
        return autre.points_de_vie

    def se_presenter(self) -> str:
        """exercice"""
        return (
            f"Je suis {self.nom}, j'ai {self.points_de_vie} points de vie "
            f"et ma force est de {self.force}."
        )


class Guerrier(Personnage):
    """exercice"""

    def __init__(self, nom: str, points_de_vie: int, force: int):
        """exercice"""
        Personnage.__init__(self, nom, points_de_vie, force)


class Mage(Personnage):
    """exercice"""

    def __init__(self, nom: str, points_de_vie: int, force: int, mana: int):
        """exercice"""
        Personnage.__init__(self, nom, points_de_vie, force)
        self.mana = mana
        return
