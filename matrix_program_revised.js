var M = [];
var noOfRows;
var noOfColumns;

   

function insert() {
    noOfRows = document.getElementById("number_of_rows").value;
    document.getElementById("number_of_rows").style.color = "blue";
    document.getElementById("number_of_rows").style.fontFamily = "Arial";
    document.getElementById("number_of_rows").style.fontSize = "larger";
    noOfColumns = document.getElementById("number_of_columns").value;
    document.getElementById("number_of_columns").style.color = "blue";
    document.getElementById("number_of_columns").style.fontFamily = "Arial";
    document.getElementById("number_of_columns").style.fontSize = "larger";
    return noOfRows, noOfColumns;
}

function add_elements() {
    document.write(`<form>`);
    for (var i = 0; i < noOfRows; i++) {
        for (var j = 0; j < noOfColumns; j++) {
            document.write(`<input type="number" id=number${i}${j}>`)
        }
        document.write(`<br />`)
    }
   
    
    document.body.style.background = "rgba(107, 109, 107, 0.979)";
    document.write(`</form>`);
   

    document.write(`<input type="button" id="save" value="Save Elements" onclick="save_elements()">`);
    document.getElementById("save").style.color = "blue";
    
    document.write(`<input type="button" id="solve" value="Solve Matrix" onclick="solve_matrix()">`);
    document.getElementById("solve").style.color = "blue";
  
   document.write(`<input type="button" id="showSol" value="Show Solution Set" onclick="show_solution()">`);
   document.getElementById("showSol").style.color = "blue";
  
   document.write(`<br />`)
}


function save_elements() {
    for (var i = 0; i < noOfRows; i++) {
        var R = []
        for (var j = 0; j < noOfColumns; j++) {
            var element = document.getElementById(`number${i}${j}`).value;
            R.push(element)
        }
        M.push(R)
    }
    return M
}

function displayMatrix() {
    for (var i = 0; i < noOfRows; i++) {
        for (var j = 0; j < noOfColumns; j++) {
            document.write((M[i][j]) + "\t \t \t");
        }
        document.write(`<br />`);
    }
    document.write(`<br />`);
}

function solve_matrix() {
    for (var i = 0; i < noOfRows; i++) {
        var pivotRow = i;
        var pivotColumn = i;
        pivotElement = M[pivotRow][pivotColumn];
        for (var c = 0; c < noOfColumns; c++)
            M[pivotRow][c] = (M[pivotRow][c] / pivotElement).toFixed(2);

        for (var r = 0; r < noOfRows; r++) {
            if (r == pivotRow) {
                continue;
            }
            if (r != pivotRow) {
                pivotValue = M[r][pivotColumn]
            }
            for (var c = 0; c < noOfColumns; c++) {
                M[r][c] = (M[r][c] - M[pivotRow][c] * pivotValue).toFixed(2);
            }
            
        }

        displayMatrix()
        if (i == noOfRows - 1) {
            document.write(`<a href="index.html">solve another matrix</a>`);
            break;
        }

    }
}

function show_solution() {
    var solution_set = [];
    var b = (M[0].length - 1)
    var a = (M.length - 1)
    for (var i = 0; i <= a; i++) {
        solution_set.push(M[i][b]);
    }
    document.write(`Soluton set is: `);
    for (var i = 0; i < noOfRows; i++) {
        document.write(`${solution_set[i]} `);
    }
    document.write(`<br />`)
    document.write(`<a href="index.html">solve another matrix</a>`);
    document.write(`<br />`)
}
document.write(`<br />`)


