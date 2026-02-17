"""exercice"""

__author__ = "sifoua_l"


def remove_vowels_from_dict(d: dict) -> dict:
    """exercice"""
    for key, value in d:
        if d[key] == "a" or "e" or "u" or "i" or "o" or "y":
            d.pop(key, None)
        return d
    return d


d = {"abricot": 42, "prune": 1, "peche": 21}
print(remove_vowels_from_dict(d))
# {"prune": 42, "peche": 21}
