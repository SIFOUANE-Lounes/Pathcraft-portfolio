"""exercice"""

__author__ = "sifoua_l"


def calculate_detailed_change(change: float) -> dict:
    """exercice"""
    monie = [500, 200, 100, 50, 20, 10, 5, 2,
             1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
    a_rendre = {}
    for piace in monie:
        n = int(change // piace)
        if n >= 1:
            a_rendre[piace] = n
            change -= n * piace
    return a_rendre
