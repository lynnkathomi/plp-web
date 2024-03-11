# Store a list of words
word_list = ["apple", "banana", "grape", "kiwi", "orange", "pear", "pineapple"]

# Create a new list with words having odd character count
odd_length_words = [word for word in word_list if len(word) % 2 != 0]

# Print the result
print("Words with odd character count:")
print(odd_length_words)
