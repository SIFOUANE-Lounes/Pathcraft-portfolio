"""exercice"""

__author__ = "sifoua_l"


def factorial(n: int) -> int:
    """exercice"""
    if n == 1 or n == 0:
        return 1
    return n*factorial(n-1)
