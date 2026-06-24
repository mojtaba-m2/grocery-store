"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

function Navbar() {
  const pathName = usePathname();

  console.log(pathName);

  const navLinks = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Store", href: "/store" },
  ];

  return (
    <>
      <nav className="shadow p-4">
        <Container>
          <div className="flex justify-between">
            <div>
              {navLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`mr-4 ${pathName === item.href ? "text-sky-500" : ""}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div>
              <Link href={"/cart"}>
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
