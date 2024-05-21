"use client";

import { ElementRef, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { useEventListener, useOnClickOutside } from "usehooks-ts";

import { Plus, X } from "lucide-react";

import { toast } from "sonner";

import { ListWrapper } from "./list-wrapper";

import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { Button } from "@/components/ui/button";

import { createList } from "@/actions/create-list";

import { useAction } from "@/hooks/use-action";

export const ListForm = () => {
  const params = useParams();
  const router = useRouter();

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const [isEditing, setIsEditing] = useState(false);

  const { execute, fieldErrors } = useAction(createList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" created!`);
      disabledEditing();
      router.refresh();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disabledEditing = () => {
    setIsEditing(false);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      disabledEditing();
    }
  };

  useEventListener("keydown", onKeyDown);
  useOnClickOutside(formRef, disabledEditing);

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const boardId = formData.get("boardId") as string;

    execute({ title, boardId });
  };

  if (isEditing) {
    return (
      <ListWrapper>
        <form
          ref={formRef}
          action={onSubmit}
          className="w-full p-3 rounded-md bg-white space-y-4 shadow-md"
        >
          <FormInput
            id="title"
            ref={inputRef}
            errors={fieldErrors}
            placeholder="Enter list title..."
            className="
              text-sm
              px-2
              py-1
              font-medium
              border-transparent
              hover:border-input
              focus:border-input
              transition
            "
          />
          <input type="hidden" name="boardId" value={params.boardId} />
          <div className="flex items-center gap-x-1">
            <FormSubmit>Add list</FormSubmit>
            <Button size="sm" variant="ghost" onClick={disabledEditing}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      <button
        onClick={enableEditing}
        className="
            w-full
            rounded-md
            bg-white/80
            hover:bg-white/50
            transition
            p-3
            flex
            items-center
            font-medium
            text-sm
          "
      >
        <Plus className="h-4 w-4 mr-2" />
        Add a list
      </button>
    </ListWrapper>
  );
};
