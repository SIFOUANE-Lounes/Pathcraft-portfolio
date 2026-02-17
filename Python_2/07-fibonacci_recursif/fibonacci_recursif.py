"""exercice"""

__author__ = "sifoua_l"


def fibonacci(n: int) -> int:
    """exercice"""
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
