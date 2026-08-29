let symbols = [];

let scopeStack = ["Global"];

let scopeNumber = 0;


/* =====================================
   FILE UPLOAD
===================================== */

document.getElementById("fileInput")
    .addEventListener("change", function () {

        const file = this.files[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {

            document.getElementById("sourceCode").value =
                event.target.result;

            analyzeProgram();

        };

        reader.readAsText(file);

    });


/* =====================================
   MAIN ANALYZER
===================================== */

function analyzeProgram() {

    const code =
        document.getElementById("sourceCode").value;


    if (!code.trim()) {

        alert("Please upload or enter a C program.");

        return;

    }


    symbols = [];

    scopeStack = ["Global"];

    scopeNumber = 0;


    document.getElementById("displayCode")
        .textContent = code;


    analyzeCode(code);

    displaySymbolTable();

    displayStatistics();

}


/* =====================================
   CODE ANALYSIS
===================================== */

function analyzeCode(code) {

    let lines = code.split("\n");


    let insideComment = false;


    for (let i = 0; i < lines.length; i++) {

        let originalLine = lines[i];

        let line = originalLine;


        /*
         Remove single-line comments
        */

        line = line.replace(/\/\/.*$/g, "");


        /*
         Remove block comments
        */

        if (insideComment) {

            if (line.includes("*/")) {

                line =
                    line.substring(
                        line.indexOf("*/") + 2
                    );

                insideComment = false;

            } else {

                continue;

            }

        }


        while (line.includes("/*")) {

            const start = line.indexOf("/*");

            const end = line.indexOf("*/", start + 2);


            if (end !== -1) {

                line =
                    line.substring(0, start) +
                    line.substring(end + 2);

            } else {

                line =
                    line.substring(0, start);

                insideComment = true;

                break;

            }

        }


        line = line.trim();


        if (!line) {
            continue;
        }


        /*
         Handle scope opening
        */

        if (line.includes("{")) {

            /*
             Function scope
            */

            const functionMatch =
                line.match(
                    /\b(int|float|double|char|void|long|short|bool)\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/
                );


            if (functionMatch) {

                const functionName =
                    functionMatch[2];


                addSymbol(
                    functionName,
                    functionMatch[1],
                    "Function",
                    getCurrentScope(),
                    "-",
                    i + 1
                );


                scopeNumber++;

                scopeStack.push(
                    functionName
                );

            } else {

                scopeNumber++;

                scopeStack.push(
                    "Block_" + scopeNumber
                );

            }

        }


        /*
         Detect function parameters
        */

        const parameterMatch =
            line.match(
                /\(([^()]*)\)/
            );


        if (parameterMatch) {

            const params =
                parameterMatch[1]
                    .split(",");


            params.forEach(param => {

                const match =
                    param.trim().match(
                        /\b(int|float|double|char|long|short|bool|string)\s+([A-Za-z_][A-Za-z0-9_]*)/
                    );


                if (match) {

                    addSymbol(
                        match[2],
                        match[1],
                        "Parameter",
                        getCurrentScope(),
                        "-",
                        i + 1
                    );

                }

            });

        }


        /*
         Detect variable declarations
        */

        const declarationRegex =
            /\b(int|float|double|char|long|short|bool|string)\s+([^;]+)/g;


        let match;


        while (
            (match = declarationRegex.exec(line)) !== null
        ) {

            const type = match[1];

            let variables = match[2];


            /*
             Remove function declaration
            */

            if (variables.includes("(")) {
                continue;
            }


            /*
             Split multiple declarations

             int a = 10, b = 20;
            */

            let parts =
                variables.split(",");


            parts.forEach(part => {

                part = part.trim();


                const variableMatch =
                    part.match(
                        /^([A-Za-z_][A-Za-z0-9_]*)(?:\s*=\s*(.+))?$/
                    );


                if (!variableMatch) {
                    return;
                }


                const name =
                    variableMatch[1];


                let value =
                    variableMatch[2] || "-";


                value =
                    value.replace(
                        /;$/,
                        ""
                    ).trim();


                addSymbol(
                    name,
                    type,
                    "Variable",
                    getCurrentScope(),
                    value,
                    i + 1
                );

            });

        }


        /*
         Detect closing braces
        */

        const closingBraces =
            (line.match(/}/g) || []).length;


        for (let j = 0; j < closingBraces; j++) {

            if (scopeStack.length > 1) {

                scopeStack.pop();

            }

        }

    }

}


/* =====================================
   ADD SYMBOL
===================================== */

function addSymbol(
    name,
    type,
    category,
    scope,
    value,
    line
) {

    /*
     Check duplicate
    */

    const duplicate =
        symbols.find(symbol =>
            symbol.name === name &&
            symbol.scope === scope
        );


    if (duplicate) {

        addMessage(
            `Duplicate declaration: '${name}' in ${scope} scope at line ${line}.`,
            "warning"
        );

        return;

    }


    symbols.push({

        name: name,

        type: type,

        category: category,

        scope: scope,

        value: value,

        line: line

    });

}


/* =====================================
   GET CURRENT SCOPE
===================================== */

function getCurrentScope() {

    return scopeStack[
        scopeStack.length - 1
    ];

}


/* =====================================
   DISPLAY SYMBOL TABLE
===================================== */

function displaySymbolTable() {

    const tbody =
        document.getElementById("symbolTable");


    tbody.innerHTML = "";


    symbols.forEach((symbol, index) => {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${index + 1}</td>

            <td>${symbol.name}</td>

            <td>${symbol.type}</td>

            <td>${symbol.category}</td>

            <td>${symbol.scope}</td>

            <td>${symbol.value}</td>

            <td>${symbol.line}</td>

        `;


        tbody.appendChild(row);

    });

}


/* =====================================
   STATISTICS
===================================== */

function displayStatistics() {

    document.getElementById("totalSymbols")
        .innerText = symbols.length;


    document.getElementById("variables")
        .innerText =
        symbols.filter(
            s => s.category === "Variable"
        ).length;


    document.getElementById("functions")
        .innerText =
        symbols.filter(
            s => s.category === "Function"
        ).length;


    const uniqueScopes =
        new Set(
            symbols.map(s => s.scope)
        );


    document.getElementById("scopes")
        .innerText =
        uniqueScopes.size + 1;

}


/* =====================================
   MESSAGES
===================================== */

function addMessage(text, type) {

    const messages =
        document.getElementById("messages");


    if (
        messages.innerText ===
        "No analysis performed."
    ) {

        messages.innerHTML = "";

    }


    const div =
        document.createElement("div");


    div.className =
        "message " + type;


    div.innerText = text;


    messages.appendChild(div);

}


/* =====================================
   CSV EXPORT
===================================== */

function downloadCSV() {

    if (symbols.length === 0) {

        alert("No symbol table available.");

        return;

    }


    let csv =
        "Name,Type,Category,Scope,Value,Line\n";


    symbols.forEach(symbol => {

        csv +=
            `"${symbol.name}",` +
            `"${symbol.type}",` +
            `"${symbol.category}",` +
            `"${symbol.scope}",` +
            `"${symbol.value}",` +
            `${symbol.line}\n`;

    });


    const blob =
        new Blob(
            [csv],
            { type: "text/csv" }
        );


    const url =
        URL.createObjectURL(blob);


    const a =
        document.createElement("a");


    a.href = url;

    a.download =
        "symbol_table.csv";


    a.click();


    URL.revokeObjectURL(url);

}   