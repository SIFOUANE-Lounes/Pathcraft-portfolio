"""exercice"""

__author__ = "sifoua_l"


def remove_none(lst: list) -> list:
    """exercice"""
    for i in lst:
        if i is None:
            lst.remove(i)
    return lst
