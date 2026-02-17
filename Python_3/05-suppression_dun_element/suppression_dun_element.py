"""exercice"""

__author__ = "sifoua_l"


def remove_element(lst: list, elem) -> list:
    """exercice"""
    while elem in lst : 
        if elem in lst:
             lst.remove(elem)
        return lst

    else:
        return lst
print(remove_element([2, 2, 3], 2))  # [1, 3]
