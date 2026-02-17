"""exercice"""

__author__ = "sifoua_l"


def is_prime_optimized(n: int) -> bool:
    """exercice"""
    i = 2
    while i < n and n % i != 0:
        i = i + 1
    if i == n:

        return True

    else:

        return False
