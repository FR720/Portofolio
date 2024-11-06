// components/Navbar/Logo.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Logo: React.FC = () => (
  <Link href="/" className="text-5xl font-semibold">
    <Image
      src="/logo.png"
      alt="logo"
      width={100}
      height={100}
      className="text-yellow-500"
    />
  </Link>
);

export default Logo;
