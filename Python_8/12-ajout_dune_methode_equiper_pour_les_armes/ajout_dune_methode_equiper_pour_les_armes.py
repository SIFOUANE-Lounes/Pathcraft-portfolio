"""exercice"""


__author__ = "sifoua_l"


class Personnage:
    """exercice"""

    def __init__(self, nom: str, points_de_vie: int, force: int):
        """la base"""
        self.nom = nom
        self.points_de_vie = points_de_vie
        self.force = force
        self.inventaire = []
        return

    def attaquer(self, autre: "Personnage"):
        """attaque"""
        autre.points_de_vie = autre.points_de_vie - self.force
        return autre.points_de_vie

    def se_presenter(self) -> str:
        """bonjour"""
        return f"Je suis {self.nom}, j'ai {self.points_de_vie} points de vie et ma force est de {self.force}."

    def ajouter_objet(self, objet: "Objet"):
        """take this"""
        self.inventaire.append(objet)
        return
    def equiper(self, arme: "Arme"):
       """exercice"""
       
       for stat, valuer in self.arme.items():
            Personnage.points_de_vie += valuer
            Personnage.force += stat

            


        
        



class Guerrier(Personnage):
    """je suis tres fort ???"""

    def __init__(self, nom: str, points_de_vie: int, force: int):
        """exercice"""
        Personnage.__init__(self, nom, points_de_vie, force)
        return


class Mage(Personnage):
    """clash royale"""

    def __init__(self, nom: str, points_de_vie: int, force: int, mana: int):
        """exercice"""
        Personnage.__init__(self, nom, points_de_vie, force)
        self.mana = mana
        return

    def lancer_sort(self, autre: "Personnage", cout: int = 1):
        """exercice"""
        autre.points_de_vie = autre.points_de_vie - 2*cout
        return


class Objet:
    """exercice"""

    def __init__(self, nom: str, effet: str, stats: dict[str, int]):
        """exercice"""
        self.nom = nom
        self.effet = effet
        self.stats = stats
        return

    def utiliser(self, personnage: "Personnage"):
        """exercice"""

        if self.effet != "potion":
            return
        for stat, valuer in self.stats.items():
            if valuer == "Potion de soin":
                personnage.points_de_vie += valuer
            elif stat == "mana":
                if isinstance(personnage, Mage):
                    personnage.mana += valuer
            elif stat == "force":
                personnage.force += valuer


class Arme(Objet):
    """exercice"""

    def __init__(self, nom: str, stats: dict[str, int]):
        """exercice"""
        self.nom = nom 
        self.stats = stats 
        return 



            


        
