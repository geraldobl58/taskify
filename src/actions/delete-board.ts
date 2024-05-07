"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

export async function deleteBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });

  revalidatePath(
    "http://localhost:3000/organization/org_2fFCYF3O6HjhSiAj9dTw1fHiQfx"
  );
}
