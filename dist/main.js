"use strict";
class Camioneta {
    constructor() {
        this.modelo = "4x2";
        this.fabricante = "casa vaca";
        this.numeroDelLlantas = 4;
        this.placa = "qpw-452";
    }
    conducir() {
        document.write("El vehículo esta siendo conducido<br>");
    }
    encender() {
        document.write("El vehículo se ha encendido<br>");
    }
    acelerar() {
        document.write("El vehículo esta acelerando<br>");
    }
    detener() {
        document.write("El vehículo se ha detenido<br>");
    }
}
function procesar(vehiculo) {
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.detener();
}
let vehiculo = new Camioneta();
document.write("Vehículo Terrestre<hr>");
document.write("Clase Camioneta<hr>");
document.write("El numero de llantas del vehículo son: " + vehiculo.numeroDelLlantas.toString() + "<br>");
document.write("El modelo el vehículo: " + vehiculo.modelo + "<br>");
document.write("El fabricante del vehículo: " + vehiculo.fabricante + "<br>");
procesar(vehiculo);
class Camion {
    constructor() {
        this.modelo = "Actros L";
        this.fabricante = "Mercedes Benz";
        this.numeroDelLlantas = 10;
        this.placas = "qwp-982";
    }
    conducir() {
        document.write("El camión esta siendo conducido<br>");
    }
    encender() {
        document.write("El camión se ha encendido<br>");
    }
    acelerar() {
        document.write("El camión ha acelerado<br>");
    }
    detener() {
        document.write("El camión se ha detenido<br>");
    }
}
function ProcesarCamion(camion) {
    camion.encender();
    camion.conducir();
    camion.acelerar();
    camion.detener();
}
let camion = new Camion();
document.write("<hr>");
document.write("Clase Camión<hr>");
document.write("El numero de llantas del vehículo son: " + camion.numeroDelLlantas.toString() + "<br>");
document.write("El modelo el vehículo: " + camion.modelo + "<br>");
document.write("El fabricante del vehículo: " + camion.fabricante + "<br>");
ProcesarCamion(camion);
class Automovil {
    constructor() {
        this.modelo = "2018 Camaro SS";
        this.fabricante = "Chevrolet";
        this.numeroDelLlantas = 4;
        this.placas = "pdq-234";
    }
    conducir() {
        document.write("El automóvil esta siendo conducido<br>");
    }
    encender() {
        document.write("El automóvil se ha encendido<br>");
    }
    acelerar() {
        document.write("El automóvil ha acelerado<br>");
    }
    detener() {
        document.write("El automóvil se ha detenido<br>");
    }
}
function ProcesarAutomovil(automovil) {
    automovil.encender();
    automovil.conducir();
    automovil.acelerar();
    automovil.detener();
}
let automovil = new Automovil();
document.write("<hr>");
document.write("Clase Automóvil<hr>");
document.write("El numero de llantas del vehículo son: " + automovil.numeroDelLlantas.toString() + "<br>");
document.write("El modelo el vehículo: " + automovil.modelo + "<br>");
document.write("El fabricante del vehículo: " + automovil.fabricante + "<br>");
ProcesarAutomovil(automovil);
class Helicoptero {
    constructor() {
        this.modelo = "Boeing CH-47 Chinook";
        this.fabricante = " Boeing Integrated Defense Systems.";
        this.tipoDeVehiculoaereo = "Combate";
        this.numeroDeMotores = 2;
        this.capacidadPasajeros = 55;
    }
    encender() {
        document.write("El helicóptero se ha activado<br>");
    }
    detener() {
        document.write("El helicóptero se ha detenido<br>");
    }
    acelerar() {
        document.write("El helicóptero aumento la potencia del motor<br>");
    }
    pilotar() {
        document.write("El helicóptero esta siendo pilotado<br>");
    }
    despegar() {
        document.write("El helicóptero despego<br>");
    }
    aterrizar() {
        document.write("El helicóptero aterizó<br>");
    }
    volar() {
        document.write("El helicóptero esta volando<br>");
    }
}
function ProcesarVehiculoAereo(helicoptero) {
    helicoptero.encender();
    helicoptero.acelerar();
    helicoptero.detener();
    helicoptero.pilotar();
    helicoptero.despegar();
    helicoptero.aterrizar();
    helicoptero.volar();
}
let helicoptero = new Helicoptero();
document.write("<hr>");
document.write("Vehículo Aereo<hr>");
document.write("Clase Helicóptero<hr>");
document.write("El numero de motores: " + helicoptero.numeroDeMotores.toString() + "<br>");
document.write("Capacidad de pasajeros: " + helicoptero.capacidadPasajeros.toString() + "<br>");
document.write("Tipo de vehículo aereo: " + helicoptero.tipoDeVehiculoaereo + "<br>");
document.write("El modelo el vehículo: " + helicoptero.modelo + "<br>");
document.write("El fabricante del vehículo: " + helicoptero.fabricante + "<br>");
ProcesarVehiculoAereo(helicoptero);
class Avion {
    constructor() {
        this.modelo = "Boeing 477";
        this.fabricante = " Boeing Integrated Defense Systems.";
        this.tipoDeVehiculoaereo = "Comercial";
        this.numeroDeMotores = 2;
        this.capacidadPasajeros = 1200;
    }
    encender() {
        document.write("El avión se ha activado <br>");
    }
    detener() {
        document.write("El avión se ha detenido <br>");
    }
    acelerar() {
        document.write("El avión aumento la potencia de los motores<br>");
    }
    pilotar() {
        document.write("El avión esta siendo pilotado<br>");
    }
    despegar() {
        document.write("El avión despego<br>");
    }
    volar() {
        document.write("El avión se encuentra volando<br>");
    }
    aterrizar() {
        document.write("El avión aterrizo<br>");
    }
}
let avion = new Avion();
document.write("<hr>");
document.write("Clase Avión<hr>");
document.write("El numero de motores: " + avion.numeroDeMotores.toString() + "<br>");
document.write("Capacidad de pasajeros: " + avion.capacidadPasajeros.toString() + "<br>");
document.write("Tipo de vehículo aereo: " + avion.tipoDeVehiculoaereo + "<br>");
document.write("El modelo el vehículo: " + avion.modelo + "<br>");
document.write("El fabricante del vehículo: " + avion.fabricante + "<br>");
ProcesarVehiculoAereo(avion);
class Avioneta {
    constructor() {
        this.modelo = " Cessna 172,";
        this.fabricante = "  Cessna";
        this.tipoDeVehiculoaereo = "Entrenamiento";
        this.numeroDeMotores = 2;
        this.capacidadPasajeros = 1200;
    }
    encender() {
        document.write("El avioneta se ha activado <br>");
    }
    detener() {
        document.write("El avioneta se ha detenido <br>");
    }
    acelerar() {
        document.write("El avioneta aumento la potencia de los motores<br>");
    }
    pilotar() {
        document.write("El avioneta esta siendo pilotado<br>");
    }
    despegar() {
        document.write("El avioneta despego<br>");
    }
    volar() {
        document.write("El avioneta se encuentra volando<br>");
    }
    aterrizar() {
        document.write("El avioneta aterrizo<br>");
    }
}
let avioneta = new Avioneta();
document.write("<hr>");
document.write("Clase Avioneta<hr>");
document.write("El numero de motores: " + avioneta.numeroDeMotores.toString() + "<br>");
document.write("Capacidad de pasajeros: " + avioneta.capacidadPasajeros.toString() + "<br>");
document.write("Tipo de vehículo aereo: " + avioneta.tipoDeVehiculoaereo + "<br>");
document.write("El modelo el vehículo: " + avioneta.modelo + "<br>");
document.write("El fabricante del vehículo: " + avioneta.fabricante + "<br>");
ProcesarVehiculoAereo(avioneta);
class Yate {
    constructor() {
        this.modelo = "80";
        this.fabricante = "paglietini";
        this.numeroDeAnclas = 1;
    }
    detener() {
        document.write("El yate se ha detenido<br>");
    }
    encender() {
        document.write("El yate se ha encendido<br>");
    }
    acelerar() {
        document.write("El yate acelero<br>");
    }
    navegar() {
        document.write("El yate se encuentra navegando<br>");
    }
}
function ProcesarVehiculoMarino(yate) {
    yate.encender();
    yate.acelerar();
    yate.navegar();
    yate.detener();
}
let yate = new Yate();
document.write("<hr>");
document.write("Vehículo Maritimo<hr>");
document.write("Clase Yate<hr>");
document.write("Numero de anclas: " + yate.numeroDeAnclas.toString() + "<br>");
document.write("El modelo el vehículo: " + yate.modelo + "<br>");
document.write("El fabricante del vehículo: " + yate.fabricante + "<br>");
ProcesarVehiculoMarino(yate);
class Velero {
    constructor() {
        this.modelo = "Velero multicasco";
        this.fabricante = "MORTAIN & MAVRIKIOS";
        this.numeroDeAnclas = 1;
    }
    detener() {
        document.write("El velero se ha detenido<br>");
    }
    encender() {
        document.write("El velero se mueve con el viento<br>");
    }
    acelerar() {
        document.write("El velero izo la vela<br>");
    }
    navegar() {
        document.write("El velero se encuentra navegando<br>");
    }
}
let velero = new Velero();
document.write("<hr>");
document.write("Vehículo Maritimo<hr>");
document.write("Clase Velero<hr>");
document.write("Numero de anclas: " + velero.numeroDeAnclas.toString() + "<br>");
document.write("El modelo el vehículo: " + velero.modelo + "<br>");
document.write("El fabricante del vehículo: " + velero.fabricante + "<br>");
ProcesarVehiculoMarino(velero);
