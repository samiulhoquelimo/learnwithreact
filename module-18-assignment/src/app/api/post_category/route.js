import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {stringify} from "@/helper/helper";

export async function GET(req, res) {
    const prisma = new PrismaClient()
    try {
        const result = await prisma.post_category.findMany()
        return NextResponse.json({success: true, data: stringify(result)})
    } catch (e) {
        return NextResponse.json({status: false, data: e.message})
    } finally {
        prisma.$disconnect()
    }
}

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        const result = await prisma.post_category.create({data: reqBody})
        return NextResponse.json({success: true, data: stringify(result)})
    } catch (e) {
        return NextResponse.json({success: false, data: e.message})
    }
}

export async function PUT(req, res) {
    try {
        let reqBody = await req.json();
        let {searchParams} = new URL(req.url);
        let post_category_id = searchParams.get('post_category_id');

        const prisma = new PrismaClient();
        const result = await prisma.post_category.update(
            {
                where: {id: parseInt(post_category_id)},
                data: reqBody
            }
        )

        return NextResponse.json({success: true, data: stringify(result)})
    } catch (e) {
        return NextResponse.json({success: false, data: e.message})
    }
}

export async function DELETE(req, res) {
    try {
        let {searchParams} = new URL(req.url);
        let post_category_id = searchParams.get('post_category_id');

        const prisma = new PrismaClient();
        const result = await prisma.post_category.delete(
            {
                where: {
                    id: parseInt(post_category_id),
                }
            }
        )
        return NextResponse.json({success: true, data: stringify(result)})
    } catch (e) {
        return NextResponse.json({success: false, data: e.message})
    }
}

export async function PATCH(req, res) {
    try {
        let {searchParams} = new URL(req.url);
        let post_category_id = searchParams.get('post_category_id');

        const prisma = new PrismaClient();
        const result = await prisma.post_category.findUnique(
            {
                where: {
                    id: parseInt(post_category_id)
                }
            }
        )
        return NextResponse.json({success: true, data: stringify(result)})
    } catch (e) {
        return NextResponse.json({success: false, data: e.message})
    }
}