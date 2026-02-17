"""exercice"""

_c_author__ = "sifoua_l"


def number_sign(n: int) -> str:
    """fonction"""
    if n > 0:
        return "positif"
    elif n < 0:
        return "négatif"
    else:
        return "nul"
