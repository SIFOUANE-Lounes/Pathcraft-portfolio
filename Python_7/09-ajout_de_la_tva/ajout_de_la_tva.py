"""exercice"""

__author__ = "sifoua_l"


def add_vat(cart: list, vat: float) -> float:
    """exercice"""
    totalf = 0
    for item in cart:
        name, price, quantity = item
        total = price * quantity
        totalf += total
        resul = totalf + (vat * totalf)/100
    return (f"{resul:.2f}")

