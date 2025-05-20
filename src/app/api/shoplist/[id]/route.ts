import { prisma } from "@/app/components/prisma_client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

export async function DELETE(request: NextRequest, context: Context) {
  const { id } = await context.params;

  try {
    await prisma.shopping_list.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ message: "Item Deleted" });
  } catch (error) {
    return NextResponse.json(
      { message: "Item could not be deleted: ", error },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, context: Context) {
  const { id } = await context.params;
  const body = await request.json();

  try {
    const updatedItem = await prisma.shopping_list.update({
      where: { id: Number(id) },
      data: {
        item: body.item,
        priority: body.priority,
        quantity: body.quantity,
        details: body.details ?? "No Description",
        date: new Date(),
      },
    });
    return NextResponse.json(updatedItem);
  } catch (error) {
    return NextResponse.json(
      { message: "Item could not be updated: ", error },
      { status: 500 }
    );
  }
}
