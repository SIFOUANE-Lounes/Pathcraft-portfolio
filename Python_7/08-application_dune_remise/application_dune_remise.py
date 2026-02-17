"""exercice"""

__author__ = "sifoua_l"


def apply_discount(cart: list, discount: float) -> float:
    """exercice"""
    totalf = 0
    for item in cart:
        name, price, quantity = item
        total = price * quantity
        totalf += total
        result = totalf - (discount * totalf)/100
    return (f"{result:.2f}")
