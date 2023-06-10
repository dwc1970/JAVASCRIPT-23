//while
let contador = 0;
while(contador < 3){
    contador.toLocaleString(contador);
    contador++;
}
console.log("Fin del ciclo while"); //Fin del Ciclo while

// Do-While
let conteo = 0;
do{
    console.log(conteo);
    conteo++;
    }while(conteo < 3);
    console.log("Fin del ciclo  do-while"); // Fin del ciclo Do-While

// Ciclo For
for(let contando = 0; contando < 3; contando++){
    console.log(contando); 0, 1, 2
}
console.log("Fin del ciclo For"); // Fin del ciclo For

// Palabra reservada break
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando); // Muestra todos los pares
        break; 
    }
}
console.log("Terminar el ciclo al encontrar el primer numero par"); // Termina el ciclo al encontrar el primer nuemero par.

// La palabra reservada continue
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        continue; // ir a la siguiente iteración
               
    }
    console.log(contando);
}
console.log("Terminar el ciclo");

// palabra continue y Etiquetas Labels
inicio:
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !==0){
        break inicio; // Ir a la siguiente iteración
    }
    console.log(contando); 0
}
console.log("Terminar el ciclo") //Fin del Ciclo

