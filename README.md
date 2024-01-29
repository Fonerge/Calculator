# A simple Calculator on ReactJS

## Description

This project is a simple web-based calculator application built using ReactJS. The calculator provides a straightforward interface with numeric buttons (0-9) and standard arithmetic operators (+, -, *, /). Users can perform basic mathematical calculations, and the application includes functionality for addition, subtraction, multiplication, and division.

## Key Features

1. **User-Friendly Interface:**
   - Clean and intuitive interface with a dedicated display area for input and results.
   - Convenient arrangement of numeric buttons and operators for easy access.

2. **Real-Time Calculation:**
   - Dynamic, real-time calculation as users input numbers and operators.
   - Results are displayed instantly, providing a smooth user experience.

3. **Error Handling:**
   - Robust error handling to address potential issues during calculation (e.g., division by zero, invalid expressions).
   - Displays an "Error" message in case of calculation errors.

4. **Clear Functionality:**
   - "C" button allows users to clear the current input, facilitating correction or starting a new calculation.
   - Quick reset to zero for a fresh start.

5. **Equals (=) for Result:**
   - "=" button triggers the calculation of the entered expression and displays the result.
   - Utilizes the `eval` function to dynamically evaluate expressions.

## How to Use

1. **Numeric Input:**
   - Click on the numeric buttons (0-9) to input digits for your calculation.

2. **Arithmetic Operators:**
   - Use the buttons for addition (+), subtraction (-), multiplication (*), and division (/) for respective operations.

3. **Equals (=) for Result:**
   - Click on the "=" button to calculate and display the result of the entered expression.

4. **Clear (C):**
   - Press the "C" button to clear the current input and start a new calculation.

## Technologies Used

- ReactJS

## Project Structure

- `App.js`: Main component managing the calculator layout and logic.
- `Input.js`: Component for displaying the input and result.
- `Button.js`: Component for rendering buttons and handling click events.

## Note

This project is designed for educational purposes, serving as a practical introduction to basic ReactJS concepts and state management.


## How do I start using it?
Git commad for downloading a project:
```bash
git clone "https://github.com/Fonerge/Calculator.git"
```
The command to start the project:
```
cd .\Calculator\
npm start
```
After this procedure, you should have a local server running on port 3000
(http://localhost:3000/)
## Warning!

Don't forget to install [NodeJS](https://nodejs.org/en) on your computer.
