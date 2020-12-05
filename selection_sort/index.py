def find_smaller(arr):
    smaller = arr[0]
    smaller_index = 0
    for index in range(1, len(arr)):
        if arr[index] < smaller:
            smaller = arr[index]
            smaller_index = index

    return smaller_index


def selection_sort(arr):
    newArr = []
    for index in range(len(arr)):
        smaller = find_smaller(arr)
        newArr.append(arr.pop(smaller))

    return newArr


# function's use case
print(selection_sort([100, 30, 20, 1, 50, 60, 400]))
# Output: [1, 20, 30, 50, 60, 100, 400]
