"""exercice"""

__author__ = "sifoua_l"


def is_leap_year(year: int) -> bool:
    """exercice"""
    return year % 4 == 0 and year % 100 != 0 or year % 400 == 0
