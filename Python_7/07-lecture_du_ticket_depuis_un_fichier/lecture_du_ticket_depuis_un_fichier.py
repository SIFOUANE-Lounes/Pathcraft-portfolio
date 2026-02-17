"""exercice"""

__author__ = "sifoua_l"


def load_receipt(filename: str) -> str:
    """exercice"""
    with open(filename, "r", encoding="utf-8") as f:
        lounes = f.read()
    return lounes
