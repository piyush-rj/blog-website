import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from "hono/jwt"
import { createBlogInput, updateBlogInput } from '@piyush_26/blog-common'


export const blogRouter = new Hono<{
    Bindings: {
        JWT_SECRET: string,
        DATABASE_URL: string,
    },
    Variables: {
        userId: string
    }
}>();

blogRouter.use("/*", async (c, next) => {

    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET)

    if(user) {
        // @ts-ignore
        c.set("userId", user.id);
        await next();
    } else {
        c.status(403);
        return c.json({
            message: "You are not logged in"
        })
    }
    } catch (e) {
        c.status(403);
        return c.json({
            message: "authentication failed"
        })
    }
})




blogRouter.post("/", async (c) => {
    try {
        const body = await c.req.json();
        const { success } = createBlogInput.safeParse(body);
        if (!success) {
            c.status(411);
            return c.json({ 
                message: "Inputs not correct" 
            })
        }

        const authorId = c.get("userId");
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: Number(authorId),
                date: new Date()
            },
        });

        return c.json({ 
            id: blog.id 
        });

    } catch (error) {
        c.status(500);
        return c.json({ message: "blog post error", error });
    }
});




blogRouter.put("/", async (c) => {
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message: "Invalid credentials"
        })
    }

    const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
            // add date here
        }
    })
    return c.json({
        id: blog.id
    })

})


// pagination

blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

try {
    const blogs = await prisma.blog.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            },
            date: true,
        }
    });

    return c.json({
        blogs   
    })
} catch (error) {
    return c.json({
        message: "blogs render failed",
        error
    })
}
    
})


blogRouter.get("/:id", async (c) => {
    const id = await c.req.param("id");
    const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                },
                date: true
            }
        })
        return c.json({
            blog
        })
    } catch (error) {
        c.status(411)
        return c.json({
            message: "error while fetching blog post"
        })
    }
    
})

