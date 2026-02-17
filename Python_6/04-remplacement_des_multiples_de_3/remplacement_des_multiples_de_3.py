"""exercice"""

__author__ = "sifoua_l"


def create_list(n: int) -> list:
    """exercice"""
    lounes = []
    i = 1
    for i in range(1, n+1):
        lounes.append(i)
    return lounes


def replace_multiples_of_3(numbers: list) -> list:
    """exercice"""
    return ["Fizz" if x % 3 == 0 else x for x in numbers]
