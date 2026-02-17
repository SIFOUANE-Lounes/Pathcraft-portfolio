"""exercice"""

__author__ = "sifoua_l"


def sum_recursive(n: int) -> int:
    """exercice"""
    if n == 0:
        return 0
    else:
        return n + sum_recursive(n - 1)
