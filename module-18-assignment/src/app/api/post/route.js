import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req, res) {
    // call api here
}

export async function createPost(post) {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.post.create({data: post});
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function createPosts(users) {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.post.createMany({data: users});
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function readPosts() {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.post.findMany();
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function updatePost(post) {
    try {
        const prisma = new PrismaClient()
        const result = await prisma.post.update({data: post})
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function deletePost(condition) {
    try {
        const prisma = new PrismaClient()
        const result = await prisma.post.delete({where: condition})
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}
