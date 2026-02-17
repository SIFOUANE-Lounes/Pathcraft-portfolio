"""exercice"""

__author__ = "sifoua_l"


def is_palindrome(word: str) -> bool:
    """exercice"""
    t = 0
    while t < len(word):
        if str(word) == str(word)[::-1]:
            t = t+1
            return True
        else:
            return False
