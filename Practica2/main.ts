import { Telefono, TipoTelefono } from "./Telefono.js"
import { Mail, TipoMail } from "./Mail.js"
import { Direccion } from "./Direccion.js"
import { Persona, Sexo, Color} from "./Persona.js"

var persona1 = new Persona("Juan", "Jimenez Diaz", 45, "13619405S", "10/10", Color.Azul,
    Sexo.Masculino, new Direccion("Calle Sevilla", "18", "4", "B", "28008", "Madrid", "Madrid"),
    new Mail(TipoMail.Empresa, "juan.jimenez.diaz@techsolution.es"),
    new Telefono(TipoTelefono.Empresa, "678923677"), "Informatico residente en Madrid");
var persona2 = new Persona("Lucia", "Arias Lobato", 23, "72135468M", "01/05", Color.Verde,
    Sexo.Femenino, new Direccion("Calle Santa Lucia", "10", "2", "D", "39006", "Santander", "Cantabria"),
    new Mail(TipoMail.Personal, "larias_99@gmail.com"), new Telefono(TipoTelefono.Personal, "677899923"),
    "Estudiante de matematicas en Cantabria");
var persona3 = new Persona("Mario", "Garcia Ruiz", 67, "13151923Z", "13/04", Color.Rojo,
    Sexo.Masculino, new Direccion("Av. del Cid Campeador", "24", "5", "A", "09005", "Burgos", "Burgos"),
    new Mail(TipoMail.Personal, "mario_garcia_ruiz@hotmail.com"),
    new Telefono(TipoTelefono.Personal, "612345678"), "Jubilado residente en Burgos");

var arrayPersonas: Persona[] = [persona1, persona2, persona3];

console.log("Listado de personas sin modificar");
for (let i = 0; i < arrayPersonas.length; i++) {
    let num: number = i + 1;
    console.log("Persona" + num);
    console.log("El nombre de la persona es " + arrayPersonas[i].obtenerNombre + " y sus apellidos " + arrayPersonas[i].obtenerApellidos + ", cuya edad es " + arrayPersonas[i].obtenerEdad + " y dni es " + arrayPersonas[i].obtenerDni + ". Su cumple es el " + arrayPersonas[i].obtenerCumpleanos + " y su color favorito es el " + arrayPersonas[i].obtenerColorFavorito + ". El genero de este individuo es " + arrayPersonas[i].obtenerSexo + ". Vive en " + arrayPersonas[i].obtenerDireccionPersona.obtenerCalle + " " + arrayPersonas[i].obtenerDireccionPersona.obtenerNumero + " " + arrayPersonas[i].obtenerDireccionPersona.obtenerPiso + arrayPersonas[i].obtenerDireccionPersona.obtenerLetra + ", " + arrayPersonas[i].obtenerDireccionPersona.obtenerCodigoPostal + ", " + arrayPersonas[i].obtenerDireccionPersona.obtenerPoblacion + ", " + arrayPersonas[i].obtenerDireccionPersona.obtenerProvincia + ". Su email es de tipo " + arrayPersonas[i].obtenerMailPersona.obtenerTipoMail + " y es "+ arrayPersonas[i].obtenerMailPersona.obtenerDireccionMail + ". Su telefono es de tipo " + arrayPersonas[i].obtenerTelefonoPersona.obtenerTipoTelefono + " y es " + arrayPersonas[i].obtenerTelefonoPersona.obtenerNumeroTelefono + ". Otras notas sobre esta persona: " + arrayPersonas[i].obtenerNotas + ".");
}

var dni: string = "72135468M";

for (let i = 0; i < arrayPersonas.length; i++) {
    if (arrayPersonas[i].obtenerDni == dni) {
        arrayPersonas[i].establecerDireccionPersona = new Direccion("Calle Los Rios", "190", "8", "C", "39005", "Santander", "Cantabria");
        arrayPersonas[i].establecerMailPersona = new Mail(TipoMail.Empresa, "lucia.arias.lobato@unican.es");
        arrayPersonas[i].establecerTelefonoPersona = new Telefono(TipoTelefono.Personal, "666999900");
    }
}

console.log("Listado de personas modificado");
for (let i = 0; i < arrayPersonas.length; i++) {
    let num: number = i + 1;
    console.log("Persona" + num);
    console.log("El nombre de la persona es " + arrayPersonas[i].obtenerNombre + " y sus apellidos " + arrayPersonas[i].obtenerApellidos + ", cuya edad es " + arrayPersonas[i].obtenerEdad + " y dni es " + arrayPersonas[i].obtenerDni + ". Su cumple es el " + arrayPersonas[i].obtenerCumpleanos + " y su color favorito es el " + arrayPersonas[i].obtenerColorFavorito + ". El genero de este individuo es " + arrayPersonas[i].obtenerSexo + ". Vive en " + arrayPersonas[i].obtenerDireccionPersona.obtenerCalle + " " + arrayPersonas[i].obtenerDireccionPersona.obtenerNumero + " " + arrayPersonas[i].obtenerDireccionPersona.obtenerPiso + arrayPersonas[i].obtenerDireccionPersona.obtenerLetra + ", " + arrayPersonas[i].obtenerDireccionPersona.obtenerCodigoPostal + ", " + arrayPersonas[i].obtenerDireccionPersona.obtenerPoblacion + ", " + arrayPersonas[i].obtenerDireccionPersona.obtenerProvincia + ". Su email es de tipo " + arrayPersonas[i].obtenerMailPersona.obtenerTipoMail + " y es " + arrayPersonas[i].obtenerMailPersona.obtenerDireccionMail + ". Su telefono es de tipo " + arrayPersonas[i].obtenerTelefonoPersona.obtenerTipoTelefono + " y es " + arrayPersonas[i].obtenerTelefonoPersona.obtenerNumeroTelefono + ". Otras notas sobre esta persona: " + arrayPersonas[i].obtenerNotas + ".");
}