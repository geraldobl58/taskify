import Link from "next/link";

import { Medal } from "lucide-react";

import { Button } from "@/components/ui/button";

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div
          className="
            mb-4
            flex
            items-center
            border
            shadow-sm
            p-4
            bg-amber-100
            text-amber-700
            rounded-full
            uppercase
          "
        >
          <Medal className="h-6 w-6 mr-2" />
          No 1 task managment
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 font-bold mb-6">
          Taskify helps team move
        </h1>
        <div
          className="
            text-3xl
            md:text-6xl
            bg-gradient-to-r
            from-fuchsia-600
            to-pink-600
            text-white
            px-4
            p-2
            rounded-md
            pb-4
            w-fit
          "
        >
          work forward.
        </div>
        <div
          className="
            text-sm
            md:text-xl
            text-neutral-400
            mt-4
            max-w-xs
            md:max-w-2xl
            text-center
            mx-auto
          "
        >
          Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota
          uma pinga aí cumpadi! Interessantiss quisso pudia ce receita de bolis,
          mais bolis eu num gostis.
        </div>
        <Button asChild size="lg" className="mt-6">
          <Link href="/sign-up">Get Taskify for free</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
