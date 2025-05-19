import { prisma } from "@/app/components/prisma_client";
import { NextResponse } from "next/server";

// Retrieve all contents from the database
export async function GET() {
  const body = await prisma.shopping_list.findMany();

  return NextResponse.json(body);
}

// Add a new item to the database
export async function POST(request: Request) {
  const body = await request.json();

  const newItem = await prisma.shopping_list.create({
    data: {
      priority: body.priority,
      item: body.item,
      quantity: body.quantity,
      details: body.details,
      date: body.date,
    },
  });

  return NextResponse.json(newItem);
}

export async function DELETE() {
  await prisma.shopping_list.deleteMany();
  return NextResponse.json({ message: "All items deleted" });
}
