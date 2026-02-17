"""exercice"""

__author__ = "sifoua_l"


def calculate_change(cart: list, amount_paid: float) -> float:
    """exercice"""
    totalf = 0
    for item in cart:
        name, quantity, price = item
        total = price * quantity
        totalf += total
        if amount_paid - totalf > 0:
            return amount_paid - totalf
        else:
            return 0.0
