import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req, res) {
    // call api here
}

export async function createCategory(category) {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.category.create({data: category});
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function createCategories(users) {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.category.createMany({data: users});
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function readCategories() {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.category.findMany();
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function updateCategory(category) {
    try {
        const prisma = new PrismaClient()
        const result = await prisma.category.update({data: category})
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function deleteCategory(condition) {
    try {
        const prisma = new PrismaClient()
        const result = await prisma.category.delete({where: condition})
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}
