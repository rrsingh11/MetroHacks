import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function create(name, unit, categoryId) {
    return await prisma.resource.create({
        data: {
            name,
            unit,
            categoryId: +categoryId
        }
    });
}

async function getAll() {
    return await prisma.resource.findMany();
}

async function getById(id) {
    return await prisma.resource.findFirst({
        where: {
            id: +id
        }
    });
}

async function remove(id) {
    return await prisma.resource.delete({
        where: {
            id: +id
        }
    })
}

async function rename(id, name, unit) {
    return await prisma.resource.update({
        where: {
            id: +id
        },
        data: {
            name,
            unit
        }
    });
}

export default {create,getAll,getById,remove,rename};