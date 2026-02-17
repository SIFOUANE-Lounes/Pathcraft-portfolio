"""exercice"""

__author__ = "sifoua_l"


def create_list(n: int) -> list:
    """exercice"""
    lounes = []
    i = 1
    for i in range(1, n+1):
        lounes.append(i)
    return lounes


def filter_even_numbers(numbers: list[int]) -> list:
    """exercice"""
    return [x for x in numbers if x % 2 == 0]


def sum_numbers(numbers: list) -> int:
    """exercice"""
    return sum(numbers)
