"""exercice"""

__author__ = "sifoua_l"


def count_char_occurrences(d: dict, char: str) -> int:
    """exercice"""
    cpt = 0
    for l in d.values():
        cpt += l.count(char)
    return cpt

d = {'a': 1, 'b': 2, 'd': 4, 'e': 5}
print(count_char_occurrences(d, "k"))  # 1
print(count_char_occurrences(d, "a"))  # 6