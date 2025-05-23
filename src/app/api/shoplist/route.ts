import { prisma } from "@/app/components/prisma_client";
import { NextRequest, NextResponse } from "next/server";

// Retrieve all contents from the database
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  const body = await prisma.shopping_list.findMany({
    where: { userId },
  });

  return NextResponse.json(body);
}

// Add a new item to the database
export async function POST(request: NextRequest) {
  const body = await request.json();

  const newItem = await prisma.shopping_list.create({
    data: {
      userId: body.userId,
      priority: body.priority,
      item: body.item,
      quantity: body.quantity,
      details: body.details,
      date: body.date,
    },
  });

  return NextResponse.json(newItem);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  await prisma.shopping_list.deleteMany({
    where: { userId },
  });
  return NextResponse.json({ message: "All items deleted" });
}
