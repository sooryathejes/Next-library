"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="my-10 justify-between gap-5">
    
      <ul className="flex flex-row items-center gap-8">
        <li>
        <Link
        href="/"
        className="text-3xl font-bold text-gray-800 dark:text-gray-100"
      >
        <Image src="/assets/Logo.png" alt="Logo_img" width={100} height={40}/>
      </Link>
        </li>
        <li>
          <Link
            href="/library" 
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            Library
          </Link>
        </li> 
      </ul>
    </header>
  );
};

export default Header;