#creating an empty dictionary
personal_info={}
#getting the personal info 
personal_info["name"]=input("Enter your name:")
personal_info["age"]=int(input("Enter your age:"))
personal_info["favorite color"]=input("Whats your favorite color:")
#print personal information in dictionary
print("\nPersonal information:")
for key,value in personal_info.items():
    print(f"{key.capitalize()}:{value}")