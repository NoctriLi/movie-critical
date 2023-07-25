import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prismadb from "@/lib/prismadb";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {

    const session = await getServerSession( req, res, authOptions );



  console.log('SESSIONssss', session)

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error("User not found");
  }

  return { currentUser };
};

export default serverAuth;