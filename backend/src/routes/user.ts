import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@piyush_26/blog-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {

  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);

  if(!success){
    c.status(411)
    return c.json({
      message: "Invalid credentials"
    })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())


  try {
    const user = await prisma.user.create ({
      data: {
        email: body.email,
        password: body.password,
        name: body.name
      }
    })

    const jwt = await sign({ id: user.id as number }, c.env.JWT_SECRET);
  
    return c.text(jwt)
  } catch (error) {
    console.log(error);
    c.status(411)
    console.log(error)
    return c.text("signup failed")
  }
})

userRouter.post("/signin", async (c) => {
  try {
    const body = await c.req.json();
    console.log("Signin Request Body:", body); // Debugging request body

    // Validate input using Zod
    const validation = signinInput.safeParse(body);
    if (!validation.success) {
      c.status(400); // Bad Request
      return c.json({ message: "Invalid credentials", errors: validation.error });
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password, // Consider hashing passwords instead of storing them as plain text
      },
    });

    if (!user) {
      c.status(403); // Forbidden
      return c.json({ error: "User not found" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token: jwt });

  } catch (error) {
    console.error("Signin Error:", error);
    c.status(500); // Internal Server Error
    return c.json({ message: "Signin failed", error: error instanceof Error ? error.message : error });
  }
});
