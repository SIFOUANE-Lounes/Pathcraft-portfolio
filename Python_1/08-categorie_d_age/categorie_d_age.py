"""exercice"""

__author__ = "sifoua_l"


def age_category(age: int) -> str:
    """exercice"""
    if age < 12:
        return "enfant"
    elif age >= 12 and age < 18:
        return "ado"
    elif age >= 18 and age < 70:
        return "adulte"
    else:
        return "senior"


print(age_category(18))
