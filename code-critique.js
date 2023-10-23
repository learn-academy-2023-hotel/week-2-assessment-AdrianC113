// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

// Just by plugging in the prompt to ChatGPT without specifying the language, it automatically uses Python.
def find_first_vowel_index(input_string):
    vowels = "AEIOUaeiou"  # List of vowels
    for index, char in enumerate(input_string):
        if char in vowels:
            return index
    return -1  # Return -1 if no vowel is found in the string

# Example usage:
input_string = "Hello, World!"
result = find_first_vowel_index(input_string)
if result != -1:
    print(f"The first vowel in the string '{input_string}' is at index {result}.")
else:
    print(f"No vowels found in the string '{input_string}'.")



// Code below was created by ChatGPT after specifying the output to be in the JavaScript language.    
function findFirstVowelIndex(inputString) {
    const vowels = "AEIOUaeiou"; // Define a string containing all the vowels
    for (let index = 0; index < inputString.length; index++) {
        const char = inputString[index];
        if (vowels.includes(char)) {
            console.log(`The first vowel '${char}' is at index ${index}.`);
            return index; // Return the index if a vowel is found
        }
    }
    console.log("No vowels found in the input string.");
    return -1; // Return -1 if no vowels are found in the string
}

// Example usage:
const inputString = "Hello, World!";
findFirstVowelIndex(inputString);


// Critique the code output. 
// Things to consider in your critique: 
// Were you surprised by the output? 
// No, I was not surprised by the output. ChatGPT created a function that was easily comprehensible. The code that was given was clean and straight foward.

// Was the output what you expected? 
// Yes, the output is what I was expecting. However, how the console.log was written with a string interpolation made me realize that logged messages are more understandable when presented in a sentence rather than just presenting a set for example ${char}, ${index}, which would output e,1. 

// Is the correct output being rendered? 
// Yes, the correct output of the index of the first vowel is being rendered in the code provided.

// What do you like about the code? 
// I liked the string interpolation that was rendered in the code to make the result easier to understand. 

// What do you dislike? 
// Compared to the python code shown above, the javascript code was a bit longer and takes a few more steps to accomplish the goal. 

// Are there best practices that are not being followed? 
// I didnt think about "return -1" but I later realized that it made sense when dealing with index that start from 0 and so on.

// Would you take a different approach? 
// I may have thought about using a Higher Order Function like .split and .map to try and iterate every character of the string to achieve similar results.

// What did you learn? 
// There are many ways to achieve the same goal, whether it is a different language or a different method within each language. 