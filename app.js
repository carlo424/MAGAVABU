// API MAGAVABU

//direccion de la API
const API_URL =
"https://jsonplaceholder.typicode.com";

const RECURSO_PRODUCTOS =
`${API_URL}/posts`;

//procesa las repuestas HTTP
async function procesarRespuesta(respuesta){

    console.log(
        "Código HTTP:",
        respuesta.status
    );

    if(!respuesta.ok){

        throw new Error(
            `Error HTTP:
            ${respuesta.status}`
        );

    }

    return await respuesta.json();

}

//consulta todos los productos
async function listarProductos(){

    try{

        const respuesta =
        await fetch(
            RECURSO_PRODUCTOS
        );

        const productos =
        await procesarRespuesta(
            respuesta
        );

        document.getElementById(
            "resultado"
        ).textContent =
        JSON.stringify(
            productos,
            null,
            2
        );

    }

    catch(error){

        console.error(error);

    }

}

