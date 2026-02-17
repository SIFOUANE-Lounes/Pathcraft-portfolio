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
            recu.append(f"{name} (x{quantity:.2f}) - {total:.2f}€")
        recu.append(f"Total : {totalf:.2f}€")
        return "\n".join(recu)

    else:
        return "Total : 0€ \n"


def save_receipt(filename: str, content: str):
    """exercice"""
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)
