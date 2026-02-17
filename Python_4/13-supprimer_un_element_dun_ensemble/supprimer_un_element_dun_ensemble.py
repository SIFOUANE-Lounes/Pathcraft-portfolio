"""exercice"""

__author__ = "sifoua_l"


def remove_from_set(s: set, elem) -> set:
    """exercice"""
    s.pop(elem, None)
    return s
print(remove_from_set({1, 2, 3}, 2))