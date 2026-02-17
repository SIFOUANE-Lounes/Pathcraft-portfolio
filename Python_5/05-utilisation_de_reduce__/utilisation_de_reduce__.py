"""exercice"""

__author__ = "sifoua_l"

from functools import reduce


def product(numbers: list) -> int:
    """exercice"""
    return reduce(lambda x, y: x * y, numbers, 1)
