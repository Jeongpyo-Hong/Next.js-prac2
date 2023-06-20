"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" legacyBehavior>
        <span className={pathname === "/" ? "active" : ""}>Home</span>
      </Link>
      <Link href="/about" legacyBehavior>
        <span className={pathname === "/about" ? "active" : ""}>About</span>
      </Link>
      <style jsx>{`
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
