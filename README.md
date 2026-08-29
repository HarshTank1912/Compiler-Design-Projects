# C Symbol Table Generator

### Compiler Design Mini Project

An **Automatic Symbol Table Generator** that analyzes a C source program and generates a symbol table containing information about identifiers such as variables, functions, and parameters.

---

## 📌 Project Overview

A **Symbol Table** is an important data structure used by a compiler to store information about identifiers used in a source program.

This project provides a simple web-based implementation that allows the user to:

* Upload a C source file
* Paste C source code
* Analyze the source program
* Automatically identify declarations
* Generate a symbol table
* Identify variables, functions, and parameters
* Determine scope
* Detect duplicate declarations
* Display line numbers and values
* Export the generated symbol table as CSV

The project runs completely in the browser and does not require a backend or database.

---

## 🎯 Objectives

The main objectives of this project are:

1. To understand the concept of a compiler symbol table.
2. To implement automatic symbol-table generation.
3. To identify identifiers from C source code.
4. To store attributes associated with identifiers.
5. To demonstrate scope management.
6. To detect duplicate declarations.
7. To provide a simple graphical interface for visualization.

---

## ⚙️ Features

### 1. C File Upload

The user can upload a `.c` source file directly into the application.

### 2. C Code Input

The user can also paste C source code into the text area.

### 3. Automatic Analysis

The application analyzes the provided source code and extracts symbol information automatically.

### 4. Symbol Identification

The system identifies:

* Variables
* Functions
* Function parameters

### 5. Symbol Attributes

The generated table contains:

* Identifier name
* Data type
* Category
* Scope
* Value
* Line number

### 6. Duplicate Detection

The system detects duplicate declarations within the same scope.

### 7. Scope Detection

The application identifies global, function, and block-level scopes.

### 8. CSV Export

The generated symbol table can be exported as a CSV file.

---

## 🧠 Concept Behind the Project

The basic working process is:

```text
C Source Program
       ↓
Read Source Code
       ↓
Remove Comments
       ↓
Analyze Source Code
       ↓
Identify Declarations
       ↓
Identify Functions
       ↓
Identify Parameters
       ↓
Determine Scope
       ↓
Store Symbol Information
       ↓
Generate Symbol Table
```

---

## 📊 Example

### Input C Program

```c
#include <stdio.h>

int globalVar = 10;
float price = 25.5;

int calculate(int a, int b)
{
    int result = a + b;
    return result;
}

int main()
{
    int age = 20;
    float salary = 50000.50;
    char grade = 'A';

    return 0;
}
```

### Generated Symbol Table

| #  | Name      | Type  | Category  | Scope     | Value    | Line |
| -- | --------- | ----- | --------- | --------- | -------- | ---- |
| 1  | globalVar | int   | Variable  | Global    | 10       | 3    |
| 2  | price     | float | Variable  | Global    | 25.5     | 4    |
| 3  | calculate | int   | Function  | Global    | -        | 6    |
| 4  | a         | int   | Parameter | calculate | -        | 6    |
| 5  | b         | int   | Parameter | calculate | -        | 6    |
| 6  | result    | int   | Variable  | calculate | a + b    | 8    |
| 7  | main      | int   | Function  | Global    | -        | 12   |
| 8  | age       | int   | Variable  | main      | 20       | 14   |
| 9  | salary    | float | Variable  | main      | 50000.50 | 15   |
| 10 | grade     | char  | Variable  | main      | 'A'      | 16   |

---

## 🛠️ Technologies Used

* **HTML** — User interface
* **CSS** — Styling and layout
* **JavaScript** — Source-code analysis and symbol-table generation

No external libraries or frameworks are required.

---

## 📁 Project Structure

```text
Symbol-Table-Generator/
│
├── index.html
├── style.css
├── script.js
├── sample.c
└── README.md
```

### File Description

| File         | Description                                      |
| ------------ | ------------------------------------------------ |
| `index.html` | Main user interface                              |
| `style.css`  | Website styling                                  |
| `script.js`  | Symbol-table generation and source-code analysis |
| `sample.c`   | Sample C program for testing                     |
| `README.md`  | Project documentation                            |

---

## ▶️ Running the Project Locally

No installation is required.

### Step 1

Download or clone this repository.

### Step 2

Open the project folder.

### Step 3

Open:

```text
index.html
```

in a web browser.

### Step 4

Upload:

```text
sample.c
```

or paste your own C program.

### Step 5

Click:

```text
Analyze Program
```

The symbol table will be generated automatically.

---

## 🌐 Live Demo

The project can be hosted using GitHub Pages.

**Live Demo:**

```text
https://YOUR_USERNAME.github.io/symbol-table-generator/
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## 🔬 Project Workflow

### Input

A C source program is provided by the user.

### Processing

JavaScript reads and analyzes the source code.

The analyzer identifies:

```text
Data Type
Identifier
Function
Parameter
Scope
Value
Line Number
```

### Output

A structured symbol table is displayed in the GUI.

---

## 📚 Compiler Design Concepts Used

This project demonstrates the following Compiler Design concepts:

* Symbol Table
* Identifiers
* Keywords
* Data Types
* Variable Declarations
* Function Declarations
* Function Parameters
* Scope
* Duplicate Declaration
* Lexical Analysis

---

## ⭐ Importance of Symbol Table

A symbol table is important because it allows a compiler to maintain information about identifiers during compilation.

It is useful for:

* Identifier lookup
* Type checking
* Scope management
* Semantic analysis
* Memory allocation
* Code generation

---

## ⚠️ Limitations

This project is a simplified educational implementation and does not implement the complete C language grammar.

It primarily handles common C constructs such as:

```c
int a;
float price = 20.5;
char grade = 'A';

int add(int a, int b)
{
    int result;
}
```

Advanced C constructs such as complex pointers, function pointers, macros, structures, unions, and advanced declarations may not be completely supported.

---

## 🚀 Future Scope

The project can be extended by adding:

* Complete lexical analyzer
* Token table generation
* Hash-table-based symbol table
* Better C grammar parsing
* Pointer and array support
* Structure and union support
* Nested scope visualization
* Semantic error detection
* Type compatibility checking
* Intermediate-code generation

---

## 👨‍💻 Project Type

**Subject:** Compiler Design

**Project:** Mini Project

**Topic:** Symbol Table Implementation

**Application:** Automatic Symbol Table Generation for C Programs

---

## 📄 Conclusion

The project demonstrates the implementation of a symbol table for C programs. It automatically analyzes source code and generates a structured table containing information about identifiers, their data types, categories, scopes, values, and line numbers.

The project provides a simple way to understand how a compiler manages identifiers during the compilation process.

---

### Made for Compiler Design Mini Project
