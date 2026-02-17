"""exercice"""

__author__ = "sifoua_l"


def grade_conversion(score: int) -> str:
    """exercice"""
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"
