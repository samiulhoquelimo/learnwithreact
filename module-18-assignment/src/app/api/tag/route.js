import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {stringify} from "@/helper/helper";

export async function GET(req, res) {
    const prisma = new PrismaClient()
    try {
        const result = await prisma.tag.findMany()
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
        const result = await prisma.tag.create({data: reqBody})
        return NextResponse.json({success: true, data: stringify(result)})
    } catch (e) {
        return NextResponse.json({success: false, data: e.message})
    }
}

export async function PUT(req, res) {
    try {
        let reqBody = await req.json();
        let {searchParams} = new URL(req.url);
        let tag_id = searchParams.get('tag_id');

        const prisma = new PrismaClient();
        const result = await prisma.tag.update(
            {
                where: {id: parseInt(tag_id)},
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
        let tag_id = searchParams.get('tag_id');

        const prisma = new PrismaClient();
        const result = await prisma.tag.delete(
            {
                where: {
                    id: parseInt(tag_id),
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
        let tag_id = searchParams.get('tag_id');

        const prisma = new PrismaClient();
        const result = await prisma.tag.findUnique(
            {
                where: {
                    id: parseInt(tag_id)
                }
            }
        )
        return NextResponse.json({success: true, data: stringify(result)})
    } catch (e) {
        return NextResponse.json({success: false, data: e.message})
    }
}