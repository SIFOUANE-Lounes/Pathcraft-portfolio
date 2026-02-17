"""exercice"""

__author__ = "sifoua_l"


def multiplication_table(n: int) -> list:
    """exercice"""
    t = 1
    l = []
    while t <= 10:
        l.append(n*t)
        t += 1
    return print(l)
