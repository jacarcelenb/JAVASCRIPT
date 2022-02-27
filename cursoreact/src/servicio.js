const API_URL = "https://veterianaria-backend-f4zue65sl-jacarcelenb.vercel.app/"
export const ListarEntidad = async ({entidad = "mascotas"}) =>{
    try {
       const respuesta = await fetch(`${API_URL}/${entidad}`) 
       const datos = await respuesta.json();
       return datos;
    } catch (error) {
        console.log({error});
    }
};