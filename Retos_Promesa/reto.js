var heroes = {
    capi: {
        nombre: 'Capitan america',
        poder: 'Resistir al frio',
        edad:32
    },

    iron: {
        nombre: 'Iroman',
        poder: 'Ser rico',
        edad:23
    },

    spider: {
        nombre: 'Peter parker',
        poder: 'Picadura Letal',
        edad:17
    }
}
//-------------------------------------------------------------ME--------------------------------------------------

// const buscar = (id,nombre,poder) => {
//     const dato = heroes1(id,nombre,poder)
//     document.getElementById("h1").innerHTML = dato
// }


// const heroes1 = (id,nombre_heroe,poder) => {
//     id = "spider"
//     nombre_heroe=(heroes[id].nombre)
//     poder=(heroes[id].poder)

//     if (id) {
//         console.log(`${id}`, heroes[id])
//     } 
  
//     return `El heroe es : ${id} y su nombre real es ${nombre_heroe} y su poder es ${poder}`
// }

// buscar()

//---------------------------------------------CALLBACK---REAL------------------------------------------------------------------

const encontrarheroe=(id,callback)=>{
    const heroe=heroes[id]
    if (heroe) {
        callback(null,heroe)
    } else {
        console.log(`El heroe con el id ${id} no exite actualmente`)
    } 

}
   
encontrarheroe(heroe="iron",(error,heroe)=>{
    if (error) {
        console.log(error);
    } else {
        console.log(heroe); 
    }
})

encontrarheroe(heroe,(error,heroe)=>{
    if(heroe.edad<=18){
        console.log('es menor')
    }else{
        console.log('es mayor')
    }
})

//-------------------------------------NO TOCAR YA FUNCIONBA







//  if (heroe.edad < 18) {
//             console.log('el heroe es menor de edad');
//         } else {
//             console.log('el heroe es mayor de edad');
            
//         }
