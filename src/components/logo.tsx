import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image alt="Logo" height={30} width={30} src="/logo.svg" />
        <h3 className="font-bold">Taskify</h3>
      </div>
    </Link>
  );
};
