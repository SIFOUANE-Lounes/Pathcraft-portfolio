"""exercice"""

__author__ = "sifoua_l"


def calculate_total(cart: list) -> float:
    """exercice"""
    total = 0.0
    totalf = 0.0
    for item in cart:
        name, price, quantity = item
        total = price * quantity
        totalf += total
    return totalf
