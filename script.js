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
  { q: "Flowchart consists of a set of statements / instructions that follow a specific syntax.", options: ["True","False"], correct: 1, explain: "Flowchart is graphical, not statements with syntax." },
  { q: "A software testing seeks to draw an algorithm and flowchart that describes how to solve the problem.", options: ["True","False"], correct: 1, explain: "This is software design, not testing." },
  { q: "A variable is a place to store a single item of data that can be changed.", options: ["True","False"], correct: 0, explain: "Definition of a variable." },
  { q: "A switch statement can act on characters, strings, and enumeration types.", options: ["True","False"], correct: 0, explain: "Valid in C#." },
  { q: "A switch statement can act on numerical as well as Boolean types.", options: ["True","False"], correct: 1, explain: "Boolean is not allowed in switch." },
  { q: "The while loop and do-while loop are exact the same in number of executions when the condition is not satisfied.", options: ["True","False"], correct: 1, explain: "do-while executes at least once." },
  { q: "The initialization part in the for statement is done only once.", options: ["True","False"], correct: 0, explain: "Initialization runs once." },
  { q: "return_type method identifier {<datatype param_name>} (...) is a valid signature for declaring a method.", options: ["True","False"], correct: 1, explain: "Syntax is incorrect." },
  { q: "In method, the return_type can be only int.", options: ["True","False"], correct: 1, explain: "Many return types are allowed." },
  { q: "Math.Pow(x,y) is a declaration statement that is used to define Pow method inside Math class.", options: ["True","False"], correct: 1, explain: "It is a method call, not declaration." },
  { q: "Machine binary code is easy to read and modify.", options: ["True","False"], correct: 1, explain: "Binary is hard to read." },
  { q: ".net framework is used to convert target code into machine code.", options: ["True","False"], correct: 0, explain: "CLR handles execution and conversion." },
  { q: "The for( ; ; ) { ... } is valid for statement syntax and run correctly.", options: ["True","False"], correct: 0, explain: "Creates infinite loop." },
  { q: "A variable is declared in terms of its name, type, size and value.", options: ["True","False"], correct: 1, explain: "Value is not part of declaration." },
  { q: "The construct that allows the repetition of statement several times is known as selection structure.", options: ["True","False"], correct: 1, explain: "That is iteration, not selection." },
  { q: "The value of the variable i will be 7 after calculation: int i, j=3; i = 4 + 2 * j / (j - 1).", options: ["True","False"], correct: 0, explain: "Result equals 7." },
  { q: "C# is an intermediate language which needs a compiler to translate its code to machine code.", options: ["True","False"], correct: 0, explain: "Uses IL and CLR." },
  { q: "The term .net framework refers to the collection of physical units that comprise a computer system.", options: ["True","False"], correct: 1, explain: "That is hardware." },
  { q: "A software design seeks to draw an algorithm and flowchart that describes how to solve the problem.", options: ["True","False"], correct: 0, explain: "Correct definition." },
 {
  q: "For n = 4, m = 2, y = 2, the expression n++ / m << y equals 8.",
  options: ["True", "False"],
  correct: 0,
  explanation: "n++ returns 4 then increments n. 4 / 2 = 2, and 2 << 2 equals 8."
}

  { q: "The body of while loop will be executed at least once even if the condition is false.", options: ["True","False"], correct: 1, explain: "That applies to do-while." },
  { q: "We can make nested loops with loops of the same kind or different kinds.", options: ["True","False"], correct: 0, explain: "Both are possible." },
  { q: "Method overloading is creating multiple methods with the same name but different signatures.", options: ["True","False"], correct: 0, explain: "Correct definition." },
  { q: "By using break statement, you can jump out of a loop.", options: ["True","False"], correct: 0, explain: "Break exits loop." },
  { q: "The = operator is used to compare if the values of two variables are equal.", options: ["True","False"], correct: 1, explain: "== is used for comparison." },
  { q: "The do...while statement executes statements repeatedly until condition becomes false.", options: ["True","False"], correct: 0, explain: "Correct." },
  { q: "Passing parameters by value and reference have the same effect after completing the method.", options: ["True","False"], correct: 1, explain: "They behave differently." },
  { q: "Built-in methods are declared by user.", options: ["True","False"], correct: 1, explain: "They are predefined." },
  { q: "Constant variable is declared and initialized in two different statements.", options: ["True","False"], correct: 1, explain: "Must be initialized at declaration." },
  { q: "Assembly languages are directly understandable by machines.", options: ["True","False"], correct: 1, explain: "Only machine code is directly understood." },
  { q: "Recursion is solving a problem using smaller instances of the same problem.", options: ["True","False"], correct: 0, explain: "Correct." },
  { q: "Some arithmetic operators are binary while others are unary.", options: ["True","False"], correct: 0, explain: "Example: + and ++." },
  { q: "Identifying system inputs and outputs is performed in the design phase.", options: ["True","False"], correct: 0, explain: "Part of design." },
  { q: "Conditional assignment is a binary operator equivalent to if–else.", options: ["True","False"], correct: 1, explain: "It is a ternary operator." },
  {
    q: "______ operator yields true only when both operands are true",
    options: ["Logical OR", "Logical AND", "Shift Right", "Other"],
    correct: 1,
    explanation: "Logical AND returns true only if both conditions are true."
  },
  {
    q: "Statement uses single expression for multiple choices",
    options: ["if", "conditional assignment", "switch", "do-while"],
    correct: 2,
    explanation: "switch uses one expression with multiple cases."
  },
  {
    q: "A variable name is given by the programmer and is called",
    options: ["keyword", "identifier", "namespace", "Other"],
    correct: 1,
    explanation: "Variable names are identifiers."
  },
  {
    q: "A constant must be declared and initialized in the same statement",
    options: ["Variable", "Constant", "Keyword", "Other"],
    correct: 1,
    explanation: "Constants must be initialized at declaration."
  },
  {
    q: "Operators that study the relationship between two expressions are",
    options: ["binary", "logical", "relational", "Other"],
    correct: 2,
    explanation: "Relational operators compare values."
  },
  {
    q: "int i, j; j=3; i = 4 + 2 * j / (j - 1). What is value of i?",
    options: ["1", "7", "9", "Other"],
    correct: 1,
    explanation: "Operator precedence gives result 7."
  },
  {
    q: "Which loop prints integers from 100 to 0 decreasing?",
    options: [
      "for(int i=0;i<=100;i++)",
      "for(int i=0;i<100;i--)",
      "for(int i=100;i>=0;i--)",
      "for(int i=100;i<=0;i++)"
    ],
    correct: 2,
    explanation: "Starts from 100 and decrements to 0."
  },
  {
    q: "do { Console.WriteLine('Hi'); i+=2; } while(i < 2); prints Hi how many times?",
    options: ["0", "1", "2", "3"],
    correct: 1,
    explanation: "do-while executes at least once."
  },
  {
    q: "Keyword used to declare a method which returns nothing",
    options: ["void", "break", "continue", "Other"],
    correct: 0,
    explanation: "void means no return value."
  },
  {
    q: "Calling a method inside its declaration is called",
    options: ["recursion", "nesting", "overriding", "overloading"],
    correct: 0,
    explanation: "A method calling itself is recursion."
  },
  {
    q: "Keyword used to skip current iteration of loop",
    options: ["continue", "break", "both", "none"],
    correct: 0,
    explanation: "continue skips to next iteration."
  },
  {
    q: "while(x <= 4); { Console.WriteLine(x); x++; } results in",
    options: ["0,1,2,3", "0", "Error", "Infinite loop"],
    correct: 3,
    explanation: "Semicolon makes while infinite."
  },
  {
    q: "Construct used to repeat execution of code",
    options: ["for", "if", "switch", "other"],
    correct: 0,
    explanation: "for is a loop."
  },
  {
    q: "Convert string '365' to integer in C#",
    options: ["Int.ToString()", "stringToInt()", "int.Parse()", "Convert.int()"],
    correct: 2,
    explanation: "int.Parse converts string to int."
  },
  {
    q: "Concatenate s1='good' and s2='luck' to make 'good luck'",
    options: ["s1 = s1 + s2", "s1 += s2", "Both", "None"],
    correct: 2,
    explanation: "Both methods work."
  },
  {
    q: "Void method must return",
    options: ["one value", "at least one", "at most one", "without value"],
    correct: 3,
    explanation: "Void returns nothing."
  },
  {
    q: "To store 14.212 in C# use type",
    options: ["int", "long", "char", "double"],
    correct: 3,
    explanation: "double stores decimal numbers."
  },
  {
    q: "Operator > is",
    options: ["binary", "logical", "relational", "Other"],
    correct: 2,
    explanation: "It compares two values."
  },
  {
    q: "To store value 'Country' use type",
    options: ["decimal", "string", "char", "double"],
    correct: 1,
    explanation: "Strings store text."
  },
  {
    q: "Operator >> is",
    options: ["bitwise", "logical", "relational", "Other"],
    correct: 0,
    explanation: ">> is bitwise shift right."
  },
  {
    q: "How many bytes does long use in C#?",
    options: ["8", "4", "2", "1"],
    correct: 0,
    explanation: "long = 8 bytes."
  },
  {
    q: "Which is not an integer type?",
    options: ["short", "long", "float", "int16"],
    correct: 2,
    explanation: "float is not integer."
  },
  {
    q: "Which defines constant pi = 3.14?",
    options: [
      "float pi = 3.14;",
      "const float pi = 3.14;",
      "const float pi; pi=3.14;",
      "pi=3.14;"
    ],
    correct: 1,
    explanation: "Constants must be declared and initialized."
  },
  {
    q: "Illegal variable name in C#",
    options: ["_y2x4", "y2_x4", "2y_x4", "_24xy"],
    correct: 2,
    explanation: "Variable cannot start with a number."
  },
  {
    q: "int x=5; is a",
    options: ["Declaration", "Assignment", "Input", "Both A and B"],
    correct: 3,
    explanation: "It declares and assigns."
  },
  {
    q: "System in System.Console.WriteLine() is",
    options: ["Method", "Class", "Namespace", "Other"],
    correct: 2,
    explanation: "System is a namespace."
  },
  {
    q: "Console in System.Console.WriteLine() is",
    options: ["Method", "Class", "Namespace", "Other"],
    correct: 1,
    explanation: "Console is a class."
  },
  {
    q: "Operator % returns",
    options: ["Integer", "Float", "Boolean", "String"],
    correct: 0,
    explanation: "Returns remainder."
  },
  {
    q: "Operator == returns",
    options: ["Integer", "Float", "Boolean", "String"],
    correct: 2,
    explanation: "Comparison returns boolean."
  },
  {
    q: "x > y ? x : y equals",
    options: ["if", "if-else", "switch", "if-else-if"],
    correct: 1,
    explanation: "Ternary equals if-else."
  }
];

const section3Questions = [
  {
    "q": "Which of the following is NOT a component of a computer system?",
    "options": ["Hardware", "Software", "Internet", "Users"],
    "correct": 2,
    "explanation": "The main components of a computer system are Hardware, Software, Data, and Users. Internet is a network infrastructure, not a core component of a single computer system."
  },
  {
    "q": "The CPU, memory, and I/O devices are examples of:",
    "options": ["Application programs", "Hardware", "Software", "Operating systems"],
    "correct": 1,
    "explanation": "CPU, memory, and I/O devices are physical components, which are classified as hardware."
  },
  {
    "q": "The software that controls the hardware and coordinates its use is called:",
    "options": ["Application Program", "Operating System", "Compiler", "Driver"],
    "correct": 1,
    "explanation": "The operating system is the system software that manages computer hardware and software resources and provides common services for computer programs."
  },
  {
    "q": "A collection of data or instructions that tells the computer how to work is called:",
    "options": ["Hardware", "Compiler", "Software", "Algorithm"],
    "correct": 2,
    "explanation": "Software is a set of instructions, data or programs used to operate computers and execute specific tasks."
  },
  {
    "q": "The program that converts source code into executable form is:",
    "options": ["IDE", "Compiler", "Interpreter", "Debugger"],
    "correct": 1,
    "explanation": "A compiler translates source code written in a high-level programming language into machine code that can be executed directly by the computer's CPU."
  },
  {
    "q": "Which of the following is TRUE about Structured Programming?",
    "options": ["Code written as a single block", "Hard to modify", "Uses modules or functions", "Used in COBOL"],
    "correct": 2,
    "explanation": "Structured programming emphasizes breaking down a program into modules or functions, making it easier to understand and maintain."
  },
  {
    "q": "In Unstructured programming, the program is:",
    "options": ["Divided into modules", "Written as one block", "Easy to debug", "Object-oriented"],
    "correct": 1,
    "explanation": "Unstructured programming typically involves writing code as a single continuous block, often using goto statements, which makes it difficult to follow and maintain."
  },
  {
    "q": "Which programming language was developed by Microsoft?",
    "options": ["Python", "Java", "C#", "C++"],
    "correct": 2,
    "explanation": "C# (pronounced C-sharp) was developed by Microsoft as part of its .NET initiative."
  },
  {
    "q": "Which of the following best describes an algorithm?",
    "options": ["A compiler", "A set of steps to solve a task", "A high-level language", "A syntax rule"],
    "correct": 1,
    "explanation": "An algorithm is a finite sequence of well-defined, step-by-step instructions to solve a problem or perform a computation."
  },
  {
    "q": "Which of these shapes in a flowchart represents a decision?",
    "options": ["Rectangle", "Circle", "Diamond", "Arrow"],
    "correct": 2,
    "explanation": "In flowcharts, a diamond shape represents a decision point where the flow can take different paths based on a condition."
  },
  {
    "q": "In Structured Programming, modification is easy because:",
    "options": ["Code is one block", "Modules are independent", "Data types are limited", "Debugging is impossible"],
    "correct": 1,
    "explanation": "In structured programming, the program is divided into independent modules or functions. Changing one module usually has minimal impact on others, making modification easier."
  },
  {
    "q": "Which statement about Unstructured programming is FALSE?",
    "options": ["Used in early BASIC", "Has limited data types", "Avoids code duplication", "Written as a single unit"],
    "correct": 2,
    "explanation": "Unstructured programming often leads to code duplication because it lacks modular structure and uses goto statements, making reuse difficult."
  },
  {
    "q": "Pseudocode differs from source code because:",
    "options": ["It follows strict syntax", "It can be compiled", "It's written for humans to read", "It's in binary"],
    "correct": 2,
    "explanation": "Pseudocode is an informal, high-level description of an algorithm's logic, intended for human understanding rather than machine execution. It doesn't follow strict programming language syntax."
  },
  {
    "q": "In a flowchart, the 'Terminator' represents:",
    "options": ["A calculation", "Decision point", "Start or end", "Input/Output"],
    "correct": 2,
    "explanation": "In flowcharts, the oval or rounded rectangle shape (Terminator) represents the start or end point of a process."
  },
  {
    "q": "The main difference between IDE and Compiler is:",
    "options": ["IDE complies code only", "Compiler helps write code", "IDE helps write and run code", "Compiler provides suggestions"],
    "correct": 2,
    "explanation": "An Integrated Development Environment (IDE) is a software application that provides comprehensive facilities for software development, including a source code editor, build tools, and debugger. A compiler is just one component that translates code."
  },
  {
    "q": "Which component of a computer system acts as an intermediary between hardware and application?",
    "options": ["User", "Operating System", "Compiler", "Application Software"],
    "correct": 1,
    "explanation": "The operating system acts as an intermediary between the computer hardware and application software, managing resources and providing services."
  },
  {
    "q": "Which of the following best explains the relationship between compiler and IDE?",
    "options": ["Compiler is part of an IDE", "IDE is part of a compiler", "Both perform the same task", "Neither is related"],
    "correct": 0,
    "explanation": "A compiler is often included as one of the tools within an Integrated Development Environment (IDE)."
  },
  {
    "q": "In a structured program, each module is:",
    "options": ["A single large block of code", "A sub-task performing block", "A loop statement", "A file input section"],
    "correct": 1,
    "explanation": "In structured programming, a module is a self-contained unit that performs a specific sub-task, making the program organized and manageable."
  },
  {
    "q": "The key benefit of structured programming is:",
    "options": ["Faster hardware processing", "Easier debugging and modification", "Better compiler speed", "No need for testing"],
    "correct": 1,
    "explanation": "The primary benefits of structured programming are improved clarity, quality, and development time by making programs easier to debug, modify, and maintain."
  },
  {
    "q": "Which type of language is best described as object-oriented and developed by Microsoft?",
    "options": ["Python", "Java", "C#", "PHP"],
    "correct": 2,
    "explanation": "C# is a modern, object-oriented programming language developed by Microsoft as part of the .NET platform."
  },
  {
    "q": "Which statement about algorithms is TRUE?",
    "options": ["They must be written in programming syntax", "They are graphical models", "They define logical steps to solve problems", "They can only be used by computers"],
    "correct": 2,
    "explanation": "An algorithm is a step-by-step procedure or formula for solving a problem, independent of any specific programming language."
  },
  {
    "q": "In flowcharts, which symbol is used to represent input or output?",
    "options": ["Oval", "Parallelogram", "Diamond", "Rectangle"],
    "correct": 1,
    "explanation": "In flowcharts, a parallelogram represents an input or output operation, such as reading data or displaying results."
  },
  {
    "q": "Which of the following is NOT a characteristic of structured programming?",
    "options": ["Modular design", "Code duplication", "Easy debugging", "Better readability"],
    "correct": 1,
    "explanation": "Code duplication is actually a problem that structured programming aims to reduce through modularization and reuse of code."
  },
  {
    "q": "In unstructured programming, data types are:",
    "options": ["Unlimited", "Limited", "Complex", "Object-oriented"],
    "correct": 1,
    "explanation": "Early unstructured programming languages often had limited data types compared to modern structured and object-oriented languages."
  },
  {
    "q": "The compiler's main role is to:",
    "options": ["Execute the program directly", "Suggest code improvements", "Translate high-level code into machine code", "Store program data"],
    "correct": 2,
    "explanation": "A compiler translates source code written in a high-level programming language into low-level machine code that can be executed by the computer's processor."
  },
  {
    "q": "Which programming paradigm focuses on breaking down a program into smaller, manageable parts?",
    "options": ["Unstructured Programming", "Structured Programming", "Object Programming", "Linear Programming"],
    "correct": 1,
    "explanation": "Structured programming emphasizes breaking down a program into smaller, manageable modules or functions."
  },
  {
    "q": "What makes debugging difficult in unstructured programming?",
    "options": ["Limited loops", "No compiler", "Single large block of code", "No syntax rules"],
    "correct": 2,
    "explanation": "In unstructured programming, code is often written as a single large block with goto statements, making it hard to trace execution flow and locate bugs."
  },
  {
    "q": "Which flowchart symbol represents a decision point?",
    "options": ["Rectangle", "Parallelogram", "Diamond", "Arrow"],
    "correct": 2,
    "explanation": "In flowcharts, a diamond shape represents a decision point where the program flow branches based on a condition."
  },
  {
    "q": "Pseudocode cannot be compiled because:",
    "options": ["It's written for humans, not machines", "It lacks loops", "It uses binary format", "It needs a special compiler"],
    "correct": 0,
    "explanation": "Pseudocode uses natural language mixed with programming concepts to describe an algorithm's logic, so it lacks the strict syntax required for compilation."
  },
  {
    "q": "The IDE mainly helps programmers by:",
    "options": ["Translating code to machine code", "Providing an interface for coding and running programs", "Testing algorithms automatically", "Optimizing CPU performance"],
    "correct": 1,
    "explanation": "An Integrated Development Environment (IDE) provides a comprehensive set of tools including code editor, compiler, debugger, and build automation in a single interface."
  },
  {
    "q": "Which statement about C# is FALSE?",
    "options": ["It is developed by Microsoft", "It can be used for game development", "It requires no framework", "It supports object-oriented programming"],
    "correct": 2,
    "explanation": "C# typically requires the .NET Framework (or .NET Core/.NET 5+) to run, which provides the common language runtime and class libraries."
  },
  {
    "q": "What is the main distinction between an algorithm and a pseudocode?",
    "options": ["Pseudocode is an informal representation of an algorithm", "Algorithm is written in code syntax", "Algorithm cannot be represented visually", "Pseudocode must be compiled"],
    "correct": 0,
    "explanation": "Pseudocode is one way to represent an algorithm using a mix of natural language and programming-like structures, without strict syntax rules."
  },
  {
    "q": "In structured programming, changing one module usually:",
    "options": ["Requires changing all others", "Affects unrelated tasks", "Has minimal impact on other modules", "Is impossible"],
    "correct": 2,
    "explanation": "Due to modular design and limited coupling between modules in structured programming, changes to one module typically have minimal impact on others."
  },
  {
    "q": "What is a major advantage of using flowcharts in algorithm design?",
    "options": ["They replace code entirely", "They visually represent process flow", "They are machine-readable", "They reduce syntax errors"],
    "correct": 1,
    "explanation": "Flowcharts provide a visual representation of an algorithm's logic and flow, making it easier to understand, communicate, and analyze the process."
  },
  {
    "q": "Which statement about problem solving in computer science is correct?",
    "options": ["It's only about writing code", "It involves understanding human and machine approaches", "It doesn't require algorithms", "It skips debugging"],
    "correct": 1,
    "explanation": "Problem solving in computer science involves understanding both the human problem domain and the machine's capabilities, then bridging them through algorithms and implementation."
  },
  {
    "q": "What is the main purpose of using a flowchart in algorithm design?",
    "options": ["To write executable code", "To represent logic visually", "To store data", "To debug code"],
    "correct": 1,
    "explanation": "A flowchart is a diagram that uses standardized symbols to visually represent the steps and logic flow of an algorithm or process."
  },
  {
    "q": "Which symbol represents a decision in a flowchart?",
    "options": ["Rectangle", "Parallelogram", "Diamond", "Oval"],
    "correct": 2,
    "explanation": "In flowcharts, a diamond shape is used to represent a decision point where the flow can take different paths based on a condition."
  },
  {
    "q": "Which shape is used for input or output operations in a flowchart?",
    "options": ["Oval", "Rectangle", "Diamond", "Parallelogram"],
    "correct": 3,
    "explanation": "A parallelogram represents input/output operations in flowcharts, such as reading data from the user or displaying results."
  },
  {
    "q": "What makes a good flowchart design?",
    "options": ["Complexity", "Simplicity and logical order", "Extra decoration", "Multiple start points"],
    "correct": 1,
    "explanation": "An effective flowchart should be simple, clear, and follow a logical order that accurately represents the process without unnecessary complexity."
  },
  {
    "q": "Which symbol is used when more than one path is possible in a program?",
    "options": ["Diamond", "Rectangle", "Parallelogram", "Arrow"],
    "correct": 0,
    "explanation": "A diamond represents a decision point where multiple paths are possible based on a condition."
  },
  {
    "q": "What is the role of arrows in a flowchart?",
    "options": ["To indicate the sequence of steps", "To show input data", "To define loops", "To label variables"],
    "correct": 0,
    "explanation": "Arrows (flow lines) in a flowchart show the direction and sequence of the process flow from one step to another."
  },
  {
    "q": "Which of the following statements is correct about start and end symbols in flowcharts?",
    "options": ["They are represented by ovals", "They are represented by diamonds", "They are rectangles", "They are arrows"],
    "correct": 0,
    "explanation": "Start and end points in a flowchart are represented by ovals or rounded rectangles, also called terminators."
  },
  {
    "q": "How is an if-else statement represented in a flowchart?",
    "options": ["With two parallelograms", "With a diamond and two arrows", "With a rectangle and oval", "With a loop symbol"],
    "correct": 1,
    "explanation": "An if-else statement is represented by a diamond (decision) with two arrows emerging from it: one for the true condition and one for the false condition."
  },
  {
    "q": "What common mistake occurs in flowcharts involving loops?",
    "options": ["Missing the decision symbol", "Forgetting to return the arrow to the decision point", "Using wrong shapes", "Having too many outputs"],
    "correct": 1,
    "explanation": "A common error when representing loops in flowcharts is forgetting to draw the return arrow from the end of the loop body back to the decision point, which is essential for showing repetition."
  },
  {
    "q": "Why should a flowchart be designed before coding?",
    "options": ["It helps visualize logic and minimize errors", "It speeds up compilation", "It adds style to the code", "It replaces pseudocode"],
    "correct": 0,
    "explanation": "Designing a flowchart before coding helps programmers visualize the logic, identify potential problems early, and create a clearer implementation plan, reducing errors."
  },
  {
    "q": "When is it best to use a flowchart instead of pseudocode?",
    "options": ["When explaining to non-programmers", "When coding directly", "When debugging", "When testing loops"],
    "correct": 0,
    "explanation": "Flowcharts are often more effective than pseudocode when explaining algorithms to non-programmers or stakeholders because they provide a visual representation that's easier to understand."
  },
  {
    "q": "Which shape represents the process or action in a flowchart?",
    "options": ["Rectangle", "Parallelogram", "Diamond", "Circle"],
    "correct": 0,
    "explanation": "A rectangle represents a process or action step in a flowchart, such as a calculation or data manipulation."
  },
  {
    "q": "What is the correct order for a program that adds two inputs and displays the result?",
    "options": ["Start → Process → Input → Output → End", "Start → Input → Process → Output → End", "Start → Output → Input → Process → End", "Start → End → Input → Output"],
    "correct": 1,
    "explanation": "The logical order is: Start → Input (get two numbers) → Process (add them) → Output (display result) → End."
  },
  {
    "q": "What is the relationship between a flowchart and an algorithm?",
    "options": ["A flowchart is a visual representation of an algorithm", "They are unrelated", "Algorithm is a type of flowchart", "Flowchart is written in code syntax"],
    "correct": 0,
    "explanation": "A flowchart is one method of visually representing an algorithm, showing the steps and decision points in a graphical format."
  },
  {
    "q": "Why can't a flowchart be directly translated into executable code?",
    "options": ["It uses graphical symbols meant for humans", "It lacks logical flow", "It's written in binary", "It's incomplete"],
    "correct": 0,
    "explanation": "Flowcharts use graphical symbols designed for human understanding, not machine execution. They need to be converted to actual programming code using the appropriate syntax."
  },
  {
    "q": "What does a diamond symbol indicate in a flowchart?",
    "options": ["Start or End", "Input or Output", "Process", "Decision Point"],
    "correct": 3,
    "explanation": "A diamond symbol in a flowchart represents a decision point where the flow branches based on a condition."
  },
  {
    "q": "Which of the following is NOT essential for an effective flowchart?",
    "options": ["Logical sequence", "Simplicity", "Visual clarity", "Excessive decoration"],
    "correct": 3,
    "explanation": "Excessive decoration distracts from the flowchart's purpose and reduces clarity. Effective flowcharts should be clean, simple, and logically organized."
  },
  {
    "q": "How does a flowchart help in debugging?",
    "options": ["It shows the logic visually to trace errors", "It replaces test cases", "It automatically fixes bugs", "It converts logic to code"],
    "correct": 0,
    "explanation": "By visualizing the program logic, flowcharts make it easier to trace execution paths and identify where errors might occur in the logic."
  },
  {
    "q": "What is the correct order of stages in problem-solving using a flowchart?",
    "options": ["Problem → Algorithm → Flowchart → Code → Testing", "Flowchart → Problem → Code → Testing", "Code → Flowchart → Testing", "Testing → Flowchart → Code"],
    "correct": 0,
    "explanation": "The typical problem-solving process is: Understand the problem → Design an algorithm → Create a flowchart (optional) → Write code → Test and debug."
  },
  {
    "q": "How can a flowchart show repetition within an algorithm?",
    "options": ["Using a parallelogram", "Using arrows returning to a decision symbol", "Using a rectangle only", "Using multiple start symbols"],
    "correct": 1,
    "explanation": "Repetition (loops) in flowcharts is shown by having an arrow return from after the loop body back to a decision diamond that controls the loop condition."
  }
];
const section4Questions = [
  {
    "q": "Which of the following correctly describes a C# program structure?",
    "options": ["It contains only one class and one method", "It consists of namespaces, classes, methods, and statements", "It includes only methods and statements", "It has no predefined structure"],
    "correct": 1,
    "explanation": "A typical C# program is organized into namespaces that contain classes, which in turn contain methods made up of statements."
  },
  {
    "q": "What is the purpose of a namespace in C#?",
    "options": ["To define constants", "To group related classes and organize code", "To execute methods", "To declare variables"],
    "correct": 1,
    "explanation": "Namespaces are used to organize code into logical groups and prevent naming conflicts."
  },
  {
    "q": "Which of the following namespaces provides basic functionalities like mathematical operations?",
    "options": ["System.IO", "System.Net", "System", "System.Security"],
    "correct": 2,
    "explanation": "The System namespace contains fundamental classes and base types, including the Math class for mathematical operations."
  },
  {
    "q": "Which namespace is used for file I/O operations in C#?",
    "options": ["System.Net", "System.IO", "System.Drawing", "System"],
    "correct": 1,
    "explanation": "System.IO contains types for reading and writing to files and data streams."
  },
  {
    "q": "What does the following code do? Console.Write(\"Hello\");",
    "options": ["Prints Hello and moves to the next line", "Prints Hello without moving to the next line", "Prints Hello with an error", "Prints nothing"],
    "correct": 1,
    "explanation": "Console.Write() outputs text without appending a newline character, so the cursor stays on the same line."
  },
  {
    "q": "What is the main difference between Write() and WriteLine()?",
    "options": ["WriteLine() does not output anything", "Write() prints with a new line", "WriteLine() prints with a new line", "There is no difference"],
    "correct": 2,
    "explanation": "WriteLine() appends a newline character after the output, while Write() does not."
  },
  {
    "q": "What symbol marks the end of a statement in C#?",
    "options": [":", ";", ".", ","],
    "correct": 1,
    "explanation": "In C#, the semicolon (;) is used to terminate statements."
  },
  {
    "q": "Which of the following statements about C# is true?",
    "options": ["It is not case-sensitive", "Identifiers can contain spaces", "It is case-sensitive", "You can use keywords as variable names"],
    "correct": 2,
    "explanation": "C# is a case-sensitive language, meaning 'myVar' and 'MyVar' are different identifiers."
  },
  {
    "q": "What is the purpose of the 'using' directive in C#?",
    "options": ["To define a namespace", "To import all members of a namespace", "To execute methods automatically", "To define variables"],
    "correct": 1,
    "explanation": "The 'using' directive allows you to use types in a namespace without specifying the fully qualified name."
  },
  {
    "q": "Which of the following is a single-line comment in C#?",
    "options": ["<!-- comment -->", "# comment", "// comment", "/* comment */"],
    "correct": 2,
    "explanation": "// is used for single-line comments in C#."
  },
  {
    "q": "Which of the following represents a multi-line comment in C#?",
    "options": ["// comment", "# comment", "/* comment */", "-- comment"],
    "correct": 2,
    "explanation": "/* */ is used for multi-line comments in C#."
  },
  {
    "q": "What is a literal in C#?",
    "options": ["A variable whose value can change", "A fixed value that cannot be changed during execution", "A class name", "A type of method"],
    "correct": 1,
    "explanation": "A literal is a fixed value written directly in the code, like 42, \"hello\", or true."
  },
  {
    "q": "Which of the following defines a variable correctly?",
    "options": ["int = x;", "x int;", "int x;", "variable x = int;"],
    "correct": 2,
    "explanation": "The correct syntax is: type identifier; e.g., int x;"
  },
  {
    "q": "What will happen if you assign a new value to an existing variable?",
    "options": ["It will cause a compile-time error", "It will overwrite the previous value", "It will create a new variable", "It will throw an exception"],
    "correct": 1,
    "explanation": "Variables can be reassigned new values, which replace the old values."
  },
  {
    "q": "What does the 'const' keyword indicate?",
    "options": ["The variable can be changed later", "The variable value cannot be changed", "The variable has no type", "The variable is temporary"],
    "correct": 1,
    "explanation": "const declares a constant whose value must be assigned at declaration and cannot be changed afterwards."
  },
  {
    "q": "Which of the following is a valid identifier in C#?",
    "options": ["int", "total_price", "my variable", "1value"],
    "correct": 1,
    "explanation": "Valid identifiers can contain letters, digits, and underscores, but cannot start with a digit and cannot be a keyword (unless prefixed with @)."
  },
  {
    "q": "What data type should you use to store true or false values?",
    "options": ["char", "bool", "int", "double"],
    "correct": 1,
    "explanation": "The bool data type is specifically for Boolean values (true or false)."
  },
  {
    "q": "Which type can store the largest range of values?",
    "options": ["byte", "int", "long", "short"],
    "correct": 2,
    "explanation": "long is a 64-bit integer type with the largest range among the given integer types."
  },
  {
    "q": "Which data type is best for financial calculations?",
    "options": ["float", "double", "decimal", "int"],
    "correct": 2,
    "explanation": "decimal is a 128-bit precise decimal type, ideal for financial calculations where rounding errors are unacceptable."
  },
  {
    "q": "How can you define multiple variables of the same type?",
    "options": ["int x; int y;", "int x, y, z;", "int(x, y, z);", "define int x, y, z;"],
    "correct": 1,
    "explanation": "Multiple variables of the same type can be declared in one statement by separating them with commas."
  },
  {
    "q": "Which of the following statements about namespaces is FALSE?",
    "options": ["A namespace can contain classes", "A namespace can contain other namespaces", "Each C# file must contain exactly one namespace", "You can define custom namespaces"],
    "correct": 2,
    "explanation": "A C# file can contain zero, one, or multiple namespace declarations."
  },
  {
    "q": "What will happen if you try to compile the following code? Console.write(\"Hi\");",
    "options": ["It will run successfully", "It will print 'Hi' twice", "It will cause a compile-time error", "It will ignore the method"],
    "correct": 2,
    "explanation": "C# is case-sensitive. The correct method is Console.Write() (capital W)."
  },
  {
    "q": "In the structure of a C# program, what is directly inside a namespace?",
    "options": ["Methods", "Statements", "Classes", "Literals"],
    "correct": 2,
    "explanation": "Namespaces directly contain types like classes, structs, interfaces, enums, and delegates."
  },
  {
    "q": "Which of the following cannot be used as an identifier name?",
    "options": ["_name", "myName", "int", "user1"],
    "correct": 2,
    "explanation": "int is a C# keyword and cannot be used as an identifier unless prefixed with @ (e.g., @int)."
  },
  {
    "q": "What does Console.WriteLine(5.2E-3); output?",
    "options": ["5.2 x 10^3", "0.0052", "5200", "5.2E3"],
    "correct": 1,
    "explanation": "5.2E-3 is scientific notation for 5.2 × 10⁻³, which equals 0.0052."
  },
  {
    "q": "Which data type consumes the most memory?",
    "options": ["float", "double", "decimal", "long"],
    "correct": 2,
    "explanation": "decimal uses 16 bytes, double uses 8, float uses 4, and long uses 8."
  },
  {
    "q": "Which of the following code lines correctly initializes multiple variables?",
    "options": ["int x=5, y, z=10;", "int x=5 y=10;", "int (x=5, y=10);", "int x=5,y=10;"],
    "correct": 0,
    "explanation": "Variables can be declared and optionally initialized in the same statement, separated by commas."
  },
  {
    "q": "What will be the output of: Console.Write(1); Console.WriteLine(2); Console.WriteLine(3);",
    "options": ["123", "1 2 3", "12 3", "12\\n3"],
    "correct": 3,
    "explanation": "Console.Write(1) prints '1' (no newline). Console.WriteLine(2) prints '2' then a newline. Console.WriteLine(3) prints '3' on a new line."
  },
  {
    "q": "Which of the following will produce an error?",
    "options": ["const double PI = 3.14;", "const int a;", "int b = 10;", "string name = \"Ali\";"],
    "correct": 1,
    "explanation": "A const variable must be initialized at the time of declaration."
  },
  {
    "q": "Which rule about variable names is INCORRECT?",
    "options": ["Names can start with a number", "Names can contain letters and underscores", "Names cannot have white spaces", "Names are case-sensitive"],
    "correct": 0,
    "explanation": "Variable names cannot start with a number, though they can contain numbers after the first character."
  },
  {
    "q": "What is the size of a 'long' data type in bytes?",
    "options": ["4", "8", "2", "16"],
    "correct": 1,
    "explanation": "long is a 64-bit (8-byte) signed integer."
  },
  {
    "q": "How many positive values can a byte store?",
    "options": ["128", "256", "512", "64"],
    "correct": 1,
    "explanation": "A byte is 8 bits, storing values from 0 to 255 (256 total values)."
  },
  {
    "q": "Which of the following correctly declares a constant string?",
    "options": ["const string message = \"Hi\";", "constant string message = Hi;", "string const message = \"Hi\";", "string message = const \"Hi\";"],
    "correct": 0,
    "explanation": "The const keyword comes before the type."
  },
  {
    "q": "What is the correct order of C# structure hierarchy?",
    "options": ["Method → Namespace → Class → Statement", "Namespace → Class → Method → Statement", "Class → Namespace → Statement → Method", "Statement → Class → Namespace → Method"],
    "correct": 1,
    "explanation": "Namespaces contain classes, classes contain methods, and methods contain statements."
  },
  {
    "q": "Which of the following best describes a variable in C#?",
    "options": ["A fixed memory that cannot change", "A container for storing data values", "A command for executing code", "A reserved keyword"],
    "correct": 1,
    "explanation": "A variable is a named storage location that holds a value which can be changed during program execution."
  },
  {
    "q": "What is the output of the following code? int x = 5; Console.WriteLine(x);",
    "options": ["x", "5", "Error", "Nothing"],
    "correct": 1,
    "explanation": "The variable x holds the value 5, which is printed."
  },
  {
    "q": "What will this code print? Console.Write(1); Console.WriteLine(2); Console.Write(3);",
    "options": ["123", "12\\n3", "1\\n2\\n3", "12 3"],
    "correct": 1,
    "explanation": "Write(1) prints '1', WriteLine(2) prints '2' and a newline, Write(3) prints '3' on the next line. So output: '12' followed by newline, then '3'."
  },
  {
    "q": "What happens when you try to compile this code? const int num; num = 10; Console.WriteLine(num);",
    "options": ["Prints 10", "Prints 0", "Compilation Error", "Runtime Error"],
    "correct": 2,
    "explanation": "const variables must be initialized at declaration. This code tries to assign value later, causing a compilation error."
  },
  {
    "q": "What is the output? int a = 10; a = 20; Console.WriteLine(a);",
    "options": ["10", "20", "30", "Error"],
    "correct": 1,
    "explanation": "The variable a is reassigned to 20 before being printed."
  },
  {
    "q": "What will the following code display? int x = 5, y = 10; Console.WriteLine(x + y);",
    "options": ["15", "510", "x + y", "Error"],
    "correct": 0,
    "explanation": "The expression x + y evaluates to 15, which is printed."
  }
];
const section5Questions = [
  {
    "q": "What does a data type specify in C#?",
    "options": ["The color of text", "The size and kind of data a variable can store", "The location of variables", "The execution speed"],
    "correct": 1,
    "explanation": "A data type defines the kind of value a variable can hold (e.g., integer, text) and how much memory is allocated for it."
  },
  {
    "q": "Why is it important to use the correct data type?",
    "options": ["To slow down code", "To save memory and avoid errors", "To increase file size", "To make variables larger"],
    "correct": 1,
    "explanation": "Using the appropriate data type optimizes memory usage, improves performance, and prevents runtime errors like overflow or data loss."
  },
  {
    "q": "What values can a Boolean variable hold?",
    "options": ["0 and 1 only", "true or false", "Yes or No", "On or Off"],
    "correct": 1,
    "explanation": "The bool data type in C# stores exactly two values: true and false."
  },
  {
    "q": "The size of a Boolean variable in C# is:",
    "options": ["2 bytes", "4 bytes", "1 byte", "8 bytes"],
    "correct": 2,
    "explanation": "A bool variable occupies 1 byte of memory in C#."
  },
  {
    "q": "Which keyword is used to declare a Boolean variable?",
    "options": ["boolean", "bool", "BooleanValue", "logical"],
    "correct": 1,
    "explanation": "C# uses the keyword 'bool' to declare Boolean variables."
  },
  {
    "q": "An integer variable stores:",
    "options": ["Whole numbers only", "Decimal numbers", "Strings", "Characters"],
    "correct": 0,
    "explanation": "Integer types (int, long, byte, etc.) store whole numbers without fractional parts."
  },
  {
    "q": "The smallest integer type in C# is:",
    "options": ["byte", "int", "sbyte", "short"],
    "correct": 2,
    "explanation": "sbyte is an 8-bit signed integer (range: -128 to 127). It's the smallest integer type by storage size."
  },
  {
    "q": "Unsigned integer variables can store:",
    "options": ["Only negative numbers", "Only positive and zero", "Both positive and negative", "Floating values"],
    "correct": 1,
    "explanation": "Unsigned integer types (byte, ushort, uint, ulong) store only non-negative values (zero and positive numbers)."
  },
  {
    "q": "What happens when an arithmetic result exceeds the range of its data type?",
    "options": ["Compilation error", "Integer overflow", "Logical overflow", "Memory leak"],
    "correct": 1,
    "explanation": "Integer overflow occurs when a calculation produces a value outside the range that can be represented by the data type."
  },
  {
    "q": "What is the maximum value of a uint variable?",
    "options": ["2^32", "2^32 - 1", "2^31", "2^31 - 1"],
    "correct": 1,
    "explanation": "uint is a 32-bit unsigned integer, so its maximum value is 2^32 - 1 (4,294,967,295)."
  },
  {
    "q": "What type of number includes a fractional part?",
    "options": ["Integer", "Floating-point", "Boolean", "Character"],
    "correct": 1,
    "explanation": "Floating-point types (float, double, decimal) represent real numbers with fractional parts."
  },
  {
    "q": "The default type of floating literal (e.g., 5.35) in C# is:",
    "options": ["float", "decimal", "double", "int"],
    "correct": 2,
    "explanation": "In C#, a numeric literal with a decimal point (like 5.35) is treated as double by default."
  },
  {
    "q": "Which suffix represents a float value?",
    "options": ["f or F", "d or D", "m or M", "None"],
    "correct": 0,
    "explanation": "The 'f' or 'F' suffix specifies a float literal (e.g., 5.35f)."
  },
  {
    "q": "Which data type represents a single character?",
    "options": ["string", "char", "Boolean", "int"],
    "correct": 1,
    "explanation": "The char type stores a single Unicode character (e.g., 'A', '7', '$')."
  },
  {
    "q": "The size of a char variable in C# is:",
    "options": ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    "correct": 1,
    "explanation": "A char in C# is 2 bytes (16 bits) because it uses UTF-16 encoding."
  },
  {
    "q": "Which encoding is used by C# for characters?",
    "options": ["ASCII", "UTF-8", "UTF-16", "ANSI"],
    "correct": 2,
    "explanation": "C# uses UTF-16 encoding for char and string types."
  },
  {
    "q": "A string variable is:",
    "options": ["A value type", "A reference type", "An integer", "A Boolean"],
    "correct": 1,
    "explanation": "string is a reference type in C#, meaning the variable holds a reference to the actual data in memory."
  },
  {
    "q": "On a 64-bit system, the size of a string variable reference is:",
    "options": ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
    "correct": 2,
    "explanation": "On a 64-bit system, references (pointers) are 8 bytes in size."
  },
  {
    "q": "Value types store:",
    "options": ["References to data", "The actual data itself", "File addresses", "None"],
    "correct": 1,
    "explanation": "Value types store the actual data directly in the variable's memory location."
  },
  {
    "q": "Which of the following is NOT a value type?",
    "options": ["int", "float", "string", "char"],
    "correct": 2,
    "explanation": "string is a reference type, while int, float, and char are value types."
  },
  {
    "q": "Reference types store:",
    "options": ["The actual value", "The address of the data", "Both A and B", "None"],
    "correct": 1,
    "explanation": "Reference types store a reference (memory address) that points to where the actual data is located on the heap."
  },
  {
    "q": "Which line defines a reference type variable?",
    "options": ["int x = 5;", "string s = \"Hello\";", "bool b = true;", "char c = 'A';"],
    "correct": 1,
    "explanation": "string is a reference type; int, bool, and char are value types."
  },
  {
    "q": "What is implicit type conversion?",
    "options": ["Conversion with data loss", "Automatic conversion when safe", "Manual casting", "Syntax conversion only"],
    "correct": 1,
    "explanation": "Implicit conversion happens automatically by the compiler when there's no risk of data loss (e.g., int to long)."
  },
  {
    "q": "Which conversion requires no cast?",
    "options": ["double → int", "int → long", "long → short", "float → int"],
    "correct": 1,
    "explanation": "int to long is an implicit conversion because long has a larger range and can hold all int values without loss."
  },
  {
    "q": "Explicit type conversion is also called:",
    "options": ["Implicit conversion", "Casting", "Rounding", "Boxing"],
    "correct": 1,
    "explanation": "Explicit conversion requires a cast operator (e.g., (int)doubleValue) and is commonly called casting."
  },
  {
    "q": "To cast a double x into int, the syntax is:",
    "options": ["int(x)", "(int)x", "convert x to int", "x.int()"],
    "correct": 1,
    "explanation": "C# uses the syntax (type)value for casting. So (int)x casts x to int."
  },
  {
    "q": "Which method converts string to int safely?",
    "options": ["Tolnt()", "int.Parse()", "Convert.Tolnt32()", "Both B and C"],
    "correct": 3,
    "explanation": "Both int.Parse() and Convert.ToInt32() convert strings to integers, but Convert.ToInt32() handles null by returning 0, while int.Parse() throws an exception."
  },
  {
    "q": "Console.ReadLine() returns data as:",
    "options": ["int", "string", "bool", "double"],
    "correct": 1,
    "explanation": "Console.ReadLine() always returns a string containing the user's input."
  },
  {
    "q": "To read an integer from user input, we use:",
    "options": ["Convert.Tolnt32(Console.ReadLine())", "Console.Read()", "int.Parse(Console.Read())", "float.Parse(Console.ReadLine())"],
    "correct": 0,
    "explanation": "Console.ReadLine() gets input as string, then Convert.ToInt32() converts it to int."
  },
  {
    "q": "int.Parse and System.Int32.Parse are:",
    "options": ["Different", "The same", "Unrelated", "Deprecated"],
    "correct": 1,
    "explanation": "int is an alias for System.Int32 in C#, so int.Parse and System.Int32.Parse are identical."
  },
  {
    "q": "What happens if an integer overflow occurs in an unchecked context?",
    "options": ["An exception is thrown", "The result wraps around", "The program stops", "The compiler warns"],
    "correct": 1,
    "explanation": "In an unchecked context (default), overflow wraps around (e.g., int.MaxValue + 1 becomes int.MinValue)."
  },
  {
    "q": "Which of the following can NOT be implicitly converted?",
    "options": ["int to long", "float to double", "double to int", "byte to short"],
    "correct": 2,
    "explanation": "double to int requires explicit casting because it may lose data (fractional part)."
  },
  {
    "q": "Which suffix is required to make a literal decimal type?",
    "options": ["f", "d", "m", "None"],
    "correct": 2,
    "explanation": "The 'm' or 'M' suffix specifies a decimal literal (e.g., 123.45m)."
  },
  {
    "q": "UTF-16 uses how many bits to represent one character?",
    "options": ["8", "16", "32", "64"],
    "correct": 1,
    "explanation": "UTF-16 uses 16 bits (2 bytes) per character, which covers most common Unicode characters."
  },
  {
    "q": "Which variable type is used to store unsigned integer values?",
    "options": ["int", "uint", "long", "sbyte"],
    "correct": 1,
    "explanation": "uint is specifically for unsigned 32-bit integers (0 to ~4.29 billion)."
  },
  {
    "q": "What is the main difference between value and reference types?",
    "options": ["Value types store data directly, reference types store memory addresses", "Reference types are smaller", "Value types use heap memory", "None"],
    "correct": 0,
    "explanation": "Value types store the actual data in their own memory location (stack). Reference types store an address pointing to data on the heap."
  },
  {
    "q": "The Convert.Toint32 method differs from casting double to int because:",
    "options": ["It rounds the value", "It truncates", "It converts to string", "It throws error always"],
    "correct": 0,
    "explanation": "Convert.ToInt32() uses banker's rounding (to nearest even), while casting truncates the decimal part."
  },
  {
    "q": "What will happen if you try to assign a negative number to a uint variable?",
    "options": ["Compiler error", "Runtime error", "Implicit conversion", "Overflow warning"],
    "correct": 0,
    "explanation": "The compiler detects that a negative value is outside the valid range for uint and gives a compile-time error."
  },
  {
    "q": "Which of these types is a reference type?",
    "options": ["string", "int", "bool", "double"],
    "correct": 0,
    "explanation": "string is a reference type; int, bool, and double are value types."
  },
  {
    "q": "What's the result of (int)5.9 in C#?",
    "options": ["6", "5", "Error", "5.0"],
    "correct": 1,
    "explanation": "Casting from double to int truncates (removes) the fractional part, resulting in 5."
  },
  {
    "q": "Which function reads user input as string in C#?",
    "options": ["Console.ReadLine{}", "Console.ReadLine()", "Console.ReadKey()", "Read.Input()"],
    "correct": 1,
    "explanation": "Console.ReadLine() reads a line of text from the input stream and returns it as a string. (Note: The first two options appear identical in the source; the correct method name is Console.ReadLine())."
  },
  {
    "q": "What is the output type of Convert.Tolnt32(Console.ReadLine())?",
    "options": ["string", "bool", "int", "float"],
    "correct": 2,
    "explanation": "Convert.ToInt32() returns a 32-bit signed integer (int)."
  },
  {
    "q": "Which type of conversion can cause data loss?",
    "options": ["Implicit", "Explicit", "Boolean", "Reference"],
    "correct": 1,
    "explanation": "Explicit conversion (casting) can cause data loss when converting from a larger to a smaller type (e.g., double to int loses decimal part)."
  },
  {
    "q": "What does string s = \"Hello\"; store in variable s?",
    "options": ["The actual text", "A reference (address) to text", "A Boolean value", "None"],
    "correct": 1,
    "explanation": "Since string is a reference type, variable s stores a reference (memory address) pointing to where \"Hello\" is stored on the heap."
  },
  {
    "q": "In 32-bit systems, string variable reference size is:",
    "options": ["4 bytes", "8 bytes", "16 bytes", "Depends on data"],
    "correct": 0,
    "explanation": "On 32-bit systems, memory addresses (references) are 4 bytes in size."
  }
];
const section6Questions = [
  {
    "q": "What is the result of 5 + 3?",
    "options": ["2", "8", "15", "53"],
    "correct": 1,
    "explanation": "The addition operator (+) adds two numbers: 5 + 3 = 8."
  },
  {
    "q": "Which operator is used to add two values?",
    "options": ["*", "/", "+", "%"],
    "correct": 2,
    "explanation": "The plus sign (+) is the addition operator."
  },
  {
    "q": "What does the % operator do?",
    "options": ["Division", "Remainder", "Multiplication", "Comparison"],
    "correct": 1,
    "explanation": "The modulo operator (%) returns the remainder of an integer division."
  },
  {
    "q": "x = x + 1 is equivalent to:",
    "options": ["x++", "++x", "x+1", "-x"],
    "correct": 0,
    "explanation": "x++ is the post-increment operator, which increments x by 1 after its current value is used. It is equivalent to x = x + 1."
  },
  {
    "q": "What is 10 / 3 in integer division?",
    "options": ["3.33", "4", "3", "0"],
    "correct": 2,
    "explanation": "When both operands are integers, the division operator (/) performs integer division, truncating the fractional part. 10 / 3 = 3."
  },
  {
    "q": "Which operator compares values?",
    "options": ["+", "==", "*", "="],
    "correct": 1,
    "explanation": "The equality operator (==) compares two values for equality and returns a boolean."
  },
  {
    "q": "Which logical operator means AND?",
    "options": ["||", "|", "&&", "&"],
    "correct": 2,
    "explanation": "The double ampersand (&&) is the logical AND operator. It returns true only if both operands are true."
  },
  {
    "q": "Console.WriteLine() moves to:",
    "options": ["Next tab", "New line", "Same line", "Deletes line"],
    "correct": 1,
    "explanation": "Console.WriteLine() outputs the specified data followed by a newline character, moving the cursor to the next line."
  },
  {
    "q": "x *= 2 means:",
    "options": ["x = x - 2", "x = x * 2", "x = 2 / x", "x = 2"],
    "correct": 1,
    "explanation": "The compound assignment operator '*=' multiplies the variable by the right-hand value and assigns the result back. So x *= 2 is equivalent to x = x * 2."
  },
  {
    "q": "The ! operator is used to:",
    "options": ["Add", "Reverse boolean", "Multiply", "Compare"],
    "correct": 1,
    "explanation": "The logical NOT operator (!) negates a boolean value, turning true to false and false to true."
  },
  {
    "q": "Which returns true if one condition is true?",
    "options": ["&&", "||", "!", "=="],
    "correct": 1,
    "explanation": "The logical OR operator (||) returns true if at least one of its operands is true."
  },
  {
    "q": "What does ++x do?",
    "options": ["Use then increment", "Increment then use", "Works only on strings", "None"],
    "correct": 1,
    "explanation": "The pre-increment operator (++x) increments the variable's value first, then returns the new value."
  },
  {
    "q": "x++ means:",
    "options": ["Increment before use", "Use before increment", "Double x", "Subtract"],
    "correct": 1,
    "explanation": "The post-increment operator (x++) returns the current value of x, then increments it by 1."
  },
  {
    "q": "Which symbol is used for remainder?",
    "options": ["%", "/", "*", "-"],
    "correct": 0,
    "explanation": "The percent symbol (%) is the modulo operator, which returns the remainder of a division operation."
  },
  {
    "q": "Which produces true/false:",
    "options": ["Arithmetic expression", "Logical expression", "String", "Integer"],
    "correct": 1,
    "explanation": "A logical expression evaluates to a boolean value (true or false)."
  },
  {
    "q": "Condition ? A : B is:",
    "options": ["Loop", "Conditional Operator", "Assignment", "Logical"],
    "correct": 1,
    "explanation": "This is the ternary conditional operator. It evaluates the condition, returns A if true, otherwise B."
  },
  {
    "q": "\"\\n\" means:",
    "options": ["Space", "New line", "Tab", "End"],
    "correct": 1,
    "explanation": "The escape sequence \\n represents a newline character, which moves the cursor to the beginning of the next line."
  },
  {
    "q": "Which has higher precedence?",
    "options": ["+", "-", "*", "=="],
    "correct": 2,
    "explanation": "Multiplication (*) has higher precedence than addition (+), subtraction (-), and equality (==)."
  },
  {
    "q": "x = 5; x += 3; result is:",
    "options": ["15", "8", "2", "5"],
    "correct": 1,
    "explanation": "The compound assignment '+= 3' adds 3 to x. So x becomes 5 + 3 = 8."
  },
  {
    "q": "!(true) =",
    "options": ["true", "false", "0", "1"],
    "correct": 1,
    "explanation": "The logical NOT operator (!) negates the boolean. !(true) results in false."
  },
  {
    "q": "7 % 3 =",
    "options": ["1", "2", "3", "0"],
    "correct": 0,
    "explanation": "7 divided by 3 is 2 with a remainder of 1. So 7 % 3 = 1."
  },
  {
    "q": "What does || represent?",
    "options": ["AND", "OR", "NOT", "XOR"],
    "correct": 1,
    "explanation": "The double pipe (||) is the logical OR operator."
  },
  {
    "q": "In C#, / is:",
    "options": ["Modulus", "Division", "Concatenation", "Logical"],
    "correct": 1,
    "explanation": "The forward slash (/) is the division operator in C#."
  },
  {
    "q": "Which is string concatenation?",
    "options": ["-", "+", "*", "/"],
    "correct": 1,
    "explanation": "The plus operator (+) concatenates strings when at least one operand is a string."
  },
  {
    "q": "Which prints without new line?",
    "options": ["WriteLine()", "Write()", "print()", "input()"],
    "correct": 1,
    "explanation": "Console.Write() outputs text without appending a newline character."
  },
  {
    "q": "(5>3)&&(2<4) =",
    "options": ["false", "true", "error", "None"],
    "correct": 1,
    "explanation": "Both comparisons are true: (5>3) is true, (2<4) is true. true && true = true."
  },
  {
    "q": "'A' is what type?",
    "options": ["string", "char", "int", "bool"],
    "correct": 1,
    "explanation": "Single quotes (' ') denote a character literal, which is of type char."
  },
  {
    "q": "\"Hello\" is what type?",
    "options": ["char", "string", "int", "float"],
    "correct": 1,
    "explanation": "Double quotes (\" \") denote a string literal, which is of type string."
  },
  {
    "q": "Which operator checks equality?",
    "options": ["=", "==", "!=", "=>"],
    "correct": 1,
    "explanation": "The double equals (==) is the equality comparison operator. Single equals (=) is assignment."
  },
  {
    "q": "4 * 2 + 3 =",
    "options": ["14", "11", "10", "7"],
    "correct": 1,
    "explanation": "Multiplication (*) has higher precedence than addition (+). So 4 * 2 = 8, then 8 + 3 = 11."
  },
  {
    "q": "(5 + 3 * 2) =",
    "options": ["11", "16", "10", "6"],
    "correct": 0,
    "explanation": "Multiplication first: 3 * 2 = 6. Then addition: 5 + 6 = 11."
  },
  {
    "q": "(10 % 4) * 2 =",
    "options": ["4", "2", "6", "8"],
    "correct": 0,
    "explanation": "First, 10 % 4 = 2 (remainder). Then, 2 * 2 = 4."
  },
  {
    "q": "Which is evaluated first in a && b || c:",
    "options": ["||", "&&", "==", "+"],
    "correct": 1,
    "explanation": "Logical AND (&&) has higher precedence than logical OR (||)."
  },
  {
    "q": "++x + x++ when x = 3 =",
    "options": ["7", "8", "6", "9"],
    "correct": 1,
    "explanation": "++x increments x to 4 first, then returns 4. x++ returns 4 (current value), then increments x to 5. So 4 + 4 = 8. After the expression, x = 5."
  },
  {
    "q": "(true || false) && false =",
    "options": ["true", "false", "error", "0"],
    "correct": 1,
    "explanation": "true || false = true. Then true && false = false."
  },
  {
    "q": "(8 / 3.0) result type:",
    "options": ["int", "double", "char", "bool"],
    "correct": 1,
    "explanation": "Since 3.0 is a double literal, the division operation promotes the result to double."
  },
  {
    "q": "(5>3) ? 10 : 20 =",
    "options": ["20", "15", "10", "5"],
    "correct": 2,
    "explanation": "The condition (5>3) is true, so the ternary operator returns the first value, 10."
  },
  {
    "q": "(false && true) || true =",
    "options": ["false", "true", "error", "0"],
    "correct": 1,
    "explanation": "false && true = false. Then false || true = true."
  },
  {
    "q": "x = 5; y = ++x + x++; Result of x:",
    "options": ["5", "6", "7", "8"],
    "correct": 2,
    "explanation": "++x increments x to 6 first. x++ uses the current value (6), then increments x to 7. So final x = 7."
  },
  {
    "q": "Same situation result of y:",
    "options": ["10", "11", "12", "13"],
    "correct": 2,
    "explanation": "From previous: ++x gives 6, x++ gives 6 (before increment). So y = 6 + 6 = 12."
  },
  {
    "q": "\"Hi\" + 5 =",
    "options": ["Error", "Hi5", "5Hi", "None"],
    "correct": 1,
    "explanation": "When one operand is a string, the + operator performs string concatenation. The integer 5 is converted to string \"5\", so result is \"Hi5\"."
  },
  {
    "q": "!(5>3 && 2<4) =",
    "options": ["true", "false", "error", "undefined"],
    "correct": 1,
    "explanation": "5>3 is true, 2<4 is true. true && true = true. !true = false."
  },
  {
    "q": "(6 % 4) + (10 / 2) =",
    "options": ["2", "7", "8", "6"],
    "correct": 1,
    "explanation": "6 % 4 = 2. 10 / 2 = 5 (integer division). 2 + 5 = 7."
  },
  {
    "q": "(true && false) || (false || true) =",
    "options": ["true", "false", "undefined", "0"],
    "correct": 0,
    "explanation": "true && false = false. false || true = true. So false || true = true."
  },
  {
    "q": "(3 + 2 * 4) - 6 / 2 =",
    "options": ["9", "10", "8", "7"],
    "correct": 2,
    "explanation": "Multiplication and division first: 2 * 4 = 8, 6 / 2 = 3. Then addition and subtraction: 3 + 8 = 11, 11 - 3 = 8."
  }
];
const section7Questions = [
  {
    "q": "What does an if statement do?",
    "options": ["Repeats code", "Chooses a path based on a condition", "Declares a variable", "Ends the program"],
    "correct": 1,
    "explanation": "The if statement is used for conditional branching. It executes a block of code only if a specified condition evaluates to true."
  },
  {
    "q": "Which value type must the if condition be?",
    "options": ["string", "bool", "int", "char"],
    "correct": 1,
    "explanation": "The condition inside an if statement must evaluate to a Boolean value (true or false)."
  },
  {
    "q": "Which symbol is used for equality comparison?",
    "options": ["=", "==", "!=", ">="],
    "correct": 1,
    "explanation": "The double equals (==) operator is used to check if two values are equal. The single equals (=) is for assignment."
  },
  {
    "q": "else is executed when:",
    "options": ["if is true", "if is false", "always", "never"],
    "correct": 1,
    "explanation": "The else block is executed only when the condition of the preceding if statement is false."
  },
  {
    "q": "Nested if means:",
    "options": ["Multiple if inside if", "Removing if", "Skipping conditions", "Only one condition"],
    "correct": 0,
    "explanation": "A nested if is an if statement placed inside another if or else block, allowing for more complex decision trees."
  },
  {
    "q": "switch is used when:",
    "options": ["Comparing multiple constant values", "Loops required", "Only true/false", "Declaring variables"],
    "correct": 0,
    "explanation": "The switch statement is ideal for selecting one execution path from many based on the value of a single expression, typically against constant values."
  },
  {
    "q": "default inside switch runs when:",
    "options": ["First case is true", "No case matches", "Program ends", "Break missing"],
    "correct": 1,
    "explanation": "The default case is optional and executes only when none of the specified case values match the switch expression."
  },
  {
    "q": "break in switch means:",
    "options": ["Continue", "Exit switch", "Repeat case", "Stop program"],
    "correct": 1,
    "explanation": "The break statement terminates the enclosing switch (or loop) and transfers control to the statement immediately following it."
  },
  {
    "q": "Which operator checks inequality?",
    "options": ["==", "!=", ">", "<="],
    "correct": 1,
    "explanation": "The not-equal operator (!=) returns true if the operands are not equal."
  },
  {
    "q": "if(x>10) means:",
    "options": ["x equals 10", "x is greater than 10", "x less than 10", "Always true"],
    "correct": 1,
    "explanation": "The greater-than operator (>) checks if the left operand is greater than the right operand."
  },
  {
    "q": "else–if chain is used to:",
    "options": ["Skip code", "Check many conditions", "Make loops", "Stop program"],
    "correct": 1,
    "explanation": "An else-if ladder allows you to test multiple conditions sequentially until one is true."
  },
  {
    "q": "Condition ? A : B is:",
    "options": ["Loop", "Branching shortcut", "Data type", "Operator overloading"],
    "correct": 1,
    "explanation": "This is the ternary conditional operator, a shorthand for an if-else statement that returns one of two values."
  },
  {
    "q": "In switch, each case must be:",
    "options": ["A range", "A constant value", "A boolean", "A loop"],
    "correct": 1,
    "explanation": "Case labels in a switch statement must be constant expressions (like literals or const variables)."
  },
  {
    "q": "Which keyword ends a case?",
    "options": ["stop", "break", "exit", "end"],
    "correct": 1,
    "explanation": "In C#, the break statement is typically used to exit a case block and prevent fall-through to the next case."
  },
  {
    "q": "if(x == y) checks:",
    "options": ["If x is assigned y", "If x equals y", "If x greater", "If x lower"],
    "correct": 1,
    "explanation": "The equality operator (==) checks if the values of x and y are equal."
  },
  {
    "q": "x>y returns:",
    "options": ["int", "bool", "float", "char"],
    "correct": 1,
    "explanation": "Relational operators (>, <, ==, etc.) return a Boolean result (true or false)."
  },
  {
    "q": "!true equals:",
    "options": ["true", "false", "1", "undefined"],
    "correct": 1,
    "explanation": "The logical NOT operator (!) negates a boolean value. !true results in false."
  },
  {
    "q": "&& returns true only if:",
    "options": ["One condition is true", "Both conditions are true", "Conditions are false", "None"],
    "correct": 1,
    "explanation": "The logical AND operator (&&) returns true only if both operands are true."
  },
  {
    "q": "|| returns true if:",
    "options": ["Both false", "At least one true", "Both true", "Never"],
    "correct": 1,
    "explanation": "The logical OR operator (||) returns true if at least one of its operands is true."
  },
  {
    "q": "Scope means:",
    "options": ["Code formatting", "Where a variable is accessible", "File extension", "Output type"],
    "correct": 1,
    "explanation": "Scope defines the region of the code where a variable or identifier is recognized and can be used."
  },
  {
    "q": "switch is preferred over many:",
    "options": ["if", "else–if", "loops", "variables"],
    "correct": 1,
    "explanation": "A switch statement is often cleaner and more efficient than a long chain of else-if statements when comparing the same variable against multiple constant values."
  },
  
  {
    "q": "x>= y means:",
    "options": ["x greater or equal y", "x always equals y", "y always greater", "always false"],
    "correct": 0,
    "explanation": "The greater-than-or-equal operator (>=) checks if x is either greater than or equal to y."
  },
  {
    "q": "In nested if, conditions are:",
    "options": ["All executed always", "Checked in sequence", "Ignored", "Automatic"],
    "correct": 1,
    "explanation": "In nested if statements, the outer condition is checked first. If true, the inner condition is then evaluated. They are checked sequentially."
  },
  {
    "q": "default is:",
    "options": ["Optional", "Required", "Repeated", "Looped"],
    "correct": 0,
    "explanation": "The default case in a switch statement is optional. It's good practice to include it to handle unexpected values."
  },
  {
    "q": "Boolean expression results in:",
    "options": ["string", "number", "true/false", "char"],
    "correct": 2,
    "explanation": "A Boolean expression evaluates to a Boolean value, which is either true or false."
  },
  {
    "q": "switch cannot use:",
    "options": ["int", "char", "string", "double"],
    "correct": 3,
    "explanation": "In C#, a switch expression cannot be of type double (or float) because floating-point values are imprecise and equality comparisons are unreliable. Switch expressions can be integers, characters, strings, enums, and certain other types."
  },
  {
    "q": "else must follow:",
    "options": ["switch", "if", "variable", "string"],
    "correct": 1,
    "explanation": "An else clause is always associated with a preceding if statement (or else if)."
  },
  {
    "q": "In if–else, only one block:",
    "options": ["Runs", "Compiles", "Prints", "Declares"],
    "correct": 0,
    "explanation": "In an if-else construct, either the if block (if condition is true) or the else block (if condition is false) will execute, but never both."
  },
  {
    "q": "Logical NOT (!) does:",
    "options": ["Add values", "Reverse boolean result", "Compare numbers", "Assign data"],
    "correct": 1,
    "explanation": "The logical NOT operator (!) inverts a boolean value: true becomes false, and false becomes true."
  },
  {
    "q": "What happens if break is missing in switch?",
    "options": ["Error", "Next cases will also execute (fall–through)", "Program stops", "Loop restarts"],
    "correct": 1,
    "explanation": "In C#, if you omit the break statement (or another jump statement like return, goto, or throw), control will \"fall through\" to the next case label and execute its code, which is usually unintended."
  },
  {
    "q": "else–if chain stops checking when:",
    "options": ["First true condition is found", "All are checked always", "Last condition is true", "default runs"],
    "correct": 0,
    "explanation": "In an else-if ladder, conditions are evaluated from top to bottom. Execution stops at the first true condition, and its associated block runs. The rest are skipped."
  },
  {
    "q": "switch is faster than else–if when:",
    "options": ["Conditions are ranges", "Comparing fixed constant values", "Using nested loops", "Using strings only"],
    "correct": 1,
    "explanation": "The compiler can sometimes optimize a switch statement into a jump table, making it faster than a series of else-if checks, especially for many constant values."
  },
  {
    "q": "if(x>5 && x<10) checks:",
    "options": ["range", "single value", "loops", "switch"],
    "correct": 0,
    "explanation": "This condition uses the logical AND (&&) to check if x is within the exclusive range (5, 10) — greater than 5 AND less than 10."
  },
  {
    "q": "In nested if, readability issue is solved by:",
    "options": ["switch", "indentation", "loops", "random"],
    "correct": 1,
    "explanation": "Proper indentation is crucial for visually clarifying the structure and scope of nested if statements, making them easier to read and understand."
  },
  {
    "q": "(false || true && false) equals:",
    "options": ["true", "false", "error", "undefined"],
    "correct": 1,
    "explanation": "Logical AND (&&) has higher precedence than OR (||). So: true && false = false. Then false || false = false."
  },
  {
    "q": "Which is evaluated first: && or ||?",
    "options": ["&&", "||", "They are equal", "Depends on compiler"],
    "correct": 0,
    "explanation": "In C#, the logical AND operator (&&) has higher precedence than the logical OR operator (||)."
  },
  {
    "q": "switch cannot compare floating numbers because:",
    "options": ["They are inaccurate in memory", "Syntax error", "Case mismatch", "Loops interfere"],
    "correct": 0,
    "explanation": "Floating-point numbers (float, double) have precision limitations, making exact equality comparisons unreliable, which is why they are not allowed as switch expressions."
  },
  {
    "q": "In switch, two cases can:",
    "options": ["Have same value", "Share same output", "Replace default", "Remove break"],
    "correct": 1,
    "explanation": "While two case labels cannot have the same constant value, they can share the same code block by using a technique called case stacking or fall-through (if allowed by omitting break). However, a more common and clear way is to have separate case labels that execute the same block. The best answer here is that they can share the same output or code execution path."
  },
  {
    "q": "if(a == b) vs if(a = b):",
    "options": ["Same behavior", "First compares, second assigns", "Both compare", "Both assign"],
    "correct": 1,
    "explanation": "if(a == b) is a comparison. if(a = b) is an assignment (assigns b to a) and then uses the value of a as the condition. In C#, this would cause a compile-time error unless a is a bool, because the condition must be a bool."
  },
  {
    "q": "Ternary operator is:",
    "options": ["?:", "&&", "||", "=="],
    "correct": 0,
    "explanation": "The ternary conditional operator is the only operator in C# that takes three operands and is written as 'condition ? true_expression : false_expression'."
  },
  {
    "q": "(true && !false) equals:",
    "options": ["false", "true", "undefined", "none"],
    "correct": 1,
    "explanation": "!false = true. true && true = true."
  },
  {
    "q": "Which is invalid in switch:",
    "options": ["case 1:", "case \"H\":", "case x>5:", "default:"],
    "correct": 2,
    "explanation": "case labels must be constant expressions. 'x>5' is a relational expression, not a constant value."
  },
  {
    "q": "The best use of switch is:",
    "options": ["Many constant choices", "Continuous ranges", "Floating checks", "Looping"],
    "correct": 0,
    "explanation": "The switch statement is designed for efficiently selecting an action from a set of discrete, constant values."
  },
  {
    "q": "else is skipped when:",
    "options": ["condition true", "condition false", "program ends", "break occurs"],
    "correct": 0,
    "explanation": "If the condition in the if statement is true, the if block executes and the else block is completely skipped."
  }
];
const section8Questions = [
  {
    "q": "What determines whether a while loop continues executing?",
    "options": ["The update statement", "The loop condition", "The counter start value", "The nesting level"],
    "correct": 1,
    "explanation": "A while loop repeats as long as its condition evaluates to true. When the condition becomes false, the loop stops."
  },
  {
    "q": "Which loop guarantees at least one execution?",
    "options": ["for loop", "while loop", "do..while loop", "nested loop"],
    "correct": 2,
    "explanation": "The do-while loop executes its body first, then checks the condition, ensuring the block runs at least once."
  },
  {
    "q": "Minimum number of executions for a while loop is:",
    "options": ["0", "1", "2", "Infinite"],
    "correct": 0,
    "explanation": "If the condition is false at the very start, the while loop's body is never executed."
  },
  {
    "q": "A missing update inside a while loop commonly leads to:",
    "options": ["Syntax error", "Infinite loop", "No output", "Nested loop"],
    "correct": 1,
    "explanation": "Without modifying the loop control variable (the update), the condition may never become false, causing the loop to run indefinitely."
  },
  {
    "q": "The primary purpose of the update statement inside loops is:",
    "options": ["Formatting output", "Changing loop control variables", "Ending the program", "Printing values"],
    "correct": 1,
    "explanation": "The update statement modifies the variable that controls the loop's condition, moving it towards the point where the condition will be false and the loop can end."
  },
  {
    "q": "The do..while loop is ideal for:",
    "options": ["Taking guaranteed first-time input", "Ensuring zero executions", "Running only once", "Handling nested loops"],
    "correct": 0,
    "explanation": "Because it executes at least once, do-while is perfect for scenarios like prompting a user for input, where you need to ask at least one time."
  },
  {
    "q": "Converting do..while to while requires:",
    "options": ["Removing input", "Duplicating input code", "Removing update", "Adding break"],
    "correct": 1,
    "explanation": "To mimic the guaranteed first execution of a do-while, the code inside the do-while body (like input) must be written once before the while loop starts, or duplicated."
  },
  {
    "q": "A for loop is best used when:",
    "options": ["Number of iterations is known", "No update is needed", "Input is required", "Loop must run indefinitely"],
    "correct": 0,
    "explanation": "The for loop's structure (initialization; condition; update) is ideal when you know beforehand how many times you want to iterate."
  },
  {
    "q": "In a for loop, the initialization executes:",
    "options": ["Every iteration", "Only once", "Only if condition fails", "At the end"],
    "correct": 1,
    "explanation": "The initialization statement in a for loop runs exactly once, before the first evaluation of the loop condition."
  },
  {
    "q": "In a for loop, update executes:",
    "options": ["Before the loop begins", "After each iteration", "Only at end of program", "Randomly"],
    "correct": 1,
    "explanation": "The update statement is executed at the end of each iteration, right before the condition is checked again for the next iteration."
  },
  {
    "q": "Checking divisibility in prime-number nested loops belongs to:",
    "options": ["Outer loop", "Inner loop", "Both loops", "No loops"],
    "correct": 1,
    "explanation": "The inner loop is responsible for testing the divisibility of the current number (from the outer loop) by potential divisors."
  },
  {
    "q": "Nested loops total iterations equal:",
    "options": ["outer – inner", "outer × inner", "outer + inner", "inner only"],
    "correct": 1,
    "explanation": "For each single iteration of the outer loop, the entire inner loop completes all its iterations. Total iterations = (outer loop count) × (inner loop count)."
  },
  {
    "q": "continue inside a loop:",
    "options": ["Exits the loop", "Skips to next iteration", "Restarts loop", "Ends program"],
    "correct": 1,
    "explanation": "The continue statement skips the remaining code in the current iteration and proceeds directly to the next iteration of the loop."
  },
  {
    "q": "break inside a loop:",
    "options": ["Ends entire loop immediately", "Runs the update twice", "Only skips iteration", "Repeats last iteration"],
    "correct": 0,
    "explanation": "The break statement terminates the innermost loop (or switch) it is in, and control passes to the statement immediately following the loop."
  },
  {
    "q": "Using continue to ignore negative inputs means:",
    "options": ["Negative values are summed", "Negative values are skipped", "Loop ends early", "Program stops"],
    "correct": 1,
    "explanation": "When a negative input is detected, a continue statement would skip the processing (like adding to a sum) for that input and move to ask for the next number."
  },
  {
    "q": "The inner loop of nested loops usually controls:",
    "options": ["Rows", "Columns", "Both", "None"],
    "correct": 1,
    "explanation": "In a typical pattern (like a grid), the outer loop controls the rows, and the inner loop controls the columns within each row."
  },
  {
    "q": "Printing a right triangle of * requires:",
    "options": ["One loop", "Two nested loops", "while only", "break and continue"],
    "correct": 1,
    "explanation": "Printing a triangle pattern requires one loop to handle the rows and an inner loop to handle the number of stars (columns) in each row."
  },
  {
    "q": "The outer loop in prime checking runs over:",
    "options": ["Divisors", "Numbers to test", "Odd numbers only", "Even numbers only"],
    "correct": 1,
    "explanation": "The outer loop iterates through the sequence of numbers you want to check for being prime (e.g., from 2 to 100)."
  },
  {
    "q": "A loop that always breaks in first iteration is:",
    "options": ["Useful", "Equivalent to no loop", "Infinite", "Nested"],
    "correct": 1,
    "explanation": "If a break statement always executes in the first iteration, the loop body never repeats, making the loop essentially pointless. You could just write the code outside a loop."
  },
  {
    "q": "A condition that never becomes false causes:",
    "options": ["No output", "Infinite loop", "Nested loop", "Compilation error"],
    "correct": 1,
    "explanation": "If the loop's exit condition never evaluates to false (e.g., while(true)), the loop will run forever unless stopped externally (like a break statement)."
  },
  {
    "q": "While loop executes its block when:",
    "options": ["Condition is true", "Condition is false", "Input is received", "Update is skipped"],
    "correct": 0,
    "explanation": "The fundamental rule of a while loop: the code inside the braces executes if, and only if, the condition evaluates to true."
  },
  {
    "q": "do..while checks condition:",
    "options": ["Before execution", "After execution", "Randomly", "Before update"],
    "correct": 1,
    "explanation": "The key characteristic of a do-while loop: the body executes first, then the condition is evaluated to decide whether to repeat."
  },
  {
    "q": "for loop condition is checked:",
    "options": ["After update", "Before each iteration", "At end only", "Never"],
    "correct": 1,
    "explanation": "At the start of each iteration (including the first), the condition is evaluated. If true, the iteration proceeds; if false, the loop ends."
  },
  {
    "q": "The code inside while executes:",
    "options": ["A fixed number of times", "Until the condition becomes false", "Only once", "Random times"],
    "correct": 1,
    "explanation": "A while loop repeats its body for as long as the condition remains true. The number of iterations is not fixed at the start but depends on when the condition changes."
  },
  {
    "q": "Inner loop executes:",
    "options": ["Once per program", "Fully for each outer iteration", "Only if break exists", "Only for odd iterations"],
    "correct": 1,
    "explanation": "For each single pass (iteration) of the outer loop, the inner loop runs through its complete cycle from start to finish."
  },
  {
    "q": "The update in for loop ensures:",
    "options": ["Loop stops eventually", "Loop becomes infinite", "Condition never checked", "Condition turns true"],
    "correct": 0,
    "explanation": "The update step modifies the loop counter, moving it closer to the point where the condition will be false, allowing the loop to terminate."
  },
  {
    "q": "Code after continue inside loop:",
    "options": ["Always runs", "Never runs for that iteration", "Runs twice", "Requires break"],
    "correct": 1,
    "explanation": "When a continue statement is reached, the rest of the statements in the current iteration are skipped, and the loop jumps to the next iteration."
  },
  {
    "q": "break affects:",
    "options": ["Inner loop only", "Entire loop", "Conditional block", "Update only"],
    "correct": 1,
    "explanation": "A break statement terminates the innermost loop (for, while, do-while, or switch) that encloses it."
  },
  {
    "q": "Nested loops are needed for:",
    "options": ["Single-line printing", "Multi-dimensional patterns", "Exiting program", "Reading one number"],
    "correct": 1,
    "explanation": "To generate two-dimensional outputs like grids, triangles, or tables, you need one loop inside another (nested loops)."
  },
  {
    "q": "In prime-checking, break is used to:",
    "options": ["Repeat test", "End divisibility testing early", "Skip printing", "Restart loop"],
    "correct": 1,
    "explanation": "As soon as a divisor is found (proving the number is not prime), a break statement can exit the inner testing loop early, saving unnecessary checks."
  },
  {
    "q": "A number is prime when:",
    "options": ["It is divisible by x", "It is not divisible by any x", "It is even", "It is negative"],
    "correct": 1,
    "explanation": "A prime number is a whole number greater than 1 that has no positive divisors other than 1 and itself."
  },
  {
    "q": "Initialization of counters is important because:",
    "options": ["Prevents infinite loops", "Slows down code", "Removes update need", "Makes loop nested"],
    "correct": 0,
    "explanation": "Properly initializing the loop control variable ensures the loop starts in a valid state and progresses correctly towards its termination condition."
  },
  {
    "q": "A loop that sums 5 numbers uses:",
    "options": ["while only", "for with 5 iterations", "do...while only", "break only"],
    "correct": 1,
    "explanation": "Since the number of iterations (5) is known beforehand, a for loop is the most straightforward and commonly used choice."
  },
  {
    "q": "For printing 1 to 5:",
    "options": ["Start = 0", "Start = 1", "Start = 5", "No start needed"],
    "correct": 1,
    "explanation": "To print numbers 1 through 5, the loop counter (e.g., i) should be initialized to 1."
  },
  {
    "q": "continue should be used when:",
    "options": ["Entire loop must stop", "Some values must be skipped", "Update must be removed", "Nested loop needed"],
    "correct": 1,
    "explanation": "The continue statement is designed to skip over specific cases within a loop while allowing the loop to continue with the next iteration."
  },
  {
    "q": "break should be used when:",
    "options": ["You want to terminate loop early", "You want more iterations", "You want update skipped", "You want nested loop"],
    "correct": 0,
    "explanation": "Use break when you need to exit a loop immediately upon meeting a certain condition, before the normal loop condition becomes false."
  },
  {
    "q": "do..while minimum executions:",
    "options": ["0", "1", "3", "5"],
    "correct": 1,
    "explanation": "A do-while loop always executes its body at least one time, regardless of the condition."
  },
  {
    "q": "while minimum executions:",
    "options": ["1", "0", "2", "infinite"],
    "correct": 1,
    "explanation": "A while loop can execute zero times if its condition is false at the very beginning."
  },
  {
    "q": "In nested loops for squares:",
    "options": ["Outer prints columns", "Inner prints columns", "Both print rows", "None"],
    "correct": 1,
    "explanation": "When printing a square grid, the outer loop typically represents each row. The inner loop, which runs completely for each row, prints the columns (elements) within that row."
  },
  {
    "q": "A flipped right triangle needs:",
    "options": ["break", "continue", "reversed nested loops", "while only"],
    "correct": 2,
    "explanation": "To print a right triangle that is flipped (pointing right or mirrored), you adjust the logic of the inner loop, often by changing its start point, end condition, or the number of spaces printed."
  },
  {
    "q": "Missing update in for loop causes:",
    "options": ["No issue", "Infinite loop", "Reverse order", "Wrong scope"],
    "correct": 1,
    "explanation": "If the update part of a for loop is omitted (e.g., for(int i=0; i<5; )), the loop variable never changes, so the condition never becomes false, resulting in an infinite loop."
  },
  {
    "q": "In prime checking, inner loop tests:",
    "options": ["From 2 to n/2", "From 1 to n", "From 10 to 20", "Only odd numbers"],
    "correct": 0,
    "explanation": "A common optimization: you only need to test divisors from 2 up to n/2 (or, even better, up to the square root of n). If no divisor is found in that range, the number is prime."
  },
  {
    "q": "Loop repetition allows:",
    "options": ["Removing conditions", "Avoiding repetition of code", "Ending program early", "Replacing variables"],
    "correct": 1,
    "explanation": "This is the core purpose of loops: to execute the same block of code multiple times without having to write that block multiple times in the source code."
  },
  {
    "q": "A while loop ends when:",
    "options": ["Condition becomes false", "Update removed", "Input ends", "Random"],
    "correct": 0,
    "explanation": "The while loop terminates as soon as its conditional expression evaluates to false."
  },
  {
    "q": "A do..while loop ends when:",
    "options": ["Condition becomes false", "Condition true", "Input equals 0", "break missing"],
    "correct": 0,
    "explanation": "Like a while loop, a do-while loop continues as long as its condition is true. It stops when the condition becomes false after an iteration."
  }
];
const section9Questions = [
  {
    "q": "Given int[] a={1,2,3}; int[] b=(int[])a.Clone(); b[0]=9; what is a[0]?",
    "options": ["1", "9", "0", "Error"],
    "correct": 0,
    "explanation": "The Clone() method creates a shallow copy of the array, which for value type arrays like int[] means a new, separate array is allocated in memory. Changes to 'b' do not affect 'a'."
  },
  {
    "q": "Which operation causes LOH allocation?",
    "options": ["int[100]", ">85KB array allocation", "bool[50]", "byte[10]"],
    "correct": 1,
    "explanation": "In .NET, objects larger than 85,000 bytes are allocated on the Large Object Heap (LOH) instead of the regular GC heap. A large array can exceed this threshold."
  },
  {
    "q": "What is complexity of Array.Sort()?",
    "options": ["O(n^2)", "O(log n)", "O(n log n)", "O(n)"],
    "correct": 2,
    "explanation": "Array.Sort() typically uses an efficient hybrid sorting algorithm like IntroSort (a combination of Quicksort, Heapsort, and Insertion Sort), which has an average and worst-case time complexity of O(n log n)."
  },
  {
    "q": "Access time of arr[i] is:",
    "options": ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
    "correct": 3,
    "explanation": "Array access is constant time (O(1)) because the memory address of any element can be calculated directly using the base address, index, and element size (pointer arithmetic)."
  },
  {
    "q": "Which fails at runtime?",
    "options": ["j[0][1] when j[0] length=1", "matrix[2,2] on 2x2", "arr[0]", "all safe"],
    "correct": 0,
    "explanation": "In a jagged array, each inner array can have a different length. If j[0] has length 1, accessing index 1 (j[0][1]) is out of bounds and will throw an IndexOutOfRangeException at runtime."
  },
  {
    "q": "What is true about jagged arrays?",
    "options": ["All rows equal", "Rows independent", "Contiguous block", "Fixed rows"],
    "correct": 1,
    "explanation": "A jagged array is an \"array of arrays.\" Each inner array (row) is a separate object, so they can have different lengths and are independent of each other."
  },
  {
    "q": "int[,] m=new int[2,3]; m.Length?",
    "options": ["5", "2", "6", "3"],
    "correct": 2,
    "explanation": "For a rectangular multi-dimensional array, the Length property returns the total number of elements across all dimensions. A 2x3 array has 6 elements."
  },
  {
    "q": "Given int[] a={5,10,7,8}; sum via loop equals:",
    "options": ["29", "28", "25", "30"],
    "correct": 3,
    "explanation": "The sum of the elements 5 + 10 + 7 + 8 is 30."
  },
  {
    "q": "foreach limitation:",
    "options": ["Iteration variable read-only", "Cannot access elements", "No index", "Cannot break"],
    "correct": 0,
    "explanation": "In a foreach loop, the iteration variable is read-only. You cannot assign a new value to it within the loop body (it's like a local readonly variable)."
  },
  {
    "q": "Which prevents OutOfMemory?",
    "options": ["Using 1D large", "Using jagged", "Allocating huge block", "Deep clone"],
    "correct": 1,
    "explanation": "Jagged arrays can be more memory-efficient for very large or irregular datasets because they don't require a single contiguous memory block. This can help avoid fragmentation and OutOfMemory exceptions related to the Large Object Heap."
  },
  {
    "q": "Rank of int[,,] is:",
    "options": ["2", "1", "3", "4"],
    "correct": 2,
    "explanation": "The rank of an array is its number of dimensions. int[,,] declares a three-dimensional array, so its rank is 3."
  },
  {
    "q": "matrix.GetLength(1) gives:",
    "options": ["rows", "depth", "total", "cols"],
    "correct": 3,
    "explanation": "For a 2D array, GetLength(0) returns the number of rows (first dimension), and GetLength(1) returns the number of columns (second dimension)."
  },
  {
    "q": "Which is valid?",
    "options": ["new int[][]{1,2}", "int[] a={1,2}", "int[] a=new int[2][1,2]", "all"],
    "correct": 0,
    "explanation": "The syntax 'new int[][]{1,2}' is shorthand for 'new int[][] { new int[] {1}, new int[] {2} }', creating a jagged array with two inner arrays. This is a valid C# expression. (Note: Option B is also valid, but the question likely expects a specific answer related to jagged array syntax)."
  },
  {
    "q": "Default char[] values:",
    "options": ["space", "\\0", "null", "undefined"],
    "correct": 1,
    "explanation": "The default value for the char type is '\\0', the Unicode null character. When an array of char is created, each element is initialized to '\\0'."
  },
  {
    "q": "string[] s=new string[3]; s[0] is:",
    "options": ["empty", "0", "null", "undefined"],
    "correct": 2,
    "explanation": "For reference type arrays (like string[]), each element is initialized to the default value of the type, which for reference types is null."
  },
  {
    "q": "Jagged traversal requires:",
    "options": ["single foreach", "reverse only", "matrix loop", "nested foreach"],
    "correct": 3,
    "explanation": "To traverse all elements in a jagged array, you need nested loops: an outer loop to iterate through the array of arrays, and an inner loop to iterate through each inner array."
  },
  {
    "q": "Given int[][] j={new[]{1},null,new[]{3}}; j[1][0] gives:",
    "options": ["Exception", "1", "0", "3"],
    "correct": 0,
    "explanation": "j[1] is null. Trying to access an index on a null reference (j[1][0]) throws a NullReferenceException."
  },
  {
    "q": "Which is contiguous?",
    "options": ["int[][]", "int[,]", "jagged 2D", "any reference"],
    "correct": 1,
    "explanation": "A rectangular multi-dimensional array (int[,]) is stored as a single contiguous block of memory. Jagged arrays (int[][]) are not contiguous because each inner array is a separate object."
  },
  {
    "q": "What exception raised by arr[-1]?",
    "options": ["NullReference", "Overflow", "IndexOutOfRange", "DivideByZero"],
    "correct": 2,
    "explanation": "Array indices must be non-negative and less than the array's length. Using -1 as an index throws an IndexOutOfRangeException."
  },
  {
    "q": "Output? int[] a=new int[3]; Console.Write(a[1]);",
    "options": ["1", "null", "error", "0"],
    "correct": 3,
    "explanation": "When an array of value types (like int) is created, each element is initialized to the type's default value. For int, that is 0."
  },
  {
    "q": "Given int[,,] t=new int[2,2,2]; t.Length?",
    "options": ["8", "4", "2", "6"],
    "correct": 0,
    "explanation": "A 3D array with dimensions 2x2x2 has 2 * 2 * 2 = 8 total elements."
  },
  {
    "q": "Jagged advantage:",
    "options": ["Fastest always", "Memory efficient irregular", "Sorted automatically", "Contiguous"],
    "correct": 1,
    "explanation": "The main advantage of jagged arrays is memory efficiency for irregular or sparse data. You don't waste space by allocating a rectangular grid when rows have varying lengths."
  },
  {
    "q": "Sorting int[] a={3,1,2} gives:",
    "options": ["3,2,1", "2,1,3", "1,2,3", "error"],
    "correct": 2,
    "explanation": "Array.Sort sorts in ascending order by default. So {3,1,2} becomes {1,2,3}."
  },
  {
    "q": "Reversing sorted array gives:",
    "options": ["ascending", "mixed", "null", "descending"],
    "correct": 3,
    "explanation": "Reversing an array that is sorted in ascending order will produce an array sorted in descending order."
  },
  {
    "q": "Which copies values?",
    "options": ["CopyTo", "Alias", "Reference", "Ref"],
    "correct": 0,
    "explanation": "The CopyTo method (or Array.Copy) copies the elements from one array to another, creating a new copy of the data in memory."
  },
  {
    "q": "Given int[] a={1,2,3}; int[] b=a; modifying b affects?",
    "options": ["none", "both", "a only", "b only"],
    "correct": 1,
    "explanation": "When you assign one array variable to another (b = a), you are copying the reference, not the array itself. Both variables now point to the same array object in memory, so changes made through one variable are visible through the other."
  },
  {
    "q": "Memory of value types in arrays:",
    "options": ["stored in stack", "stored in CPU", "stored inside array", "not stored"],
    "correct": 2,
    "explanation": "For arrays of value types, the actual data is stored contiguously within the array's memory allocation on the heap."
  },
  {
    "q": "Memory of reference types in arrays:",
    "options": ["objects", "copies", "structs", "references"],
    "correct": 3,
    "explanation": "An array of a reference type stores references (pointers or memory addresses) to the actual objects. The objects themselves live elsewhere on the heap."
  },
  {
    "q": "Which is true?",
    "options": ["Array size fixed", "Array resizable", "Length modifiable", "Heap moves array"],
    "correct": 0,
    "explanation": "In C#, once an array is created, its size (length) is fixed and cannot be changed. To resize, you must create a new array and copy the data."
  },
  {
    "q": "foreach on matrix iterates:",
    "options": ["per row only", "flattened", "per column", "random"],
    "correct": 1,
    "explanation": "When you use foreach on a multi-dimensional array (like int[,]), it iterates through all elements in a flattened, row-major order (all elements of row 0, then row 1, etc.)."
  },
  {
    "q": "Calculate: A={1,2}; B={3,4}; Dot product:",
    "options": ["10", "7", "11", "6"],
    "correct": 2,
    "explanation": "The dot product of two vectors is the sum of the products of corresponding elements: (1*3) + (2*4) = 3 + 8 = 11."
  },
  {
    "q": "Matrix multiply valid when:",
    "options": ["rows==rows", "cols==cols", "any", "colsA==rowsB"],
    "correct": 3,
    "explanation": "For matrix multiplication A × B to be defined, the number of columns in matrix A must equal the number of rows in matrix B."
  },
  {
    "q": "Which initialization is valid?",
    "options": ["new int[]{1,2}", "int[] a={1,2}", "int[] a=new int[2]{1,2}", "all"],
    "correct": 3,
    "explanation": "All three are valid ways to declare and initialize an array in C#: 1) Implicitly typed, 2) Short form, 3) Explicit size with initializer list."
  },
  {
    "q": "What is printed? int[][] j = { new[]{1,2}, new[]{3,4} }; Console.Write(j[0][1]);",
    "options": ["1", "2", "3", "4"],
    "correct": 1,
    "explanation": "j[0] refers to the first inner array {1,2}. j[0][1] accesses the second element of that inner array, which is 2."
  },
  {
    "q": "Given int[] a={1,2,3}; Array.Reverse(a); a[0]?",
    "options": ["2", "1", "3", "0"],
    "correct": 2,
    "explanation": "Array.Reverse modifies the array in-place. Reversing {1,2,3} yields {3,2,1}, so a[0] becomes 3."
  },
  {
    "q": "What is LOH threshold?",
    "options": [">1MB", ">1GB", "any array", ">85KB"],
    "correct": 3,
    "explanation": "The Large Object Heap (LOH) threshold in .NET is 85,000 bytes (approximately 85 KB). Objects larger than this are allocated on the LOH."
  },
  {
    "q": "Which loops must match row/col?",
    "options": ["2D nested for", "single foreach", "ref loop", "while only"],
    "correct": 0,
    "explanation": "When manually iterating over a 2D rectangular array using nested for loops, the outer loop index typically corresponds to rows, and the inner loop index to columns. You must use the correct bounds (GetLength(0) and GetLength(1))."
  },
  {
    "q": "Which prints all jagged items?",
    "options": ["single for", "nested foreach", "single foreach", "matrix loop"],
    "correct": 1,
    "explanation": "To print all elements in a jagged array, you need a nested loop structure. Using nested foreach loops is a clean and common approach: foreach (var innerArray in jaggedArray) { foreach (var item in innerArray) { ... } }."
  },
  {
    "q": "What happens: j[0]=new int[1]; j[0][0]?",
    "options": ["1", "null", "0", "error"],
    "correct": 2,
    "explanation": "After j[0] = new int[1], the first row points to a new integer array of size 1. All elements in a new int array are initialized to 0, so j[0][0] is 0."
  },
  {
    "q": "Given int[] a=new int[0]; a.Length?",
    "options": ["1", "null", "error", "0"],
    "correct": 3,
    "explanation": "An array can have zero length. new int[0] creates an empty array, and its Length property is 0."
  },
  {
    "q": "matrix.GetLength(0) gives:",
    "options": ["rows", "cols", "total", "depth"],
    "correct": 0,
    "explanation": "For a 2D array, dimension 0 is the first dimension, which typically represents rows. GetLength(0) returns the number of rows."
  },
  {
    "q": "Which fails? m[1,3] on 2x3 array:",
    "options": ["NullRef", "IndexOutOfRange", "OK", "none"],
    "correct": 1,
    "explanation": "A 2x3 array has valid row indices 0-1 and column indices 0-2. Accessing column index 3 is out of range and throws an IndexOutOfRangeException."
  },
  {
    "q": "Resizing array while keeping values requires:",
    "options": ["Length++", "aliasing", "new array + CopyTo", "stack copy"],
    "correct": 2,
    "explanation": "Arrays are fixed-size. To effectively resize an array, you must create a new array of the desired size and copy the elements from the old array to the new one using Array.Copy, CopyTo, or similar methods."
  },
  {
    "q": "Which is correct?",
    "options": ["Sort returns new", "Sort clones", "Sort deletes", "Array.Sort modifies original"],
    "correct": 3,
    "explanation": "Array.Sort is an in-place sorting algorithm. It sorts the elements within the original array and does not return a new array."
  },
  {
    "q": "What prints? int[] a={2,4,6}; Console.Write(a.Length);",
    "options": ["3", "2", "6", "error"],
    "correct": 0,
    "explanation": "The Length property returns the number of elements in the array. Array 'a' has 3 elements."
  },
  {
    "q": "Which describes jagged?",
    "options": ["matrix", "array of arrays", "cube", "dynamic only"],
    "correct": 1,
    "explanation": "A jagged array is precisely an \"array of arrays.\" Each element of the outer array is itself an array, which can be of different lengths."
  }
];
const section10Questions =[
  {
    "q": "static int Add(int a, int b) { return a + b; } Console.WriteLine(Add(2, 5));",
    "options": ["2", "5", "7", "Compile-time error"],
    "correct": 2,
    "explanation": "The Add method takes two integers, adds them, and returns the result. Add(2, 5) returns 7, which is then printed."
  },
  {
    "q": "static int Add(int a, int b) { return a + b; } Console.WriteLine(Add(3, Add(1, 2)));",
    "options": ["3", "5", "6", "Compile-time error"],
    "correct": 2,
    "explanation": "First, the inner Add(1, 2) is evaluated, returning 3. Then Add(3, 3) is called, returning 6."
  },
  {
    "q": "static void Print(int x) { Console.WriteLine(x); } int a = Print(5);",
    "options": ["Prints 5 and a becomes 5", "Prints 5 and a becomes 0", "Compile-time error", "Runtime error"],
    "correct": 2,
    "explanation": "The Print method has a void return type, meaning it does not return a value. It cannot be used on the right-hand side of an assignment statement, causing a compile-time error."
  },
  {
    "q": "static int Double(int x) { Console.WriteLine(x); return x * 2; } int a = Double(4);",
    "options": ["Only 8 is printed", "Only 4 is printed", "4 is printed and a becomes 8", "Nothing is printed"],
    "correct": 2,
    "explanation": "When Double(4) is called, it first prints the parameter value 4, then returns 4 * 2 = 8, which is assigned to variable a."
  },
  {
    "q": "static void Show() { Console.WriteLine(\"Hi\"); } Show(); Show();",
    "options": ["Prints Hi once", "Prints Hi twice", "Compile-time error", "Runtime error"],
    "correct": 1,
    "explanation": "The Show method is invoked twice in sequence, so \"Hi\" will be printed on two separate lines."
  },
  {
    "q": "static int Inc(int x) { x++; return x; } int a = 5; Console.WriteLine(Inc(a)); Console.WriteLine(a);",
    "options": ["6 then 6", "6 then 5", "5 then 6", "5 then 5"],
    "correct": 1,
    "explanation": "a is passed by value to Inc. Inside Inc, x is incremented to 6 and returned (first output: 6). However, the original variable a remains unchanged at 5 (second output: 5)."
  },
  {
    "q": "static void Test() { return; Console.WriteLine(\"After return\"); } Test();",
    "options": ["Nothing is printed", "After return is printed", "Compile-time error", "Runtime error"],
    "correct": 0,
    "explanation": "The return statement exits the method immediately. Any code after it within the same block is unreachable and will not be executed."
  },
  {
    "q": "static int Multiply(int a, int b) { return a * b; } Console.WriteLine(Multiply(2, Multiply(2, 3)));",
    "options": ["12", "18", "24", "Error"],
    "correct": 0,
    "explanation": "Inner Multiply(2, 3) = 6. Outer Multiply(2, 6) = 12."
  },
  {
    "q": "string s = \"hello\"; Console.WriteLine(s.ToUpper());",
    "options": ["hello", "HELLO", "Compile-time error", "Runtime error"],
    "correct": 1,
    "explanation": "ToUpper() is an instance method of the string class that returns a new string with all letters converted to uppercase."
  },
  {
    "q": "class Program { static void PrintStatic() { Console.WriteLine(\"Static\"); } void PrintInstance() { Console.WriteLine(\"Instance\"); } static void Main() { PrintStatic(); // PrintInstance(); } }",
    "options": ["Both lines compile and run", "Only PrintStatic can be called directly in Main", "Only PrintInstance can be called", "Code does not compile at all"],
    "correct": 1,
    "explanation": "Main is a static method. It can directly call other static methods (PrintStatic). To call an instance method (PrintInstance), you need an instance of the Program class. The commented call would cause a compile error if uncommented."
  },
  {
    "q": "static int Add(int a, int b) { return a + b; } static double Add(double a, double b) { return a + b; } Console.WriteLine(Add(2, 3));",
    "options": ["Calls int version and prints 5", "Calls double version and prints 5.0", "Ambiguous call error", "Runtime error"],
    "correct": 0,
    "explanation": "This is method overloading. The compiler chooses the overload that best matches the argument types. Since 2 and 3 are integer literals, the int version is selected."
  },
  {
    "q": "static int Add(int a, int b, int c) { return a + b + c; } static int Add(int a, int b) { return a + b; } Console.WriteLine(Add(1, 2, 3));",
    "options": ["3", "5", "6", "Compile-time error"],
    "correct": 2,
    "explanation": "With three integer arguments provided, the compiler selects the three-parameter overload of Add. The result is 1 + 2 + 3 = 6."
  },
  {
    "q": "static void Print(double x) { Console.WriteLine(\"double\"); } static void Print(int x) { Console.WriteLine(\"int\"); } Print(5);",
    "options": ["double", "int", "Error", "Nothing"],
    "correct": 1,
    "explanation": "The literal 5 is of type int. An exact match for the int parameter exists, so the Print(int) overload is invoked."
  },
  {
    "q": "static int GetValue() { return 10; } static string GetValue(int x) { return \"Hello\"; } Console.WriteLine(GetValue(5));",
    "options": ["10", "Hello", "Compile-time error", "Runtime error"],
    "correct": 1,
    "explanation": "This is overloaded by parameters. The call GetValue(5) matches the second method because it has one int parameter. It returns the string \"Hello\"."
  },
  {
    "q": "static void Change(int x) { x = 100; } int a = 5; Change(a); Console.WriteLine(a);",
    "options": ["5", "100", "0", "Error"],
    "correct": 0,
    "explanation": "Parameters are passed by value by default. The method receives a copy of a's value. Changing the parameter x does not affect the original variable a."
  },
  {
    "q": "static void Change(ref int x) { x = 100; } int a = 5; Change(ref a); Console.WriteLine(a);",
    "options": ["5", "100", "0", "Error"],
    "correct": 1,
    "explanation": "The ref keyword passes a reference to the variable a. Changes made to x inside the method directly affect a, so a becomes 100."
  },
  {
    "q": "static void Init(out int x) { x = 20; } int a; Init(out a); Console.WriteLine(a);",
    "options": ["0", "20", "Compile-time error", "Runtime error"],
    "correct": 1,
    "explanation": "The out keyword is used for output parameters. The variable a does not need to be initialized before the call, but the Init method is required to assign a value to x (which becomes a)."
  },
  {
    "q": "static void Mix(ref int x, out int y) { x += 5; y = x * 2; } int a = 3, b; Mix(ref a, out b); Console.WriteLine(a + \" \" + b);",
    "options": ["3 0", "8 16", "8 10", "3 6"],
    "correct": 1,
    "explanation": "a starts as 3. ref passes a reference, so x becomes 3, then x += 5 makes it 8 (so a is now 8). out y must be assigned: y = 8 * 2 = 16 (so b is 16)."
  },
  {
    "q": "static void Test(out int x) { // Console.WriteLine(x); x = 10; }",
    "options": ["Valid because x is assigned before use", "Invalid because x must be initialized by caller", "Invalid because out cannot be used with int", "Valid only if x is ref"],
    "correct": 0,
    "explanation": "An out parameter must be assigned by the method before it returns. Reading from it before assignment is not allowed (hence the comment). As long as it's assigned (x=10), the code is valid."
  },
  {
    "q": "static void Demo(ref int x) { x++; } int a; Demo(ref a);",
    "options": ["Always valid", "Invalid because a is not initialized", "Invalid because ref cannot be used with int", "Runs but a has random value"],
    "correct": 1,
    "explanation": "A ref parameter requires the variable to be definitely assigned before the call. Since a is not initialized, this causes a compile-time error."
  },
  {
    "q": "static void DemoOut(out int x) { x++; }",
    "options": ["Valid code", "Invalid because x is not assigned before use", "Invalid because out must be ref", "Runtime error only"],
    "correct": 1,
    "explanation": "An out parameter is considered uninitialized upon entering the method. The increment operator (x++) attempts to read x before incrementing it, which is invalid. The method must assign x a value before it can be read."
  },
  {
    "q": "static void ChangeArr(int[] arr) { arr[0] = 10; } int[] a = {1,2,3}; ChangeArr(a); Console.WriteLine(a[0]);",
    "options": ["1", "2", "3", "10"],
    "correct": 3,
    "explanation": "Arrays are reference types. The parameter arr receives a copy of the reference to the same array object. Modifying an element via arr[0] changes the original array a."
  },
  {
    "q": "static void Reassign(int[] arr) { arr = new int[]{9,9,9}; } int[] a = {1,2,3}; Reassign(a); Console.WriteLine(a[0]);",
    "options": ["1", "2", "3", "9"],
    "correct": 0,
    "explanation": "The parameter arr is a reference that is initially pointing to the same array as a. Reassigning arr to a new array only changes the local reference, not the caller's variable a. So a[0] remains 1."
  },
  {
    "q": "static void Reassign(ref int[] arr) { arr = new int[]{9,9,9}; } int[] a = {1,2,3}; Reassign(ref a); Console.WriteLine(a[0]);",
    "options": ["1", "2", "3", "9"],
    "correct": 3,
    "explanation": "Using ref allows the method to modify the caller's reference itself. After the call, a now points to the new array {9,9,9}, so a[0] is 9."
  },
  {
    "q": "static void SumPrefix(int[] arr) { arr[1] = arr[0] + arr[1]; } int[] a = {2,3,4}; SumPrefix(a); Console.WriteLine(a[1]);",
    "options": ["3", "4", "5", "6"],
    "correct": 2,
    "explanation": "arr[1] is updated to arr[0] + arr[1] = 2 + 3 = 5. Since arr and a refer to the same array, a[1] becomes 5."
  },
  {
    "q": "static void Modify(int[] arr) { arr = new int[]{4,5}; arr[0] = 7; } int[] a = {1,2,3}; Modify(a); Console.WriteLine(a.Length);",
    "options": ["2", "3", "4", "Compile-time error"],
    "correct": 1,
    "explanation": "The method reassigns its local arr parameter to a new array, but this does not affect the caller's reference a. a still points to the original array of length 3."
  },
  {
    "q": "static void Modify(ref int[] arr) { arr = new int[]{4,5}; arr[0] = 7; } int[] a = {1,2,3}; Modify(ref a); Console.WriteLine(a[0] + \" \" + a.Length);",
    "options": ["1 3", "4 2", "7 2", "7 3"],
    "correct": 2,
    "explanation": "With ref, the method can change what a references. After the call, a points to the new array {7, 5} (since arr[0] was set to 7). Its length is 2."
  },
  {
    "q": "static int Add(int a, int b = 3, int c = 2) { return a + b + c; } Console.WriteLine(Add(1));",
    "options": ["1", "3", "6", "Error"],
    "correct": 2,
    "explanation": "The method has optional parameters. Calling Add(1) uses the defaults: b=3, c=2. The result is 1 + 3 + 2 = 6."
  },
  {
    "q": "static int Add(int a, int b = 3, int c = 2) { return a + b + c; } Console.WriteLine(Add(1, 10));",
    "options": ["11", "13", "16", "Error"],
    "correct": 1,
    "explanation": "The first argument (1) maps to a. The second argument (10) maps to b, overriding its default. c uses its default value of 2. Result: 1 + 10 + 2 = 13."
  },
  {
    "q": "static void PrintInfo(string name, int age, string city) { Console.WriteLine(name + \" \" + age + \" \" + city); } PrintInfo(age: 20, name: \"Ali\", city: \"Cairo\");",
    "options": ["Compile-time error", "Ali 20 Cairo", "20 Ali Cairo", "Ali Cairo 20"],
    "correct": 1,
    "explanation": "Named arguments allow you to specify arguments by parameter name, independent of their order in the method signature. The output will be \"Ali 20 Cairo\"."
  },
  {
    "q": "static void PrintInfo(string name, int age, string city) { Console.WriteLine(name + \" \" + age + \" \" + city); } PrintInfo(\"Ali\", city: \"Cairo\", age: 20);",
    "options": ["Compile-time error", "Ali 20 Cairo", "Ali Cairo 20", "20 Ali Cairo"],
    "correct": 1,
    "explanation": "You can mix positional and named arguments. The first argument \"Ali\" is positional for 'name'. Then named arguments set 'city' and 'age'. The method prints them in the order of its parameters: name, age, city."
  },
  {
    "q": "static void PrintNumbers(params int[] nums) { Console.WriteLine(nums.Length); } PrintNumbers(1,2,3); PrintNumbers();",
    "options": ["3 then 3", "3 then 0", "0 then 3", "Compile-time error"],
    "correct": 1,
    "explanation": "The params keyword allows a variable number of arguments. The first call passes three arguments, so nums.Length is 3. The second call passes zero arguments, creating an empty array with Length 0."
  },
  {
    "q": "static void Mix(int x = 1, params int[] rest) { Console.WriteLine(x + \" \" + rest.Length); } Mix(); Mix(5, 7, 8);",
    "options": ["1 0 then 5 2", "0 0 then 5 2", "1 1 then 5 3", "Compile-time error"],
    "correct": 0,
    "explanation": "For Mix(), x uses its default value 1, and rest is empty (length 0). For Mix(5,7,8), the first argument 5 is assigned to x, and the remaining two arguments (7,8) go into the rest array (length 2)."
  },
  {
    "q": "static int counter; static void A() { int local = 10; counter++; Console.WriteLine(local + \" \" + counter); } static void B() { int local = 20; counter++; Console.WriteLine(local + \" \" + counter); } A(); B();",
    "options": ["10 1 then 20 2", "10 0 then 20 1", "10 1 then 20 1", "10 2 then 20 3"],
    "correct": 0,
    "explanation": "counter is a static field, initialized to 0. A increments it to 1 and prints its local (10) and counter (1). B increments it to 2 and prints its local (20) and counter (2)."
  },
  {
    "q": "static int value = 5; static void A() { int value = 10; Console.WriteLine(value); } A(); Console.WriteLine(value);",
    "options": ["10 then 10", "5 then 5", "10 then 5", "5 then 10"],
    "correct": 2,
    "explanation": "Inside method A, a local variable named 'value' is declared, which hides the static field with the same name. So A prints the local value (10). Outside A, the static field 'value' is accessed, which remains 5."
  },
  {
    "q": "static int x; static void A() { x = 3; } static void B() { Console.WriteLine(x); } A(); B();",
    "options": ["0", "3", "Compile-time error", "Runtime error"],
    "correct": 1,
    "explanation": "x is a static field (defaults to 0). Method A sets it to 3. Then method B prints its value, which is now 3."
  },
  {
    "q": "static void A() { int x = 5; } static void B() { Console.WriteLine(x); }",
    "options": ["Valid: B prints 5", "Valid: B prints 0", "Invalid: x is not in scope inside B", "Runtime error only"],
    "correct": 2,
    "explanation": "Variable x is declared inside method A and is local to that method. It is not accessible outside A, so referencing x in method B causes a compile-time error (out of scope)."
  },
  {
    "q": "static int globalCounter; static void A() { globalCounter += 2; } static void B() { globalCounter += 3; } A(); B(); Console.WriteLine(globalCounter);",
    "options": ["0", "2", "3", "5"],
    "correct": 3,
    "explanation": "globalCounter starts at 0. A adds 2, making it 2. B adds 3, making it 5."
  },
  {
    "q": "static int x = 1; static void M() { int x = 2; Console.WriteLine(x); } Console.WriteLine(x); M();",
    "options": ["1 then 1", "2 then 2", "1 then 2", "2 then 1"],
    "correct": 2,
    "explanation": "The first WriteLine uses the static field x (value 1). Inside M, a local variable x is declared (value 2), which shadows the field. M prints the local x (2)."
  },
  {
    "q": "static int FactRec(int n) { if (n == 1) return 1; return n * FactRec(n - 1); } Console.WriteLine(FactRec(3));",
    "options": ["3", "4", "5", "6"],
    "correct": 3,
    "explanation": "FactRec(3) = 3 * FactRec(2). FactRec(2) = 2 * FactRec(1). FactRec(1) returns 1. So: 3 * (2 * 1) = 6."
  },
  {
    "q": "static int FactIter(int n) { int res = 1; for (int i = 2; i <= n; i++) res *= i; return res; } Console.WriteLine(FactIter(4));",
    "options": ["4", "12", "24", "120"],
    "correct": 2,
    "explanation": "The loop multiplies res by i from 2 to 4 inclusive: 1 * 2 * 3 * 4 = 24."
  },
  {
    "q": "static int SumDown(int n) { if (n == 0) return 0; return n + SumDown(n - 1); } Console.WriteLine(SumDown(3));",
    "options": ["3", "4", "5", "6"],
    "correct": 3,
    "explanation": "SumDown(3) = 3 + SumDown(2). SumDown(2) = 2 + SumDown(1). SumDown(1) = 1 + SumDown(0). SumDown(0) = 0. So: 3 + 2 + 1 + 0 = 6."
  },
  {
    "q": "static void Recurse(int n) { if (n == 0) return; Console.WriteLine(n); Recurse(n - 1); } Recurse(3);",
    "options": ["3 2 1", "1 2 3", "3 3 3", "Nothing"],
    "correct": 0,
    "explanation": "The method prints n, then calls itself with n-1. For n=3: prints 3, calls with 2, prints 2, calls with 1, prints 1, calls with 0 and returns. Output is three lines: 3, then 2, then 1."
  },
  {
    "q": "static int F(int n) { if (n <= 1) return 1; return F(n - 1) + F(n - 1); } Console.WriteLine(F(3));",
    "options": ["2", "4", "6", "8"],
    "correct": 1,
    "explanation": "F(1)=1. F(2) = F(1) + F(1) = 1 + 1 = 2. F(3) = F(2) + F(2) = 2 + 2 = 4."
  },
  {
    "q": "static int G(int n) { if (n == 1) return 1; return n + G(n - 2); } Console.WriteLine(G(5));",
    "options": ["5", "6", "7", "9"],
    "correct": 3,
    "explanation": "G(5) = 5 + G(3). G(3) = 3 + G(1). G(1) = 1. So G(5) = 5 + (3 + 1) = 9."
  }
] ;
const section11Questions =[
  {
    "q": "What is a method in C#?",
    "options": ["A variable that stores data", "A block of code that performs a specific task", "A C# keyword", "A memory location"],
    "correct": 1,
    "explanation": "A method is a named block of statements that performs a specific action or calculation, promoting code organization and reuse."
  },
  {
    "q": "What is the main benefit of using methods?",
    "options": ["Increase memory usage", "Improve reusability and maintainability", "Slow program execution", "Avoid variables"],
    "correct": 1,
    "explanation": "Methods allow you to write code once and use it many times (reusability) and make programs easier to understand, debug, and update (maintainability)."
  },
  {
    "q": "Which part of a method specifies what it returns to the caller?",
    "options": ["Method name", "Return type", "Parameter list", "Method body"],
    "correct": 1,
    "explanation": "The return type (like int, string, void) in a method's signature indicates the type of value the method returns to its caller."
  },
  {
    "q": "What does the keyword void indicate?",
    "options": ["Method returns int", "Method returns nothing", "Method returns string", "Method returns object"],
    "correct": 1,
    "explanation": "The void keyword means the method does not return any value. It performs an action but does not send a result back."
  },
  {
    "q": "Which of the following is a valid method declaration?",
    "options": ["int Add(int a, int b)", "Add int(a,b)", "int Add a,b", "Add(int a int b)"],
    "correct": 0,
    "explanation": "The correct C# syntax is: return_type MethodName(parameter_type parameterName, ...). So 'int Add(int a, int b)' is valid."
  },
  {
    "q": "What is the output of this code? static int Add(int a,int b)(return a+b;) Add(2,3);",
    "options": ["2", "3", "5", "Error"],
    "correct": 2,
    "explanation": "The Add method adds its two parameters. Add(2,3) returns 2 + 3 = 5. (Note: The code snippet has a syntax typo using parentheses, but the intent is clear)."
  },
  {
    "q": "Which method is built-in?",
    "options": ["Calculate()", "Add()", "Console.WriteLine()", "MyMethod()"],
    "correct": 2,
    "explanation": "Console.WriteLine() is a method provided by the .NET Framework's System.Console class for outputting text."
  },
  {
    "q": "What is the output of Math.Sqrt(16)?",
    "options": ["2", "4", "8", "16"],
    "correct": 1,
    "explanation": "Math.Sqrt calculates the square root. The square root of 16 is 4."
  },
  {
    "q": "Which statement about static methods is correct?",
    "options": ["Belong to objects", "Belong to the class", "Require object creation", "Can access instance members directly"],
    "correct": 1,
    "explanation": "Static methods are associated with the class itself, not with any specific object (instance) of the class. They are called using the class name."
  },
  {
    "q": "Why do static methods not use 'this'?",
    "options": ["Because they are faster", "Because they do not belong to an object", "Because C# forbids it", "Because memory is limited"],
    "correct": 1,
    "explanation": "The 'this' keyword refers to the current instance of a class. Since static methods are not called on an instance, there is no 'this' context."
  },
  {
    "q": "What is method overloading?",
    "options": ["Creating methods inside methods", "Same name with different parameters", "Changing return type only", "Recursive calls"],
    "correct": 1,
    "explanation": "Method overloading allows multiple methods in the same class to have the same name, as long as their parameter lists (number, type, or order) are different."
  },
  {
    "q": "Which is a valid overload?",
    "options": ["int A(int x) and double A(int x)", "int A(int x) and int A(double x)", "int A(int x) and int A(int x)", "void A() and void A()"],
    "correct": 1,
    "explanation": "Overloading is distinguished by the method's signature (name and parameter types/order). int A(int x) and int A(double x) have different parameter types, so they are valid overloads."
  },
  {
    "q": "Why cannot return type alone distinguish overloads?",
    "options": ["Compiler ignores return type", "CLR forbids it", "Runtime error", "Memory conflict"],
    "correct": 0,
    "explanation": "In C#, the method signature used for overloading does not include the return type. Two methods with the same name and parameters but different return types would cause a compile-time error."
  },
  {
    "q": "Default parameter passing for int is?",
    "options": ["By reference", "By value", "By pointer", "By address"],
    "correct": 1,
    "explanation": "In C#, value types (like int, double, structs) are passed by value by default. This means a copy of the value is passed to the method."
  },
  {
    "q": "What will be the value of a? int a=5; Update(a); void Update(int x){x=10;}",
    "options": ["5", "10", "0", "Error"],
    "correct": 0,
    "explanation": "The variable a is passed by value. The method receives a copy of its value (5). Changing the parameter x to 10 does not affect the original variable a."
  },
  {
    "q": "Which keyword allows modifying the original variable?",
    "options": ["out", "ref", "params", "var"],
    "correct": 1,
    "explanation": "The ref keyword passes a reference to the variable, allowing the method to read and modify the original variable's value."
  },
  {
    "q": "Which statement about out is correct?",
    "options": ["Must be initialized", "Does not require initialization", "Cannot return value", "Same as ref"],
    "correct": 1,
    "explanation": "An out parameter does not need to be initialized before being passed to the method. However, the method is required to assign a value to it before returning."
  },
  {
    "q": "What is passed when an array is passed by value?",
    "options": ["All elements copied", "Reference copied", "Nothing copied", "Only first element"],
    "correct": 1,
    "explanation": "Arrays are reference types. When passed by value, the reference (memory address) to the array is copied, not the array elements themselves."
  },
  {
    "q": "What happens when modifying array elements inside method?",
    "options": ["Original unchanged", "Original modified", "New array created", "Runtime error"],
    "correct": 1,
    "explanation": "Since the method receives a copy of the reference to the original array, any changes made to the array's elements (like arr[0] = 5) affect the original array."
  },
  {
    "q": "What does passing array with ref allow?",
    "options": ["Modify elements only", "Reassign to new array", "Read only", "Clone array"],
    "correct": 1,
    "explanation": "Using ref with an array parameter allows the method to change what the caller's variable points to, i.e., reassign it to a completely new array."
  },
  {
    "q": "What are optional parameters?",
    "options": ["Must always be passed", "Have default values", "Pass by ref", "Pass by out"],
    "correct": 1,
    "explanation": "Optional parameters are defined by providing a default value in the method declaration. Callers can omit them, and the default value will be used."
  },
  {
    "q": "What is the result of Add(5) if Add(int a,int b=3)?",
    "options": ["5", "8", "3", "Error"],
    "correct": 1,
    "explanation": "The method is defined as Add(int a, int b=3). Calling Add(5) supplies 5 for a and uses the default value 3 for b. Result is 5 + 3 = 8."
  },
  {
    "q": "What are named parameters used for?",
    "options": ["Speed", "Flexibility in argument order", "Security", "Memory"],
    "correct": 1,
    "explanation": "Named arguments allow you to specify arguments by parameter name, making code more readable and allowing you to supply arguments in any order, not necessarily the order defined in the method signature."
  },
  {
    "q": "Rule when mixing named and positional arguments?",
    "options": ["Named first", "Any order", "Positional first", "Named only"],
    "correct": 2,
    "explanation": "When mixing positional and named arguments, all positional arguments must come before any named arguments in the method call."
  },
  {
    "q": "What does params allow?",
    "options": ["One argument only", "Two arguments only", "Variable number of arguments", "No arguments"],
    "correct": 2,
    "explanation": "The params keyword allows a method to accept a variable number of arguments of a specified type. The arguments are treated as an array inside the method."
  },
  {
    "q": "Where must params appear?",
    "options": ["First", "Middle", "Last", "Anywhere"],
    "correct": 2,
    "explanation": "A parameter with the params modifier must be the last parameter in the method's parameter list."
  },
  {
    "q": "What is a local variable?",
    "options": ["Declared inside method", "Declared outside class", "Declared globally", "Declared in DLL"],
    "correct": 0,
    "explanation": "A local variable is declared within a method, constructor, or block. It exists only during the execution of that block and is not accessible from outside."
  },
  {
    "q": "What is a field?",
    "options": ["Local variable", "Declared inside method", "Declared in class but outside methods", "Declared in Main only"],
    "correct": 2,
    "explanation": "A field is a variable declared directly within a class (or struct), outside of any method, property, or constructor. It represents data associated with the class or its instances."
  },
  {
    "q": "Default value of int field is?",
    "options": ["1", "-1", "0", "null"],
    "correct": 2,
    "explanation": "Fields of numeric value types (like int, double) are automatically initialized to 0 (or 0.0) if no explicit initializer is provided."
  },
  {
    "q": "What controls where a variable can be accessed?",
    "options": ["Lifetime", "Scope", "Size", "Type"],
    "correct": 1,
    "explanation": "Scope defines the region of the program where a variable can be referenced by its name. It is determined by where the variable is declared."
  },
  {
    "q": "What is recursion?",
    "options": ["Method calling loop", "Method calling itself", "Multiple methods", "Static call"],
    "correct": 1,
    "explanation": "Recursion is a programming technique where a method calls itself directly or indirectly to solve a problem by breaking it down into smaller, similar sub-problems."
  },
  {
    "q": "Why is base case important?",
    "options": ["To stop recursion", "To slow program", "To allocate memory", "To compile"],
    "correct": 0,
    "explanation": "The base case (or terminating condition) provides a simple, non-recursive solution that stops the chain of recursive calls and prevents infinite recursion."
  },
  {
    "q": "What happens if no base case exists?",
    "options": ["Program ends early", "Compiler error", "Stack overflow", "Infinite loop only"],
    "correct": 2,
    "explanation": "Without a base case, a recursive method will call itself indefinitely, eventually exhausting the call stack memory and causing a StackOverflowException."
  },
  {
    "q": "What is iterative solution?",
    "options": ["Uses loops", "Uses recursion", "Uses stack only", "Uses heap only"],
    "correct": 0,
    "explanation": "An iterative solution solves a problem by repeating a block of code using loops (like for, while, do-while) until a condition is met."
  },
  {
    "q": "Which uses more stack memory generally?",
    "options": ["Iteration", "Recursion", "Both same", "Neither"],
    "correct": 1,
    "explanation": "Recursion uses the call stack to store information for each recursive call (parameters, return address, local variables), which can consume significant memory for deep recursion. Iteration typically uses a fixed amount of stack space."
  },
  {
    "q": "What is factorial of 4?",
    "options": ["6", "12", "24", "48"],
    "correct": 2,
    "explanation": "4! (4 factorial) = 4 × 3 × 2 × 1 = 24."
  },
  {
    "q": "How many calls in factorial(3)?",
    "options": ["1", "2", "3", "4"],
    "correct": 2,
    "explanation": "For factorial(3): The initial call is factorial(3). It calls factorial(2), which calls factorial(1). That's a total of 3 method calls."
  },
  {
    "q": "What is call stack?",
    "options": ["Heap memory", "List of active method calls", "Disk memory", "Register memory"],
    "correct": 1,
    "explanation": "The call stack is a runtime data structure that keeps track of active method calls (or subroutines). Each call pushes a new stack frame, and returning pops it."
  },
  {
    "q": "What is stack frame?",
    "options": ["Variable storage only", "Method execution info", "File buffer", "Heap object"],
    "correct": 1,
    "explanation": "A stack frame (or activation record) is a section of the call stack that stores data for one function call, including parameters, local variables, and the return address."
  },
  {
    "q": "What exception occurs with deep recursion?",
    "options": ["NullReference", "IndexOutOfRange", "StackOverflow", "DivideByZero"],
    "correct": 2,
    "explanation": "Excessive recursion depth fills up the call stack, leading to a StackOverflowException."
  },
  {
    "q": "What is returned by a void method?",
    "options": ["0", "null", "Nothing", "false"],
    "correct": 2,
    "explanation": "A method declared with void does not return any value. It simply performs its operations and then returns control to the caller."
  },
  {
    "q": "Which cannot be optional?",
    "options": ["Normal parameter", "ref parameter", "int parameter", "string parameter"],
    "correct": 1,
    "explanation": "Parameters marked with ref or out cannot have default values, meaning they cannot be optional parameters."
  },
  {
    "q": "Which is true about overloading?",
    "options": ["Same return only", "Same name different parameters", "Same name same parameters", "Different classes only"],
    "correct": 1,
    "explanation": "Method overloading is defined by having methods with the same name but different parameter lists (type, number, or order)."
  },
  {
    "q": "Which parameter must be assigned inside method?",
    "options": ["ref", "out", "normal", "params"],
    "correct": 1,
    "explanation": "An out parameter must be definitely assigned by the method before the method returns. The compiler enforces this rule."
  },
  {
    "q": "Which is true about methods?",
    "options": ["They reduce repetition", "They increase errors", "They prevent reuse", "They eliminate functions"],
    "correct": 0,
    "explanation": "The primary purpose of methods is to encapsulate code into reusable units, which reduces code duplication (repetition) and makes programs more modular and manageable."
  }
] ;

function createCard(q, index) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-number">Question ${index + 1}</div>
        <div class="question-text">${q.q}</div>
        ${q.options.map((o,i)=>`<div class="option" data-i="${i}">${o}</div>`).join("")}
        <div class="explain-btn">Explain</div>
        <div class="explanation">${q.explain || q.explanation}</div>
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

oldQuestions.forEach((q,i)=> oldContainer.appendChild(createCard(q,i)));
newQuestions.forEach((q,i)=> newContainer.appendChild(createCard(q,i)));

const sections = [
  { id: "section-3", data: section3Questions },
  { id: "section-4", data: section4Questions },
  { id: "section-5", data: section5Questions },
  { id: "section-6", data: section6Questions },
  { id: "section-7", data: section7Questions },
  { id: "section-8", data: section8Questions },
  { id: "section-9", data: section9Questions },
  { id: "section-10", data: section10Questions },
  { id: "section-11", data: section11Questions }
];

sections.forEach(section => {
    const container = document.getElementById(section.id);
    section.data.forEach((q,i) => {
        container.appendChild(createCard(q,i));
    });
});
document.querySelectorAll(".nav-sections button").forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.dataset.target;
        const target = document.getElementById(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});document.querySelectorAll(".nav-sections button").forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.dataset.target;
        const container = document.getElementById(targetId);

        if (container) {
            const sectionBar = container.previousElementSibling; // العنوان اللي فوق كل قسم
            const topOffset = 10; // مسافة بسيطة من فوق
            let scrollToEl = sectionBar || container;

            const elementPosition = scrollToEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - topOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // highlight صغير على العنوان
            if (sectionBar) {
                sectionBar.classList.add("highlight");
                setTimeout(() => {
                    sectionBar.classList.remove("highlight");
                }, 1500);
            }
        }
    });
});






