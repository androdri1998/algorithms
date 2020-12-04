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

print("Item: 'little' | result: " + str(binary_search(my_arr, 'little')))
# Output: Item: 'little' | result: 7
print("Item: 'chemical' | result: " + str(binary_search(my_arr, 'chemical')))
# Output: Item: 'chemical' | result: 1
print("Item: 'non-valid-value' | result: " +
      str(binary_search(my_arr, 'non-valid-value')))
# Output: Item: 'non-valid-value' | result: None
