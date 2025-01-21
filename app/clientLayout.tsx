"use client";
import { usePathname } from "next/navigation";
import NavigationBar from "@/components/navigationBar";

export function ClientLayout({ children }: any) {
  const pathName = usePathname();
  const excludeNavbar = ["/login", "/register"];
  const showNavbar = !excludeNavbar.includes(pathName);

  return (
    <>
      { showNavbar && <NavigationBar/> }
      {children}
    </>
  );
}