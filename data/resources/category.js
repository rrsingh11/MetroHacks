import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function create(name) {
    return await prisma.resourceCategory.create({
        data: {
            name
        }
    });
}

async function getAll() {
    return await prisma.resourceCategory.findMany();
}

async function getById(id) {
    return await prisma.resourceCategory.findFirst({
        where: {
            id: +id
        }
    });
}

async function remove(id) {
    return await prisma.resourceCategory.delete({
        where: {
            id: +id
        }
    })
}

async function rename(id, name) {
    return await prisma.resourceCategory.update({
        where: {
            id: +id
        },
        data: {
            name
        }
    });
}

export default {create,getAll,getById,remove,rename};