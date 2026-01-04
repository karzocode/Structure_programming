let questions = [
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

const questionsDiv = document.getElementById("questions");

// Build all questions as cards
questions.forEach((q,i)=>{
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-number">Question ${i+1}</div>
        <div class="question-text">${q.q}</div>
        <div class="options">
            ${q.options.map((opt,idx)=>`<div class="option" data-index="${idx}">${opt}</div>`).join("")}
        </div>
        <div class="explain-btn">Explain</div>
        <div class="explanation">${q.explanation}</div>
    `;

    questionsDiv.appendChild(card);
});

// Add click events for instant correction
document.querySelectorAll(".option").forEach((el)=>{
    el.addEventListener("click",()=>{
        const parentCard = el.closest(".card");
        const cardIndex = Array.from(questionsDiv.children).indexOf(parentCard);
        const selectedIndex = parseInt(el.dataset.index);

        // Clear previous selections
        parentCard.querySelectorAll(".option").forEach(o=>o.classList.remove("correct","wrong"));

        if(selectedIndex === questions[cardIndex].correct){
            el.classList.add("correct");
        } else {
            el.classList.add("wrong");
            parentCard.querySelectorAll(".option")[questions[cardIndex].correct].classList.add("correct");
        }
    });
});

// Add click events for Explain button
document.querySelectorAll(".explain-btn").forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const card = btn.closest(".card");
        const explanation = card.querySelector(".explanation");
        explanation.style.display = explanation.style.display === "block" ? "none" : "block";
    });
});
