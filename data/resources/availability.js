import {PrismaClient} from '@prisma/client';
import resources from "./resource.js";

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

export default {create,getByHospitalAndResource,getByHospital,removeByHospitalAndResource,update};