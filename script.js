const oldQuestions = [
  {
    q: "For the following statements to print 011002, we need to replace ? with .........:\nfor (int x=1; x<=2; x++)\n  for (int y=1; y<=3; y++)\n    Console.Write(x? y + \" \");", 
    options: ["+", "*", "/", "%"], 
    correct: 3,
    explanation: "The modulus operator (%) returns the remainder. For example, 1%1=0, 1%2=1, 1%3=1, 2%1=0, 2%2=0, 2%3=2, which results in the sequence 011002."
  },
  {
    q: "What will be the result of the comparison x > y where x=7 and y=10?", 
    options: ["True", "False", "0", "Error"], 
    correct: 1,
    explanation: "Since 7 is not greater than 10, the condition is false, returning the boolean value False."
  },
  {
    q: "What type of data does the Console.ReadLine() method return in C#?", 
    options: ["int", "string", "double", "char"], 
    correct: 1,
    explanation: "Console.ReadLine() is designed to read a line of characters and always returns the result as a string."
  },
  {
    q: "Which of the following is a correct way to define a method in C#?", 
    options: ["public void MyMethod()", "public int MyMethod {}", "public void MyMethod[]", "public static int MyMethod()"], 
    correct: 0,
    explanation: "A proper method definition requires an access modifier, return type, name, and parentheses for parameters."
  },
  {
    q: "Which of the following is NOT a structured programming language?", 
    options: ["C#", "Java", "COBOL", "Python"], 
    correct: 2,
    explanation: "COBOL is primarily an imperative/procedural language and is often contrasted with more modern structured/object-oriented languages like C#."
  },
  {
    q: "After executing the following statements, the output will be:\nint i=3;\nfor (i=1; i>=5; i++)\n  Console.Write(i + \" \");", 
    options: ["12345", "3 4 5", "nothing", "an error"], 
    correct: 2,
    explanation: "The loop starts at i=1 but the condition is i>=5. Since 1 is not >= 5, the loop body never runs."
  },
  {
    q: "Which keyword is used to pass a parameter by reference in C#?", 
    options: ["in", "ref", "reference", "byref"], 
    correct: 1,
    explanation: "The 'ref' keyword tells the compiler that the argument is passed by reference, not by value."
  },
  {
    q: "What is the role of a compiler in programming?", 
    options: ["Converts high-level code to machine code for execution", "Writes source code in programming languages", "Helps in debugging code during runtime", "Executes code directly without conversion"], 
    correct: 0,
    explanation: "A compiler translates human-readable source code into machine-readable instructions (binary code)."
  },
  {
    q: "What is the output of the statement Console.WriteLine(1+2*3);?", 
    options: ["1", "3", "7", "9"], 
    correct: 2,
    explanation: "Multiplication has higher precedence than addition. So, 2*3=6, then 1+6=7."
  },
  {
    q: "For the following statements to print 5 1, we need to replace ? with:\nfor (int i=5; i>=1; i ? 4)\n  Console.Write(i + \" \");", 
    options: ["+=", "-=", "*=", "/="], 
    correct: 1,
    explanation: "To decrease the value of i from 5 to 1, we need the subtraction assignment operator (-=)."
  },
  {
    q: "What is the output of following code?\nint x=40, y=10;\nif (x>=30) Console.Write (\"Ok\");\nelse Console.Write (\"Sorry\");\nConsole.Write (\"Bye\");", 
    options: ["Sorry Bye", "Ok Bye", "Ok Sorry", "Bye"], 
    correct: 1,
    explanation: "The condition 40>=30 is true, so it prints 'Ok'. 'Bye' is outside the if/else block, so it prints regardless."
  },
  {
    q: "Which C# statement allows for checking multiple cases based on a single variable or expression?", 
    options: ["if", "for", "switch", "foreach"], 
    correct: 2,
    explanation: "The 'switch' statement is used for multi-way branching based on the value of a single variable."
  },
  {
    q: "What is the size of a bool data type in C#?", 
    options: ["1 bit", "1 byte", "2 bytes", "8 bytes"], 
    correct: 1,
    explanation: "In C#, a boolean value typically occupies 1 byte (8 bits) of memory."
  },
  {
    q: "After executing the following statements, the output will be:\nint i=3;\nfor (i=1; i<=5; i++) {\n  if (i==4) continue;\n  Console.Write(i + \" \");\n}", 
    options: ["12345", "1 2 3 5", "3 4 5", "3 5"], 
    correct: 1,
    explanation: "The 'continue' statement skips the rest of the loop for that iteration. When i=4, it skips printing and moves to i=5."
  },
  {
    q: "Which of the following is an invalid identifier name in C#?", 
    options: ["age", "_totalPrice", "total-price", "totalPrice"], 
    correct: 2,
    explanation: "Identifiers cannot contain hyphens (-). Only letters, digits (not at start), and underscores are allowed."
  },
  {
    q: "What does the return keyword do in a method in C#?", 
    options: ["Stops execution & returns control", "Returns value to caller", "Both A and B", "None"], 
    correct: 2,
    explanation: "The 'return' keyword terminates the method execution and can return a value to the point where the method was called."
  },
  {
    q: "Which C# statement is used for simple branching based on a condition?", 
    options: ["switch", "if", "for", "foreach"], 
    correct: 1,
    explanation: "The 'if' statement evaluates a boolean expression to decide which path of code to follow."
  },
  {
    q: "What is the correct syntax for a single-line comment in C#?", 
    options: ["/* comment */", "// comment", "// comment /*", ""], 
    correct: 1,
    explanation: "In C#, double forward slashes (//) are used for comments that last until the end of the line."
  },
  {
    q: "What keyword is used to indicate that a method does not return any value?", 
    options: ["null", "void", "return", "empty"], 
    correct: 1,
    explanation: "The 'void' keyword means the method performs an action but does not send back any data."
  },
  {
    q: "What is the result of dividing two integers (e.g., 5/2) in C#?", 
    options: ["2.5", "2", "5", "Error"], 
    correct: 1,
    explanation: "When both operands are integers, C# performs integer division and discards the remainder (5/2 = 2)."
  },
  {
    q: "The ..... keyword can be used to define a variable to store a text in memory.", 
    options: ["int", "double", "char", "string"], 
    correct: 3,
    explanation: "The 'string' type is used specifically for storing sequences of characters or text."
  },
  {
    q: "Which of the following data types is used to store a single character in C#?", 
    options: ["string", "int", "char", "decimal"], 
    correct: 2,
    explanation: "The 'char' keyword is used to store a single 16-bit Unicode character."
  },
  {
    q: "After executing the following statements, the output will be:\nint[,] x = { {1,2,3,4}, {5,6,7,8}, {9,10,11,12} };\nConsole.WriteLine (x [1, 3]);", 
    options: ["3", "7", "8", "an error"], 
    correct: 2,
    explanation: "x[1, 3] accesses the row at index 1 (second row) and column at index 3 (fourth column), which is 8."
  },
  {
    q: "The ..... method outputs data to the screen followed by a new line character.", 
    options: ["Console.Write", "Console.Writelines", "Console.WriteLine", "System.WriteLine"], 
    correct: 2,
    explanation: "Console.WriteLine() prints the input and then automatically moves the cursor to a new line."
  },
  {
    q: "After executing the following statements, the output will be:\nint[] x = {1, 2, 3, 4, 5};\nConsole.WriteLine (x[4]);", 
    options: ["2", "3", "4", "5"], 
    correct: 3,
    explanation: "Arrays are zero-indexed. Index 4 is the 5th element, which is the number 5."
  },
  {
    q: "What happens when a floating-point value (e.g., 5.35) is written without any suffix?", 
    options: ["It is considered a float", "It is considered a double", "Considered decimal", "Compilation error"], 
    correct: 1,
    explanation: "By default, any numeric literal with a decimal point is treated as a 'double' unless followed by 'f' or 'm'."
  },
  {
    q: "Which of the following is used to terminate the current case in a switch statement?", 
    options: ["continue", "return", "break", "exit"], 
    correct: 2,
    explanation: "The 'break' keyword is required to stop the code from falling through to the next case in a switch."
  },
  {
    q: "What is the output of the statement Console.WriteLine(true || false && false);?", 
    options: ["True", "False", "||", "&&"], 
    correct: 0,
    explanation: "Logical AND (&&) has priority over logical OR (||). So, true || (false && false) equals true || false, which is True."
  }
];

const newQuestions = [
  {
    q: "There are many types of Programming languages, each one has its own Purpose, strengths and weaknesses.",
    options: ["True", "False"],
    correct: 0,
    explain: "Programming languages are diverse; some are for web, others for systems or data, each with pros and cons."
  },
  {
    q: "Assembly languages are directly understandable by machines.",
    options: ["True", "False"],
    correct: 1,
    explain: "Only machine language (binary 0s and 1s) is directly understood by the CPU; Assembly needs an Assembler."
  },
  {
    q: "Identifying system inputs and outputs is performed in the design phase.",
    options: ["True", "False"],
    correct: 1,
    explain: "Identifying inputs and outputs is part of the Analysis phase, not the Design phase."
  },
  {
    q: "uint data type represents unsigned integral data type.",
    options: ["True", "False"],
    correct: 0,
    explain: "'uint' stands for unsigned integer, which means it only stores positive whole numbers."
  },
  {
    q: "Some of arithmetic operators are binary operators, where other are classified as unary operators.",
    options: ["True", "False"],
    correct: 0,
    explain: "Binary operators (like +) work on two operands, while unary operators (like ++) work on one."
  },
  {
    q: "x=7, n=4, m=2; after executing this line: int z=x++ >> 2+n/m; z will equals 3.",
    options: ["True", "False"],
    correct: 1,
    explain: "The calculation results in 0 (7 >> 4), not 3. Post-increment (x++) happens after the assignment."
  },
  {
    q: "Console.WriteLine(\"value of x=\"+x); produce the same output as Console.Write(\"\\n value of x={0}\",x).",
    options: ["True", "False"],
    correct: 0,
    explain: "Both statements will display the value of x, although the formatting (newline) is handled differently."
  },
  {
    q: "Conditional assignment is a binary operator that equivalent to if...else structure.",
    options: ["True", "False"],
    correct: 1,
    explain: "The conditional operator (?:) is a ternary operator (takes three operands), not binary."
  },
  {
    q: "Constant variable is declared and initialized in two different statements.",
    options: ["True", "False"],
    correct: 1,
    explain: "A 'const' must be declared and initialized in the same statement."
  },
  {
    q: "These statements represent a valid conversion: long x=2; int y; y=x;",
    options: ["True", "False"],
    correct: 1,
    explain: "This requires explicit casting 'y = (int)x' because you are converting from a larger type (long) to a smaller type (int)."
  }
  ,
  {
    q: "A/An ______ is a software that includes a large library and support several programming languages.",
    options: ["compiler", "interpreter", "framework", "None"],
    correct: 2,
    explain: "A framework (like .Net) provides a collection of libraries and tools to support multiple languages."
  },
  {
    q: "Which of the following is not reserved keyword in C#?",
    options: ["class", "namespace", "int", "sum"],
    correct: 3,
    explain: "'sum' is a common identifier name, while class, namespace, and int are built-in keywords."
  },
  {
    q: "How many bytes are stored by long data type in C#.net?",
    options: ["8", "4", "2", "1"],
    correct: 0,
    explain: "The 'long' (Int64) data type occupies 8 bytes (64 bits) in memory."
  },
  {
    q: "Which of the following is not an integer?",
    options: ["Short", "Long", "float", "Int16"],
    correct: 2,
    explain: "'float' is a floating-point type for decimal numbers, not an integer type."
  },
  {
    q: "Which of the following ways to set a value 3.14 in a variable pi such that it cannot be modified?",
    options: ["float pi = 3.14;", "const float pi = 3.14;", "const float pi; pi = 3.14;", "pi = 3.14"],
    correct: 1,
    explain: "The 'const' keyword requires declaration and initialization in the same line."
  },
  {
    q: "Which of the following is illegal variable name in C#?",
    options: ["_y2x4", "y2-x4", "2y_x4", "_24xy"],
    correct: 2,
    explain: "Variable names cannot start with a digit (number)."
  },
  {
    q: "______ operator yields true only when both operands are true.",
    options: ["logical OR", "Logical AND", "Shift Right", "Other"],
    correct: 1,
    explain: "Logical AND (&&) requires both sides to be True to return True."
  },
  {
    q: "______ operator yields 1 to the result if both bits are 1.",
    options: ["logical OR", "Logical AND", "Shift Right", "Other (Bitwise AND)"],
    correct: 3,
    explain: "The Bitwise AND (&) compares each bit and results in 1 only if both bits are 1."
  },
  {
    q: "The expression n = --x % 2 is equivalent to the sequence of the two expressions:",
    options: ["x = x - 1 and n = x % 2", "n = x - (x % 2)", "n = x % 2", "other"],
    correct: 0,
    explain: "The prefix decrement (--x) reduces x by 1 BEFORE the modulus operation."
  },
  {
    q: "______ operator has lower priority expansion than conditional operator.",
    options: ["logical OR", "Assignment", "Shift Right", "Other"],
    correct: 1,
    explain: "Assignment operators (=, +=, etc.) have almost the lowest priority in C#."
  },
  {
    q: "Statement uses single expression for multiple choices:",
    options: ["If", "conditional assignment", "switch", "do-while"],
    correct: 2,
    explain: "The switch statement evaluates one expression against multiple 'case' values."
  },
  {
    q: "______ is the most important component of .net architecture that manages and executes the .net application.",
    options: ["CLR", "Compiler", "Interpreter", "Other"],
    correct: 0,
    explain: "Common Language Runtime (CLR) is the execution engine that handles running applications."
  },
  {
    q: "A variable name is given by the programmer and is called:",
    options: ["keyword", "identifier", "namespace", "Other"],
    correct: 1,
    explain: "Names given to variables, methods, or classes are called identifiers."
  },
  {
    q: "A ______ must be declared and initialized in the same statement.",
    options: ["Variable", "constant", "keyword", "Other"],
    correct: 1,
    explain: "Constants (const) cannot be assigned a value later; they must be set at declaration."
  },
  {
    q: "______ Operators are binary operators that study the relationship between two expressions.",
    options: ["binary", "logical", "relational", "Other"],
    correct: 2,
    explain: "Relational operators (==, !=, <, >) compare two values to determine their relationship."
  },
  {
    q: "The value of i: int i,j; j=3; i=4+(2*j)/((j-1))",
    options: ["1", "7", "9", "Other"],
    correct: 1,
    explain: "i = 4 + (2*3) / (3-1) = 4 + 6 / 2 = 4 + 3 = 7."
  },
  {
    q: "______ language use short meaningful words to represent its statement.",
    options: ["High level", "Assembly", "intermediate level", "Both B and C"],
    correct: 1,
    explain: "Assembly uses mnemonics (short codes) to represent machine instructions."
  },
  {
    q: "In ______, the process of compiling and executing the code are two different separated processes.",
    options: ["Assembler", "Compiler", "Interpreter", "Either b or c"],
    correct: 1,
    explain: "A compiler translates the whole code first into a file, which is then executed separately."
  },
  {
    q: "______ act as a layer that reside between the .net application/program and the operating system.",
    options: ["Visual studio.net", ".Net framework", "C#.net", "Other"],
    correct: 1,
    explain: "The .Net Framework provides the environment and runtime required to interface with the OS."
  },
  {
    q: "______ is a program for detecting bugs in the code.",
    options: ["A compiler", "An editor", ".net framework", "Other (Debugger)"],
    correct: 3,
    explain: "A Debugger is specifically designed to test and find errors (bugs) in code."
  },
  {
    q: "______ a program for editing source code.",
    options: ["Editor", "Debugger", "Compiler", ".Net Framework"],
    correct: 0,
    explain: "An Editor is where the programmer writes and modifies the source code text."
  },
  {
    q: "______ a program for translating the code into ML (machine language).",
    options: ["Editor", "Debugger", "Compiler", ".Net Framework"],
    correct: 2,
    explain: "The Compiler translates high-level code into low-level machine language."
  },
  {
    q: "______ seeks to understand the problem domain and document the required functionality.",
    options: ["Requirements specification", "Software Analysis", "Software Design", "Implementation"],
    correct: 0,
    explain: "This is the first stage where customer needs and software functions are defined."
  },
  {
    q: "______ seeks to identify the system's input and output.",
    options: ["Requirements specification", "Software Analysis", "Software Design", "Implementation"],
    correct: 1,
    explain: "The Analysis phase focuses on what the system will take as input and produce as output."
  },
  {
    q: "______ seeks to describe the way in which the system should be implemented.",
    options: ["Requirements specification", "Software Analysis", "Software Design", "Implementation"],
    correct: 2,
    explain: "Design phase is where you plan 'how' the system will be built based on the analysis."
  },
  {
    q: "______ seeks to write the code.",
    options: ["Requirements specification", "Software Analysis", "Software Design", "Implementation"],
    correct: 3,
    explain: "Implementation is the phase where developers actually write the source code."
  },
  {
    q: "______ can include many classes.",
    options: ["Method", "Namespace", "Statement", "Other"],
    correct: 1,
    explain: "Namespaces are used to organize code and can contain multiple classes."
  },
  {
    q: "______ is the entry point of the application.",
    options: ["Main method", "Namespace", "Class", "Other"],
    correct: 0,
    explain: "The Main method is where the CPU starts executing the program."
  },
  {
    q: "To print on the screen and move the cursor to the next line we use:",
    options: ["Console.Write()", "Console.WriteLine()", "Console.Read()", "Console.ReadLine()"],
    correct: 1,
    explain: "WriteLine adds a newline character after printing, Write does not."
  },
  {
    q: "To read a string from the user we use:",
    options: ["Console.Write()", "Console.WriteLine()", "Console.Read()", "Console.ReadLine()"],
    correct: 3,
    explain: "ReadLine captures the entire text entered by the user until they press Enter."
  },
  {
    q: "______ is used to convert string to a specific data type.",
    options: ["Convert class", "Parse method", "Both a and b", "Other"],
    correct: 2,
    explain: "Both Convert.ToInt32() and int.Parse() can be used for type conversion."
  },
  {
    q: "Which of the following is used to represent a single character?",
    options: ["string", "char", "float", "decimal"],
    correct: 1,
    explain: "'char' is for a single 16-bit Unicode character, 'string' is for a sequence of characters."
  },
  {
    q: "The operator %= is called:",
    options: ["Percentage", "Modulus assignment", "Division", "Other"],
    correct: 1,
    explain: "It calculates the remainder of a division and assigns it to the variable (e.g., x %= 2)."
  },
  {
    q: "In C#, the result of 10 / 3 (where both are integers) is:",
    options: ["3.333", "3", "4", "Error"],
    correct: 1,
    explain: "Integer division in C# drops the decimal part (truncation)."
  },
  {
    q: "Which of the following is a logical operator?",
    options: ["&&", "+", "==", "<"],
    correct: 0,
    explain: "&& is Logical AND. + is arithmetic, == and < are relational operators."
  },
  {
    q: "The default case in a switch statement is:",
    options: ["Mandatory", "Optional", "Always executed", "None of the above"],
    correct: 1,
    explain: "The 'default' label is not required; it's only used if no cases match the expression."
  },
  {
    q: "A program for editing source code is called:",
    options: ["Editor", "Debugger", "Compiler", ".Net Framework"],
    correct: 0,
    explain: "An Editor (like VS Code or Notepad) is used to write and edit the code."
  },
  {
    q: "A program for translating the code into Machine Language (ML) is:",
    options: ["Editor", "Debugger", "Compiler", ".Net Framework"],
    correct: 2,
    explain: "The Compiler translates high-level code into something the machine can execute."
  }

];

function createCard(q, index) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-number">Question ${index + 1}</div>
        <div class="question-text">${q.q}</div>
        ${q.options.map((o,i)=>`<div class="option" data-i="${i}">${o}</div>`).join("")}
        <div class="explain-btn">Explain</div>
        <div class="explanation">${q.explain}</div>
    `;

    const options = card.querySelectorAll(".option");
    options.forEach(opt => {
        opt.addEventListener("click", () => {
            options.forEach(o => o.classList.remove("correct","wrong"));
            const i = +opt.dataset.i;
            if (i === q.correct) {
                opt.classList.add("correct");
            } else {
                opt.classList.add("wrong");
                options[q.correct].classList.add("correct");
            }
        });
    });

    card.querySelector(".explain-btn").onclick = () => {
        const exp = card.querySelector(".explanation");
        exp.style.display = exp.style.display === "block" ? "none" : "block";
    };

    return card;
}

const oldContainer = document.getElementById("old-questions");
const newContainer = document.getElementById("new-questions");

oldContainer.classList.add("questions-grid");
newContainer.classList.add("questions-grid");

oldQuestions.forEach((q,i)=> oldContainer.appendChild(createCard(q,i)));
newQuestions.forEach((q,i)=> newContainer.appendChild(createCard(q,i)));
