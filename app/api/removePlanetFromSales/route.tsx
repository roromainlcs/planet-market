import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma";
import { PlanetType } from "@/components/Planet/planetComponent";

type ResponseData = {
  message: string;
};

export async function POST(
  req: NextRequest
) {
  const { NFTokenID } = await req.json();
  //console.log(prisma.nft.findUnique({where:{NFTokenID: req.body.NFTokenID}}));
  if (!NFTokenID || NFTokenID === "") {
    return NextResponse.json({ message: "error, no nft token ID given" }, {status: 400});
    return;
  } else if (await prisma.nft.findUnique({where:{NFTokenID: NFTokenID}}) === null) {
    return NextResponse.json({ message: `no such nft: ${NFTokenID}` }, {status: 201});
    return;
  }
  prisma.nft.delete({
    where: {
      NFTokenID: NFTokenID,
    },
  }).then(() => {
    return NextResponse.json({ message: "success" }, {status: 200});
  }).catch((error) => {
    console.log("error:", error);
    return NextResponse.json({ message: "couldn't remove nft from market, it might just not exist on market" }, {status: 500});
  });
}
