"""exercice"""

__author__ = "sifoua_l"


def is_anagram(word1: str, word2: str) -> bool:
    """exercice"""
    if len(word1) != len(word2):
        return False
    else:
        word1 = sorted(word1.upper())
        word2 = sorted(word2.upper())
    return word1 == word2
