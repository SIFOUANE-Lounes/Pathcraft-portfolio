"""exercice"""

__author__ = "sifoua_l"


def safe_divide(a: int, b: int) -> float:
    """exercice"""
    if b != 0:
        return a/b
    else:
        return "Erreur : division par zéro"
