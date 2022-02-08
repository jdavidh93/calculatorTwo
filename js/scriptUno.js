function calcular() {
  const resultado = document.getElementById("resultado");

  const numUno = document.getElementById("numUno").value;
  const numDos = document.getElementById("numDos").value;
  const selectOp = document.getElementById("selectOp").value;
  const radioPage = document.getElementById("radioPage").value;
  const radioAlert = document.getElementById("radioAlert").value;

  switch (selectOp) {
    case "1":
      if (document.getElementById("resultado")==radioPage) {
        document.getElementById("resultado").innerHTML = numUno + numDos;
      } else {
        alert("hola" , radioAlert);
      }

      break;
    case "2":
      document.getElementById("resultado").innerHTML = numUno - numDos;
      break;
    case "3":
      document.getElementById("resultado").innerHTML = numUno / numDos;
      break;
    case "4":
      document.getElementById("resultado").innerHTML = numUno * numDos;
      break;

    default:
      break;
  }
}
