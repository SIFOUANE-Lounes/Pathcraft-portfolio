"""exercice"""

__author__ = "sifoua_l"


def format_receipt(cart: list) -> str:
    """exercice"""
    total = 0.0
    totalf = 0.0
    recu = []
    if len(cart) != 0:
        for item in cart:
            name, price, quantity = item
            total = price * quantity
            totalf += total
            recu.append(f"{name}(x{quantity}) - {total:.1f}€\n ")
        recu.append(f"Total : {totalf:.2f}€")
        return "".join(recu)
    else:
        return "Total : 0€ \n "
