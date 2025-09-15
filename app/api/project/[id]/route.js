import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    // cari project berdasarkan id
    const projectById = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    // kembalikan response
    return NextResponse.json(projectById, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
