//async function getUserData(userId) {
   // // Simula una llamada a una API externa
//    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//    return response.json();
//}

// // Prueba la función
//getUserData(1).then(data => console.log(data));

async function getUserData(userId){
    return { id: userId, name: "Chris Bajista", instrument: "Bajo" };
}
getUserData(1).then(data => console.log(data));

function suma(a,b){
    return a+b;
}
module.exports = suma;
