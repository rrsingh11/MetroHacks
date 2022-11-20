/*
async function create(name, latitude, longitude) {
    return await prisma.hospital.create({
        data: {
            name,
            latitude,
            longitude
        }
    });
}

async function getAll() {
    return await prisma.hospital.findMany();
}

async function getById(id) {
    return await prisma.hospital.findFirst({
        where: {
            id: +id
        }
    });
}

async function remove(id) {
    return await prisma.hospital.delete({
        where: {
            id: +id
        }
    })
}

async function rename(id, name, latitude, longitude) {
    return await prisma.hospital.update({
        where: {
            id: +id
        },
        data: {
            name,
            latitude: +latitude,
            longitude: +longitude
        }
    });
}

/!*
async function main() {

}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });*!/

export default {create,getAll,getById,remove,rename};*/
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

async function getAll() {
    console.log(apiEndpoint);
    const data = await fetch(`${apiEndpoint}/hospital`);
    return await data.json();
}

export default {getAll};