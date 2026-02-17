"""exercice"""

__author__ = "sifoua_l"


def check_number(n: int) -> str:
    """exercice"""
    if n % 3 == 0:
        return "multiple de 3"
    elif n % 4 == 0:
        return "pair"
    else:
        return "rien de spécial"
