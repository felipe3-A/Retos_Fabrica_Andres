'user strict'
//-------------------------------------------------INDUCION--------------------------------------
//------------------------------
// var num=20;
// if(true){
//     let num=40;
//     console.log(num)
// }
// console.log(num)
// //------------------------------
// while(num <=22){
//     console.log('el dato es '+num)
//     num++
// }
// console.log('Terminado')

// //-----------------------------------

// do{
//     console.log('el numero es '+num);
//     num++;

// }while(num<=25);
// console.log("la funcion ha terminado")

// //---------------VENTANAS-----------------------
// //------------------DEPENDE LA OPCION QUE SELECIONE RESPONDE DE FORMA BOLEANA-------------------
// var resultado=confirm("Cuidado");
// alert(resultado)
// //-----------------ESTA ALERTA PERMITE INGRESAR TEXTO Y VERLO---------------------------
// var res=prompt("Es enserio","");
// alert("has dicho "+res);
// console.log('ESTO ESCRISTE EN EL ALERTA '+res)

//----------------------------------------FUNCIONES---------------------------------------------

//------------------------------------------METODOS---------------------------------------------
//Numeros en reversa
const arrayreverse=[1,2,3,4,5,6,7]
console.log(arrayreverse.reverse())

//Numero en orden
const arraydesorder=[3,1,2,4,7,6,]
const arrayorder =arraydesorder.sort();
console.log(arrayorder)

//Ordenar letras
const arrayletras=['q','a','b','y','z']
const  arrayletrasorder=arrayletras.sort();
console.log(arrayletrasorder)



//Torre ateriscos

var altura=5;

for(var j = 0; j < altura; j++){
    var aterisco=""
    for(var y = 0; y < j +1 ; y ++){
        aterisco=aterisco+ "* "
     
    }
    
    console.log(aterisco)
}
//Numero par y suma de pares
var sumapares=0
var pares=[1,2,3,4,5,6,7]
for(var p  = 0 ; p < pares.length; p++){

    if(pares [p] % 2 == 0){
        console.log('Pares :'+pares [p] )
        sumapares+=pares[p]
     
    }
    
}
console.log('Suma de pares es : '+sumapares)

//Numero mayor
var paresm=[4,5,2,2,4,7,2,1,9]
for(var i = 0; i < pares.length;i++){
console.log(Math.max(...paresm))
}

//Buscador de palabras

const palabras=['yo','no','seria','sera','y']
for(var i = 0; i < palabras.length; i++){
    if(palabras[i].length==1){
        console.log(palabras[i])
    }

}

//



