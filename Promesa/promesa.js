const data=[{
    title:'titulo1',
    year:2022,
    autor:'autor1'
},
{
    title:'titulo2',
    year:2022,
    autor:'autor2'
},
{
    title:'titulo3',
    year:2022,
    autor:'autor3'
}]



var heroes={
    capi:{nombre:'Capitan america',poder:'Resiste al frio'},
    iron:{nombre:'Iroman',poder:'Ser rico'},
    spider:{nombre:'Peter parker',poder:'Picadura Letal'}
}

// function getdata(){console.log(heroes); }

// function llamar(){
//     var id= document.getElementById("texto").value
//     alert(id)
// }
const promesa=(id)=>{
    return new Promise((req, res) => {
     const heroe=heroes[id]
     if (heroe) {
        req (heroe)
     } else {
        res(`no existe ${id}`)
     }
    })
}
 Promise.all

// const datos=()=>{
//     const datos=encontrarnombre("andres")
//     document.getElementById("h1").innerHTML=datos
// }
// const encontrarnombre=(nombre)=>{
//     return "Hola "+nombre+" escribe el id del superheroe"
// }
// datos()