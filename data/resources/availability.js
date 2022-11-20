import {PrismaClient} from '@prisma/client';
import resources from "./resource.js";
import hospitalsData from "./../hospital.js";

const prisma = new PrismaClient();

async function create(hospitalId, resourceId) {
    return await prisma.resourceAvailability.create({
        data: {
            resourceId: +resourceId,
            hospitalId: +hospitalId
        }
    });
}

/*async function getAll() {
    return await prisma.resource.findMany();
}*/

// GET ALL BY HOSPITAL
// GET ALL BY RESOURCE

async function getByHospitalAndResource(hospitalId, resourceId) {
    return await prisma.resourceAvailability.findFirst({
        where: {
            hospitalId: +hospitalId,
            resourceId: +resourceId
        }
    });
}

async function getByHospital(hospitalId) {
    const availabilities = await prisma.resourceAvailability.findMany({
        where: {
            hospitalId: +hospitalId,
        }
    });

    return await Promise.all(availabilities.map(async (a) => {
        let updated = a;
        updated.name = (await resources.getById(a.resourceId)).name;
        return updated;
    }));
}

async function removeByHospitalAndResource(hospitalId, resourceId) {
    return await prisma.resourceAvailability.delete({
        where: {
            hospitalId: +hospitalId,
            resourceId: +resourceId
        }
    })
}

async function update(hospitalId, resourceId, numAvailable, numPatients) {
    const availability = await getByHospitalAndResource(hospitalId, resourceId);
    return await prisma.resourceAvailability.update({
        where: {
            id: availability.id
        },
        data: {
            available: +numAvailable,
            patients: +numPatients
        }
    })
}

async function quickupdate(hospitalName, resourceName, numAvailable) {
    const hospitals = await prisma.hospital.findMany({
            where: {
                name: hospitalName
            }
    }
    );
    let hospital;
    if(hospitals.length === 0) {
        hospital = await hospitalsData.create(hospitalName, 0, 0);
    } else {
        hospital = hospitals[0];
    }

    const resourcesArray = await prisma.resource.findMany({
            where: {
                name: resourceName
            }
        }
    );
    let resource;
    if(resourcesArray.length === 0) {
        resource = await resources.create(resourceName, "", 1);
    } else {
        resource = resourcesArray[0];
    }

    let availability = await getByHospitalAndResource(hospital.id, resource.id);
    if(!availability) {
        availability = await create(hospital.id, resource.id);
    }
    return await prisma.resourceAvailability.update({
        where: {
            id: availability.id
        },
        data: {
            available: +numAvailable,
        }
    })
}

export default {create,getByHospitalAndResource,getByHospital,removeByHospitalAndResource,update,quickupdate};