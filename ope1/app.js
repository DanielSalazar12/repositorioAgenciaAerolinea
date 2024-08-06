function calcular() {
  let precioDestino = document.getElementById("precioDestino");
  let precioNumeroPersonas = document.getElementById("precioNumeroPersonas");
  let precioMaleta1 = document.getElementById("precioMaleta");
  let precioSilla1 = document.getElementById("precioSilla");
  let resultado = document.getElementById("resultado");
  let destino = document.getElementById("destino").value;
  let numeroPersonas = parseInt(
    document.getElementById("numeroPersonas").value
  );
  let pesoMaleta = document.getElementById("pesoMaleta").value;
  let tipoSillas = document.getElementById("tipoSilla").value;
  let precioCiudad = 0;
  let precioMaleta = 0;
  let precioPer = 0;
  let precioSilla = 0;
  let total = 0;
  let res = 0;

  if (destino == 1) {
    precioCiudad = 20000;
  }
  if (destino == 2) {
    precioCiudad = 40000;
  }
  if (destino == 3) {
    precioCiudad = 50000;
  }
  if (destino == 4) {
    precioCiudad = 45000;
  }
  if (destino == 5) {
    precioCiudad = 35000;
  }

  precioPer = precioCiudad * numeroPersonas;

  if (pesoMaleta > 50) {
    res = pesoMaleta - 50;
    precioMaleta = res * 15000;
  } else {
    precioMaleta = 0;
  }

  if (tipoSillas == 1) {
    precioSilla = 0;
  }
  if (tipoSillas == 2) {
    precioSilla = 20000 * numeroPersonas;
  }
  if (tipoSillas == 3) {
    precioSilla = 40000 * numeroPersonas;
  }

  precioDestino.innerHTML = `El valor del destino es: ${precioCiudad}`;
  precioNumeroPersonas.innerHTML = `El valor por las personas es:  ${precioPer}`;
  precioMaleta1.innerHTML = `El valor por la maleta es:  ${precioMaleta}`;
  precioSilla1.innerHTML = `El valor por la silla es: ${precioSilla}`;
  total = precioPer + precioMaleta + precioSilla;

  resultado.innerHTML = `El valor total a pagar es: ${total}`;
}
