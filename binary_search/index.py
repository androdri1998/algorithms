def binary_search(arr, item):
    smaller = 0
    bigger = len(arr) - 1
    while smaller <= bigger:
        middle = int((smaller + bigger) / 2)
        kick = arr[middle]
        if kick == item:
            return middle
        if str(kick) > str(item):
            bigger = middle - 1
        else:
            smaller = middle + 1

    return None


# function's use case
my_arr = ['cautious', 'chemical', 'eminent', 'fabulous',
          'friendly', 'great', 'harmonious', 'little', 'obvious']

print(binary_search(my_arr, 'little'))
print(binary_search(my_arr, 'chemical'))
print(binary_search(my_arr, 'non-valid-value'))
