import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { auth } from "@/utils/auth";

// FUNGSI TAMBAH PROJECT
export const POST = async (req) => {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ message: "Akses Ditolak!" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { title, content, image, githubUrl, webUrl } = body;

    // Validasi
    if (!title || !content || !image || !githubUrl) {
      return NextResponse.json(
        { message: "Data Tidak Lengkap" },
        { status: 400 }
      );
    }

    const project = await prisma.post.create({
      data: {
        title: title,
        content: content,
        image: image,
        githubUrl: githubUrl,
        webUrl: webUrl || null,
      },
    });

    return NextResponse.json(project, { status: 201, statusText: "Success!" });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

// FUNGSI AMBIL SEMUA PROJECT
export const GET = async (req) => {
  try {
    const projects = await prisma.post.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
