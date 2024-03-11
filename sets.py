# Get user input for the first set
input_set1 = input("Enter integers for the first set (comma-separated): ")
set1 = set(map(int, input_set1.split(',')))

# Get user input for the second set
input_set2 = input("Enter integers for the second set (comma-separated): ")
set2 = set(map(int, input_set2.split(',')))

# Find the common elements between the sets
common_elements = set1 & set2

# Print the common elements
print("Common elements between the sets:")
print(common_elements)
