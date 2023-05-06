interface Vehiculo {
    modelo: string;
    fabricante: string;
    encender(): void;
    detener(): void;
    acelerar(): void;
}
interface VehiculoTerrestre extends Vehiculo {
    numeroDelLlantas: number;
    conducir(): void;
}
interface VehiculoMaritimo extends Vehiculo {
    numeroDeAnclas: number;
    navegar(): void;

}
interface VehiculoAereo extends Vehiculo {
    tipoDeVehiculoaereo: string;
    numeroDeMotores: number;
    capacidadPasajeros: number;
    pilotar(): void;
    despegar(): void;
    aterrizar(): void;
    volar(): void;

}
class Camioneta implements VehiculoTerrestre {
    modelo: string = "4x2";
    fabricante: string = "casa vaca";
    numeroDelLlantas: number = 4;
    placa: string = "qpw-452";
    conducir(): void {
        document.write("El vehículo esta siendo conducido<br>");
    }
    encender(): void {
        document.write("El vehículo se ha encendido<br>");
    }
    acelerar(): void {
        document.write("El vehículo esta acelerando<br>");
    }
    detener(): void {
        document.write("El vehículo se ha detenido<br>");
    }


}
function procesar(vehiculo: VehiculoTerrestre) {
    vehiculo.encender();
    vehiculo.conducir();
    vehiculo.acelerar();
    vehiculo.detener();
}

let vehiculo = new Camioneta();
document.write("Vehículo Terrestre<hr>")
document.write("Clase Camioneta<hr>")
document.write("El numero de llantas del vehículo son: " + vehiculo.numeroDelLlantas.toString() + "<br>");
document.write("El modelo el vehículo: " + vehiculo.modelo + "<br>");
document.write("El fabricante del vehículo: " + vehiculo.fabricante + "<br>");
procesar(vehiculo);


class Camion implements VehiculoTerrestre {
    modelo: string = "Actros L";
    fabricante: string = "Mercedes Benz";
    numeroDelLlantas: number = 10;
    placas: string = "qwp-982";
    conducir(): void {
        document.write("El camión esta siendo conducido<br>");
    }
    encender(): void {
        document.write("El camión se ha encendido<br>");

    }
    acelerar(): void {
        document.write("El camión ha acelerado<br>");

    }
    detener(): void {
        document.write("El camión se ha detenido<br>");

    }
}
function ProcesarCamion(camion:VehiculoTerrestre) {
    camion.encender();
    camion.conducir();
    camion.acelerar();
    camion.detener();
    
}
let camion = new Camion();
document.write("<hr>")
document.write("Clase Camión<hr>")
document.write("El numero de llantas del vehículo son: " + camion.numeroDelLlantas.toString() + "<br>");
document.write("El modelo el vehículo: " + camion.modelo + "<br>");
document.write("El fabricante del vehículo: " + camion.fabricante + "<br>");
ProcesarCamion(camion);

class Automovil implements VehiculoTerrestre {
    modelo: string = "2018 Camaro SS";
    fabricante: string = "Chevrolet";
    numeroDelLlantas: number = 4;
    placas: string = "pdq-234";
    conducir(): void {
        document.write("El automóvil esta siendo conducido<br>");
    }
    encender(): void {
        document.write("El automóvil se ha encendido<br>");

    }
    acelerar(): void {
        document.write("El automóvil ha acelerado<br>");

    }
    detener(): void {
        document.write("El automóvil se ha detenido<br>");

    }
}
function ProcesarAutomovil(automovil:VehiculoTerrestre) {
    automovil.encender();
    automovil.conducir();
    automovil.acelerar();
    automovil.detener();
    
}
let automovil = new Automovil()
document.write("<hr>")
document.write("Clase Automóvil<hr>")
document.write("El numero de llantas del vehículo son: " + automovil.numeroDelLlantas.toString() + "<br>");
document.write("El modelo el vehículo: " + automovil.modelo + "<br>");
document.write("El fabricante del vehículo: " + automovil.fabricante + "<br>");
ProcesarAutomovil(automovil);

class Helicoptero implements VehiculoAereo {
    modelo: string = "Boeing CH-47 Chinook";
    fabricante: string = " Boeing Integrated Defense Systems.";
    tipoDeVehiculoaereo: string = "Combate";
    numeroDeMotores: number = 2;
    capacidadPasajeros: number = 55;
    encender(): void {
        document.write("El helicóptero se ha activado<br>");
    }
    detener(): void {
        document.write("El helicóptero se ha detenido<br>");
    }
    acelerar(): void {
        document.write("El helicóptero aumento la potencia del motor<br>");
    }
    pilotar(): void {
        document.write("El helicóptero esta siendo pilotado<br>");
    }
    despegar(): void {
        document.write("El helicóptero despego<br>");
    }
    aterrizar(): void {
        document.write("El helicóptero aterizó<br>");
    }
    volar(): void {
        document.write("El helicóptero esta volando<br>");
    }
}
function ProcesarVehiculoAereo(helicoptero:VehiculoAereo) {
    helicoptero.encender();
    helicoptero.acelerar();
    helicoptero.detener();
    helicoptero.pilotar();
    helicoptero.despegar();
    helicoptero.aterrizar();
    helicoptero.volar();   
}
let helicoptero =new Helicoptero()
document.write("<hr>")
document.write("Vehículo Aereo<hr>")
document.write("Clase Helicóptero<hr>")
document.write("El numero de motores: " + helicoptero.numeroDeMotores.toString() + "<br>");
document.write("Capacidad de pasajeros: " + helicoptero.capacidadPasajeros.toString() + "<br>");
document.write("Tipo de vehículo aereo: " + helicoptero.tipoDeVehiculoaereo + "<br>");
document.write("El modelo el vehículo: " + helicoptero.modelo + "<br>");
document.write("El fabricante del vehículo: " + helicoptero.fabricante + "<br>");
ProcesarVehiculoAereo (helicoptero);


class Avion implements VehiculoAereo {
    modelo: string = "Boeing 477";
    fabricante: string = " Boeing Integrated Defense Systems.";
    tipoDeVehiculoaereo: string = "Comercial";
    numeroDeMotores: number = 2;
    capacidadPasajeros: number = 1200;
    encender(): void {
        document.write("El avión se ha activado <br>");
    }
    detener(): void {
        document.write("El avión se ha detenido <br>");
    }
    acelerar(): void {
        document.write("El avión aumento la potencia de los motores<br>");
    }
    pilotar(): void {
        document.write("El avión esta siendo pilotado<br>");
    }
    despegar(): void {
        document.write("El avión despego<br>");
    }
    volar(): void {
        document.write("El avión se encuentra volando<br>");
    }
    aterrizar(): void {
        document.write("El avión aterrizo<br>");
    }
}

let avion =new Avion()
document.write("<hr>")
document.write("Clase Avión<hr>")
document.write("El numero de motores: " + avion.numeroDeMotores.toString() + "<br>");
document.write("Capacidad de pasajeros: " + avion.capacidadPasajeros.toString() + "<br>");
document.write("Tipo de vehículo aereo: " + avion.tipoDeVehiculoaereo + "<br>");
document.write("El modelo el vehículo: " + avion.modelo + "<br>");
document.write("El fabricante del vehículo: " + avion.fabricante + "<br>");
ProcesarVehiculoAereo (avion);

class Avioneta implements VehiculoAereo {
    modelo: string = " Cessna 172,";
    fabricante: string = "  Cessna";
    tipoDeVehiculoaereo: string = "Entrenamiento";
    numeroDeMotores: number = 2;
    capacidadPasajeros: number = 1200;
    encender(): void {
        document.write("El avioneta se ha activado <br>");
    }
    detener(): void {
        document.write("El avioneta se ha detenido <br>");
    }
    acelerar(): void {
        document.write("El avioneta aumento la potencia de los motores<br>");
    }
    pilotar(): void {
        document.write("El avioneta esta siendo pilotado<br>");
    }
    despegar(): void {
        document.write("El avioneta despego<br>");
    }
    volar(): void {
        document.write("El avioneta se encuentra volando<br>");
    }
    aterrizar(): void {
        document.write("El avioneta aterrizo<br>");
    }
}

let avioneta =new Avioneta()
document.write("<hr>")
document.write("Clase Avioneta<hr>")
document.write("El numero de motores: " + avioneta.numeroDeMotores.toString() + "<br>");
document.write("Capacidad de pasajeros: " + avioneta.capacidadPasajeros.toString() + "<br>");
document.write("Tipo de vehículo aereo: " + avioneta.tipoDeVehiculoaereo + "<br>");
document.write("El modelo el vehículo: " + avioneta.modelo + "<br>");
document.write("El fabricante del vehículo: " + avioneta.fabricante + "<br>");
ProcesarVehiculoAereo (avioneta);

class Yate implements VehiculoMaritimo {
    modelo: string = "80";
    fabricante: string = "paglietini";
    numeroDeAnclas: number = 1;
    detener(): void {
        document.write("El yate se ha detenido<br>");
    }
    encender(): void {
        document.write("El yate se ha encendido<br>");
    }
    acelerar(): void {
        document.write("El yate acelero<br>");
    }
    navegar(): void {
        document.write("El yate se encuentra navegando<br>");
    }
}
function ProcesarVehiculoMarino(yate:VehiculoMaritimo){
    yate.encender()
    yate.acelerar()
    yate.navegar()
    yate.detener()
}

let yate = new Yate()
document.write("<hr>")
document.write("Vehículo Maritimo<hr>")
document.write("Clase Yate<hr>")
document.write("Numero de anclas: " + yate.numeroDeAnclas.toString() + "<br>");
document.write("El modelo el vehículo: " + yate.modelo + "<br>");
document.write("El fabricante del vehículo: " + yate.fabricante + "<br>");
ProcesarVehiculoMarino(yate)

class Velero implements VehiculoMaritimo {
    modelo: string = "Velero multicasco";
    fabricante: string = "MORTAIN & MAVRIKIOS";
    numeroDeAnclas: number = 1;
    detener(): void {
        document.write("El velero se ha detenido<br>");
    }
    encender(): void {
        document.write("El velero se mueve con el viento<br>");
    }
    acelerar(): void {
        document.write("El velero izo la vela<br>");
    }
    navegar(): void {
        document.write("El velero se encuentra navegando<br>");
    }
}


let velero = new Velero()
document.write("<hr>")
document.write("Vehículo Maritimo<hr>")
document.write("Clase Velero<hr>")
document.write("Numero de anclas: " + velero.numeroDeAnclas.toString() + "<br>");
document.write("El modelo el vehículo: " + velero.modelo + "<br>");
document.write("El fabricante del vehículo: " + velero.fabricante + "<br>");
ProcesarVehiculoMarino(velero)