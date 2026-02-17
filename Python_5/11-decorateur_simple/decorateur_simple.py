"""exercice"""

__author__ = "sifoua_l"


def debug(func):
    """exercice"""
    def wrapper():
        print("Début")
        func()
        print("Fin")
    return wrapper
