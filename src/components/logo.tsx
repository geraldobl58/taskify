import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image alt="Logo" height={100} width={100} src="/logo.svg" />
      </div>
    </Link>
  );
};
