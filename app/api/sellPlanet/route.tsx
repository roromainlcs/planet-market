import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma";
import { PlanetType } from "@/components/Planet/planetComponent";

type ResponseData = {
  message: string;
};

export async function POST(
  req: NextRequest,
) {
  const { NFTokenID, offerID, URI, Owner, Name, discovery_date, right_ascension, declination, price } = await req.json();
  prisma.nft.create({
    data: {
      NFTokenID: NFTokenID,
      offerID: offerID,
      URI: URI,
      Owner: Owner,
      Name: Name,
      discovery_date: discovery_date,
      right_ascension: right_ascension,
      declination: declination,
      price: price,
    },
  }).then(() => {
    return NextResponse.json({ message: "success" }, { status: 200 });
  }).catch((error) => {
    console.log("error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  });
}
