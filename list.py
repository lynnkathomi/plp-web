# Accept user input for a list of integers
user_input = input("Enter a list of numbers separated by commas: ")

# Split the input string into individual elements
user_list = user_input.split(',')

# Convert the elements to integers
for i in range(len(user_list)):
    user_list[i] = int(user_list[i])

# Calculate the sum of all elements in the list
sum_list = sum(user_list)

# Display the result
print(f"Sum of all elements in the given list: {sum_list}")
