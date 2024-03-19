def generate_fibonacci_sequence(n):
    fibonacci_sequence = [0, 1]  # Initialize the sequence with the first two terms

    for i in range(2, n):
        next_term = fibonacci_sequence[i-1] + fibonacci_sequence[i-2]
        fibonacci_sequence.append(next_term)

    return fibonacci_sequence[:n]

# Ask the user to input the value of n
n = int(input("Enter the number of terms for the Fibonacci sequence: "))

# Generate the Fibonacci sequence
fibonacci_sequence = generate_fibonacci_sequence(n)

# Print the generated Fibonacci sequence
print("Fibonacci Sequence up to term", n, ":")
print(fibonacci_sequence)
