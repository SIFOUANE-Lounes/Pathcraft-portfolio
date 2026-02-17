"""exercice"""

__author__ = "sifoua_l"


def get_tuple_element(tpl: tuple, index: int):
    """exercice"""
    if 0 <= index < len(tpl):
        return tpl[index]
    else:
        return None
