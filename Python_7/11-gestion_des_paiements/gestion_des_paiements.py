"""exercice"""

__author__ = "sifoua_l"


def calculate_total(cart: list) -> float:
    """exercice"""
    total = 0.0
    totalf = 0
    for item in cart:
        name, price, quantity = item
        total = price * quantity
        totalf += total
    return totalf


def process_payment(cart: list, amount_available: float, method: str) -> str:
    total = calculate_total(cart)
    if total <= amount_available and method == "carte":
        return ("Paiement accepté par carte")
    elif total >= amount_available and method == "carte":
        return ("Fonds insuffisants")
    elif total <= amount_available and method == "espèces":
        return ("Paiement accepté par espèces")
    else:
       # total > amount_available and method == "espèces":
        return ("Fonds insuffisants")
