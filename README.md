# C Symbol Table Generator

## Description

A **C Symbol Table Generator** developed as a Compiler Design mini project. The application analyzes a C source program and automatically generates a symbol table containing information about variables, functions, parameters, data types, scopes, values, and line numbers.

## 🔗 Live Demo

**Live Demo:**
https://harshtank1912.github.io/Compiler-Design-Projects/
---

## Project Overview

A **Symbol Table** is a data structure used by a compiler to store information about identifiers present in a source program.

This project takes a C source file as input, analyzes the source code, identifies declarations and functions, and generates a structured symbol table automatically.

### Working Process

```text
C Source File
      ↓
Read Source Code
      ↓
Analyze Declarations
      ↓
Identify Identifiers
      ↓
Identify Functions & Parameters
      ↓
Determine Scope
      ↓
Create Symbol Table
      ↓
Display Output
```

---

## Features

* Accepts C source file as input
* Automatically analyzes source code
* Identifies variables
* Identifies functions
* Identifies function parameters
* Detects data types
* Determines scope
* Records initial values
* Records source-code line numbers
* Detects duplicate declarations
* Provides identifier search
* Displays the generated symbol table in the terminal
* Simple and easy-to-use command-line interface

---

## Objectives

* To understand the concept of a Symbol Table in Compiler Design.
* To implement a basic Symbol Table using C.
* To automatically extract identifiers from a C program.
* To store attributes associated with identifiers.
* To demonstrate scope and symbol management.
* To understand how symbol information is used during compilation.

---

## Steps for Working Demo

### Step 1 — Compile the Program

```bash
gcc symbol_table.c -o symbol_table
```

### Step 2 — Run the Program

**Windows:**

```bash
symbol_table.exe
```

**Linux/macOS:**

```bash
./symbol_table
```

### Step 3 — Provide C Source File

When prompted, enter:

```text
Enter C source file name: sample.c
```

### Step 4 — Automatic Analysis

The program reads and analyzes the C source file.

### Step 5 — Display Symbol Table

Select:

```text
1. Display Symbol Table
```

The generated symbol table is displayed in the terminal.

### Step 6 — Search Symbol

Select:

```text
2. Search Symbol
```

Enter an identifier to view its stored information.

---

## Symbol Table

The project stores the following information for each symbol:

| Attribute | Description                      |
| --------- | -------------------------------- |
| Name      | Identifier name                  |
| Type      | Data type                        |
| Category  | Variable, Function, or Parameter |
| Scope     | Scope of the identifier          |
| Value     | Initial value                    |
| Line      | Line number in source code       |

---

## Example

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

|  # | Name      | Type  | Category  | Scope     | Value    | Line |
| -: | --------- | ----- | --------- | --------- | -------- | ---: |
|  1 | globalVar | int   | Variable  | Global    | 10       |    3 |
|  2 | price     | float | Variable  | Global    | 25.5     |    4 |
|  3 | calculate | int   | Function  | Global    | -        |    6 |
|  4 | a         | int   | Parameter | calculate | -        |    6 |
|  5 | b         | int   | Parameter | calculate | -        |    6 |
|  6 | result    | int   | Variable  | calculate | a + b    |    8 |
|  7 | main      | int   | Function  | Global    | -        |   12 |
|  8 | age       | int   | Variable  | main      | 20       |   14 |
|  9 | salary    | float | Variable  | main      | 50000.50 |   15 |
| 10 | grade     | char  | Variable  | main      | 'A'      |   16 |

---

## Importance

Symbol Tables are an important part of a compiler because they help maintain and retrieve information about identifiers during compilation.

They are useful for:

* Identifier lookup
* Type checking
* Scope management
* Semantic analysis
* Memory allocation
* Code generation
* Detecting declaration-related errors

---

## Output

The program displays the generated symbol table in the terminal:

```text
==========================================================================
                         SYMBOL TABLE
==========================================================================

No.  Name               Type         Category     Scope           Value           Line
--------------------------------------------------------------------------
1    globalVar          int          Variable     Global          10              3
2    price              float        Variable     Global          25.5            4
3    calculate          int          Function     Global          -               6
4    a                  int          Parameter    calculate       -               6
5    b                  int          Parameter    calculate       -               6
6    result             int          Variable     calculate       a + b           8
7    main               int          Function     Global          -               12
8    age                int          Variable     main            20              14
9    salary             float        Variable     main            50000.50        15
10   grade              char         Variable     main            'A'             16
==========================================================================
```

For duplicate declarations, the program displays a warning such as:

```text
[WARNING] Duplicate declaration: age
```

---

## Limitations

* This is a simplified educational implementation.
* It does not implement the complete C language grammar.
* Advanced pointers and function pointers may not be fully supported.
* Structures, unions, macros, and complex declarations are not completely handled.
* The implementation is intended for demonstrating the basic concept of Symbol Tables in Compiler Design.
