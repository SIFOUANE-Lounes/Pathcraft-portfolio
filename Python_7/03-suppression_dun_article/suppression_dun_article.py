"""exercice"""

__author__ = "sifoua_l"


def remove_item(cart: list, name: str) -> list:
    """exercice"""
    for item in cart:
        if item[0] == name:
            cart.remove(item)
            break
    return cart
