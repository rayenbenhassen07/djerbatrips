import { NextResponse } from "next/server"; // Add this import
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate rate to be between 1 and 5
    if (data.rate < 1 || data.rate > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    // Insert the new review into the avis table
    const newAvis = await prisma.avis.create({
      data: {
        name: data.name,
        email: data.email,
        discription: data.discription,
        rate: data.rate,
        trip_id: data.tripId,
      },
    });

    return NextResponse.json(newAvis, { status: 201 });
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 }
    );
  }
}
