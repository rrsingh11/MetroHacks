const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

async function getByHospital(hospitalId) {
    const data = await fetch(`${apiEndpoint}/hospital/id/${hospitalId}/resource`);
    return await data.json();
}

/*
async function getResource(resourceId) {
    const data = await fetch(`${apiEndpoint}/resource/id/${resourceId}`);
    return await data.json();
}
*/

export default {getByHospital};

/*
 export default (   [
        {
            id: 1,
            name: "Oxygen Cylinder",
            image: "./src/assets/oxygen.png",
            available: 1,
            quantity: 20
        },
        {
            id: 2,
            name: "Blood",
            image: "./src/assets/oxygen.png",
            available: 0,
            quantity: 30
        },
        {
            id: 3,
            name: "Patient",
            image: "./src/assets/oxygen.png",
            available: 0,
            quantity: 50
        },
        {
            id: 4,
            name: "Medicines",
            image: "./src/assets/oxygen.png",
            available: 0,
            quantity: 40
        }
    ]
 )
*/
