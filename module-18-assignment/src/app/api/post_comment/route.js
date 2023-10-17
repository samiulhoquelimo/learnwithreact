import post_commentNextResponse} from "next/server";
import post_commentPrismaClient} from "@prisma/client";
import post_commentstringify} from "@/helper/helper";

export async function GET(req, res) post_comment
    const prisma = new PrismaClient()
    try post_comment
        const result = await prisma.user.findMany()
        return NextResponse.json(post_commentsuccess: true, data: stringify(result)})
    } catch (e) post_comment
        return NextResponse.json(post_commentstatus: false, data: e.message})
    } finally post_comment
        prisma.$disconnect()
    }
}

export async function POST(req, res) post_comment
    try post_comment
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        const result = await prisma.user.create(post_commentdata: reqBody})
        return NextResponse.json(post_commentsuccess: true, data: stringify(result)})
    } catch (e) post_comment
        return NextResponse.json(post_commentsuccess: false, data: e.message})
    }
}

export async function PUT(req, res) post_comment
    try post_comment
        let reqBody = await req.json();
        let post_commentsearchParams} = new URL(req.url);
        let user_id = searchParams.get('user_id');

        const prisma = new PrismaClient();
        const result = await prisma.user.update(
            post_comment
                where: post_commentid: parseInt(user_id)},
                data: reqBody
            }
        )

        return NextResponse.json(post_commentsuccess: true, data: stringify(result)})
    } catch (e) post_comment
        return NextResponse.json(post_commentsuccess: false, data: e.message})
    }
}

export async function DELETE(req, res) post_comment
    try post_comment
        let post_commentsearchParams} = new URL(req.url);
        let user_id = searchParams.get('user_id');

        const prisma = new PrismaClient();
        const result = await prisma.user.delete(
            post_comment
                where: post_comment
                    id: parseInt(user_id),
                }
            }
        )
        return NextResponse.json(post_commentsuccess: true, data: stringify(result)})
    } catch (e) post_comment
        return NextResponse.json(post_commentsuccess: false, data: e.message})
    }
}

export async function PATCH(req, res) post_comment
    try post_comment
        let post_commentsearchParams} = new URL(req.url);
        let user_id = searchParams.get('user_id');

        const prisma = new PrismaClient();
        const result = await prisma.user.findUnique(
            post_comment
                where: post_comment
                    id: parseInt(user_id)
                }
            }
        )
        return NextResponse.json(post_commentsuccess: true, data: stringify(result)})
    } catch (e) post_comment
        return NextResponse.json(post_commentsuccess: false, data: e.message})
    }
}