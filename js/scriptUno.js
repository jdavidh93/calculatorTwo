function calcular () {
    const resultado = document.getElementById("resultado");

    const numUno = document.getElementById("numUno").value;
    const numDos = document.getElementById("numDos").value;
    const selectOp = document.querySelector("selectOp");
    const radioPage = document.getElementById("radioPage");
    const radioAlert = document.getElementById("radioAlert");


    switch (document.getSelection("selectOp")) {
        case 1:
            document.getElementById("resultado").innerHTML = numUno + numDos;
            break;
            case '2':
            document.getElementById("resultado").innerHTML = numUno - numDos;
            break;
            case ["3"]:
            document.getElementById("resultado").innerHTML = numUno / numDos;
            break;
            case "4":
            document.getElementById("resultado").innerHTML = numUno * numDos;
            break;
    
        default:
            break;
    }

    // document.getElementById("resultado").innerHTML = numUno * numDos;

}

// const calcular = document.getElementById("calcular");


// fnCalcular = () => {
//   resultado.innerHTML = numUno + numDos;
//   //   console.log("hola");
//   document.getElementById("resultado").innerHTML = numUno + numDos;
// };

// calcular.onclick = () => {
//   fnCalcular();
// };
