import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {stringify} from "@/helper/helper";

export async function GET(req, res) {
    const prisma = new PrismaClient()
    try {
        const result = await prisma.product.findMany()
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
        const result = await prisma.product.create({data: reqBody})
        return NextResponse.json({success: true, data: stringify(result)})
    } catch (e) {
        return NextResponse.json({success: false, data: e.message})
    }
}

export async function PUT(req, res) {
    try {
        let reqBody = await req.json();
        let {searchParams} = new URL(req.url);
        let product_id = searchParams.get('product_id');

        const prisma = new PrismaClient();
        const result = await prisma.product.update(
            {
                where: {id: parseInt(product_id)},
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
        let product_id = searchParams.get('product_id');

        const prisma = new PrismaClient();
        const result = await prisma.product.delete(
            {
                where: {
                    id: parseInt(product_id),
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
        let product_id = searchParams.get('product_id');

        const prisma = new PrismaClient();
        const result = await prisma.product.findUnique(
            {
                where: {
                    id: parseInt(product_id)
                }
            }
        )
        return NextResponse.json({success: true, data: stringify(result)})
    } catch (e) {
        return NextResponse.json({success: false, data: e.message})
    }
}