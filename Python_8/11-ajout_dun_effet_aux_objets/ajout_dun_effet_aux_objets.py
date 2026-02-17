"""exercice"""

__author__ = "sifoua_l"


class Personnage:
    """exercice"""

    def __init__(self, nom: str, points_de_vie: int, force: int):
        """exercice"""
        self.nom = nom
        self.points_de_vie = points_de_vie
        self.force = force
        self.inventaire = []

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

    def ajouter_objet(self, objet: "Objet"):
        """exercice"""
        self.inventaire.append(objet)


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

    def lancer_sort(self, autre: "Personnage", cout: int = 1):
        """exercice"""
        autre.points_de_vie = autre.points_de_vie - 2 * cout


class Objet:
    """exercice"""

    def __init__(self, nom: str, effet: str, stats: dict[str, int]):
        """exercice"""
        self.nom = nom
        self.effet = effet
        self.stats = stats

    def utiliser(self, personnage: "Personnage"):
        """exercice"""
        if self.effet != "potion":
            return
        for stat, valeur in self.stats.items():
            if stat == "points_de_vie":
                personnage.points_de_vie += valeur
            elif stat == "mana" and isinstance(personnage, Mage):
                personnage.mana += valeur
            elif stat == "force":
                personnage.force += valeur
