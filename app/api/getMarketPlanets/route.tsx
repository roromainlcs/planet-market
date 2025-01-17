import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { PlanetType } from '@/components/Planet/planetComponent';

type ResponseData = {
  message: string,
  marketPlanets: PlanetType[]
}

export async function GET(
  req: NextRequest
) {
    try {
    const pulled = await prisma.nft.findMany();
    const marketPlanets: PlanetType[] = pulled.map((planet) => {
      return ({
          NFTokenID: planet.NFTokenID,
          offerID: planet.offerID,
          URI: planet.URI,
          Owner: planet.Owner,
          Name: planet.Name,
          discovery_date: planet.discovery_date,
          createdAt: planet.createdAt.toString(),
          updatedAt: planet.updatedAt.toString(),
          right_ascension: planet.right_ascension,
          declination: planet.declination,
          price: planet.price
      });
    });
    //console.log(marketPlanets);
    return NextResponse.json({ message: "success", marketPlanets: marketPlanets }, { status: 200 });
  } catch (error) {
    console.log("error:", error);
    return NextResponse.json({ message: "Internal server error", marketPlanets: []}, { status: 500 });
  }
}