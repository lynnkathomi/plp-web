# Random list containing strings, tuples, and lists
random_list = ['a', ('a', 'b'), ('a', 'b'), [3, 4]]

# Count occurrences of ('a', 'b') and [3, 4]
count_tuple = random_list.count(('a', 'b'))
count_list = random_list.count([3, 4])

print(f"The count of ('a', 'b') is: {count_tuple}")  # Output: The count of ('a', 'b') is: 2
print(f"The count of [3, 4] is: {count_list}")       # Output: The count of [3, 4] is: 1
