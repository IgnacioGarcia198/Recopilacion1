/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var temporiz, cuenta, tiempo, alivio; 
function activarTemporizador(t) {
  //document.appendChild("<h1>esto es un nuevo nodo hijo</h1>"); Debo aprender el funcionamiento de eso...
  document.getElementById("parrafoPideTiempo").className = "invisible";
  tiempo = t*1000;
  temporiz = setTimeout(function(){document.write("<h1>PUM XD<br />Página destruída</h1>")}, tiempo);
  cuenta = setInterval(function(){muestraTiempo()}, 1000);
}

function muestraTiempo() {
  tiempo -= 1000;
  if(tiempo > 1000) {
    document.getElementById("boton3").innerHTML = "quedan " + (tiempo/1000) + " segundos";
  }
  else {
    document.getElementById("boton3").innerHTML = "MAMAAAAAAAAAAAAA";
  }
}

function pararTemporizador() {
  clearTimeout(temporiz);
  clearInterval(cuenta);
  document.getElementById("boton3").innerHTML = "buf, por los pelos!!";
  alivio = setTimeout(function(){document.getElementById("boton3").innerHTML = "Autodestrucción XD";}, 1000);
}

function datosCheckBoxRadio(f, fieldset) { // se usa cuando los checkboxes o radios están dentro de un fiedset
  var cbs = f[fieldset].childNodes;
  var salida = "";
  for(var i = 0; i < cbs.length; i ++) {
    if(cbs[i].checked) {
      salida += cbs[i].value + " ";
    }
  }
  return(salida);
}

function datosCBR(f, nombre) { // cuando los checkboxes o radios no están dentro de ningún fieldset.
  var cbs = document.getElementById(f).getElementsByTagName("input");
  var salida = "";
  for(var i = 0; i < cbs.length; i ++) {
    var c = cbs[i];
    if((c.name == nombre) && (c.checked)) {
      salida += c.value + " ";
    }
  }
  window.alert(salida);
}

function datosSelect(f,select) { // para llamar desde otra función, devuelve el texto.
  var opciones = f[select].getElementsByTagName("option");
  var salida = "";
  for(var i = 0; i < opciones.length; i ++) {
    if(opciones[i].selected) {
      salida += opciones[i].value + " ";
    }
  }
  return(salida);
}

function datosSel(f,select) { // para llamar directamente, muestra el texto.
  var opciones = document.forms[f][select].getElementsByTagName("option");
  var salida = "";
  for(var i = 0; i < opciones.length; i ++) {
    if(opciones[i].selected) {
      salida += opciones[i].value + " ";
    }
  }
  window.alert(salida);
}

function datosPersonales(f, fieldset) {
  var dps = f[fieldset].getElementsByTagName("input");
  var salida = "";
  for(var i = 0; i < dps.length; i ++) {
    salida += dps[i].name + ": " + dps[i].value + "\n";
  }
  return(salida);
}

function datosSueltos(f) { // esto no vale pa mucho ehh porque no diferencia si los tags "input" están o no dentro de un "fieldset"
  var dps = f.getElementsByTagName("input");
  var salida = "";
  for(var i = 0; i < dps.length; i ++) {
    var dato = dps[i];
    if((dato.type != "checkbox") && (dato.type != "radio") && (dato.type != "button") && (dato.type != "image") && 
      (dato.type != "submit") && (dato.type != "reset")) {
      salida += dps[i].name + ": " + dps[i].value + "\n";
    }
  }
  return(salida);
}

function revisarForma(forma) { // pretendo que revise el formato de los datos del formulario y además que los recoja y muestre.
  var f = document.forms[forma];
  
  var correo = f["correo"].value;
  if(!correo.match(/\w+@\w+\.(com|org|es|net)/)) {
    window.alert("revisa el formato del email");
    return false;
  }
  var telef = f["telefono"].value;
  if(!telef.match(/\d{9}/)) {
    window.alert("mal formato para el teléfono");
    return false;
  }
  var web = f.dirweb.value;
  if(!web.match(/\w+\.(com|org|es|net)/)) {
    window.alert("mal formato para la dirección web");
    return false;
  }
  
  var n = f["numero"].value;
  if((n < 0) || (n > 25)) {
    window.alert("el número debe estar entre 0 y 25");
    return false;
  }
  var color = document.forms[forma].colorin.value;
  if(!color.toString().match(/#([0-9]|[a-f]|){6}/i)) {
    window.alert("mal formato para el color");
    return false;
  }
  var t1 = document.forms[forma].txt1.value;
  if(!t1.match(/\w{1,40}/)) {
    alert("el texto no cumple el formato");
  }
  
  window.alert(
    "número: " + n + "\n" +
    "escondido: " + f.inputEscondido.value + "\n" +
    "color: " + color + "\n" +
    "pass 1: " + document.forms[forma].passd.value + "\n" +
    "pass 2: " + document.forms[forma].passr.value + "\n" +
    "rango: " + document.forms[forma].rango.value + "\n" +
    "texto 1: " + t1 + "\n" +
    "area texto: " + document.forms[forma].areatexto.value + "\n"
  );
  var ff = "";
  for(var i = 0; i < document.forms.length; i ++) {
    ff += document.forms[i].name;
  }
  window.alert(ff);
 
  window.alert("selección checkboxes: " + datosCheckBoxRadio(f,"checkboxes"));
  window.alert("selección botones radio: " + datosCheckBoxRadio(f,"radios"));
  window.alert("selección dropbox: " + datosSelect(f,"selectPokemon"));
  window.alert("selección texto-lista: " + f["listaPokemon"].value);
  window.alert("datos personales:\n" + datosPersonales(f,"datospersonales"));
  //window.alert("datos sueltos:\n" + datosSueltos(f));
}