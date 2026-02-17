"""exercice"""

__author__ = "sifoua_l"


def recursive_factorial(n: int) -> int:
    """exercice"""
    if n == 1 or n == 0:
        return 1
    return n*recursive_factorial(n-1)
