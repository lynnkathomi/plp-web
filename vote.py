# Prompt the user to enter their age
age = int(input("Welcome! Please enter your age to check if you are eligible to vote: "))

# Check if the age is greater than or equal to 18
if age >= 18:
    print("Congratulations! 🎉 You've unlocked the voting achievement! 🗳️ You are eligible to vote.")
else:
    print("Oops! 🙈 Looks like you need a few more levels to unlock the voting feature. 🚫 You are not eligible to vote yet.")
