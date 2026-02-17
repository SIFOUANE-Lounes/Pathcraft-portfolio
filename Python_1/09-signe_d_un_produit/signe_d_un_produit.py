"""exercice"""

__author__ = "sifoua_l"


def product_sign(a: int, b: int) -> str:
    """exercice"""
    if a*b > 0:
        return "positif"
    elif a*b < 0:
        return "négatif"
    else:
        return "nul"
