import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req, res) {
    // call api here
}

export async function createTag(tag) {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.tag.create({data: tag});
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function createTags(users) {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.tag.createMany({data: users});
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function readTags() {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.tag.findMany();
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function updateTag(tag) {
    try {
        const prisma = new PrismaClient()
        const result = await prisma.tag.update({data: tag})
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function deleteTag(condition) {
    try {
        const prisma = new PrismaClient()
        const result = await prisma.tag.delete({where: condition})
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}
