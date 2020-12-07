def find_key(arr, current_position):
    if(len(arr) == current_position):
        return None

    if(str(arr[current_position]) == "box_with_key"):
        return current_position

    return find_key(arr, current_position + 1)


# function's use case
my_arr_with_key = ["box_without_key", "box_without_key", "box_without_key",
                   "box_without_key", "box_with_key", "box_without_key", "box_without_key", "box_without_key"]
my_arr_without_key = ["box_without_key", "box_without_key", "box_without_key",
                      "box_without_key", "box_without_key", "box_without_key", "box_without_key"]

index_key_from_my_arr_with_key = find_key(my_arr_with_key, 0)
index_key_from_my_arr_without_key = find_key(my_arr_without_key, 0)

if(index_key_from_my_arr_with_key != None):
    print("Box with key found on index: "+str(index_key_from_my_arr_with_key))
else:
    print("Box with key not found")
# Output: Box with key found on index: 4

if(index_key_from_my_arr_without_key != None):
    print("Box with key found on index: " +
          str(index_key_from_my_arr_without_key))
else:
    print("Box with key not found")
# Output: Box with key not found
