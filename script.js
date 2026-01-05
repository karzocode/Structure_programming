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
  { q: "For n=4, m=2, y=2 the expression n++/m<<y equals 7.", options: ["True","False"], correct: 0, explain: "Expression evaluates to 7." },
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

oldContainer.classList.add("questions-grid");
newContainer.classList.add("questions-grid");

oldQuestions.forEach((q,i)=> oldContainer.appendChild(createCard(q,i)));
newQuestions.forEach((q,i)=> newContainer.appendChild(createCard(q,i)));
