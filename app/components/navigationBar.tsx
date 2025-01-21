"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@/contexts/userContext";
import styles from "@/styles/navbar.module.css";
import { useRouter } from "next/navigation";
import { useXRPL } from "@/contexts/xrplContext";
import { usePathname } from "next/navigation";
import { SpeButton } from "@/ui/button";

function NavigationBar() {
  const router = useRouter();
  const { userWallet } = useUser();
  const { getBalanceFromWallet, xrplClient } = useXRPL();
  const [userBalance, setUserBalance] = useState<Number | undefined>(undefined);
  const pathname = usePathname();

  useEffect(() => {
    if (userWallet && userWallet !== undefined) {
      getBalanceFromWallet(
        userWallet?.classicAddress
      ).then((newBalance) => {
      setUserBalance(newBalance);
      });
    } else {
      console.log("no wallet found");
    }
  }, [userWallet, xrplClient]);

  return (
    <nav className="self-center *:flex-shrink-0 min-w-[800px] flex-shrink-0 flex max-w-fit static m-4 mx-auto border-solid border-white/50 border-[1px] rounded-full bg-foreground bg-opacity-5 z-[5000] px-8 py-3 items-center justify-center space-x-4">
      <div className='flex flex-row items-center -ml-1'>
        <h1 className='text-xl'>PlanetMarket</h1>
        {userWallet && (
          <p className="-mb-1 pl-1.5">
            {userBalance !== undefined ? userBalance.toString() : "loading"}{" "}
            XRPs
          </p>
        )}
      </div>
      <div className='mr-6 space-x-2'>
        {userWallet && userWallet.address ? (
          <SpeButton className='navbar_button' onClick={() => router.push("/login")}>
            {userWallet.address}
          </SpeButton>
        ) : (
          <SpeButton className='navbar_button' onClick={() => router.push("/login")}>Login</SpeButton>
        )}
        {pathname === "/" ? (
          <SpeButton className='navbar_button' onClick={() => router.push("/dashboard")}>
            Go to Dashboard
          </SpeButton>
        ) : (
          <SpeButton className='navbar_button' onClick={() => router.push("/")}>
            Go to Marketplace
          </SpeButton>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
