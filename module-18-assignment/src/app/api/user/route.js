import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req, res) {
    return createUser(
        {
            firstName: 'First',
            middleName: 'Middle',
            lastName: 'Last',
            mobile: '01700000000',
            email: 'a@b.com',
            profile: 'Profile',
            passwordHash: 'Password',
            intro: 'Intro'
        }
    )
}

export async function createUser(user) {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.user.create({data: user});
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function createUsers(users) {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.user.createMany({data: users});
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function readUsers() {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.user.findMany();
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function updateUser(user) {
    try {
        const prisma = new PrismaClient()
        const result = await prisma.user.update({data: user})
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}

export async function deleteUser(condition) {
    try {
        const prisma = new PrismaClient()
        const result = await prisma.user.delete({where: condition})
        return NextResponse.json({success: true, data: result})
    } catch (e) {
        return NextResponse.json({success: false, data: e})
    }
}
