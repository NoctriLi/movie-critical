import { PrismaClient } from "@prisma/client";


// This is a singleton pattern to ensure that we only have one instance of PrismaClient in our application.
// This is important because PrismaClient maintains a connection pool to the database.
// https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
//Save prisma client to global file if in production
//prevents next-js hotreloading from creating multiple instances of prisma client
const client = global.prismadb || new PrismaClient();
if(process.env.NODE_ENV !== "production") global.prismadb = client;

export default client;
