"use client";

import { KeyboardEventHandler, forwardRef } from "react";
import { useFormStatus } from "react-dom";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { FormErrors } from "./form-errors";

import { cn } from "@/lib/utils";

interface FormTextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  onBlur?: () => void;
  onClick?: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement | undefined>;
  defaultValue?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  (
    {
      id,
      label,
      placeholder,
      required,
      disabled,
      errors,
      className,
      onBlur,
      onClick,
      onKeyDown,
      defaultValue,
    },
    ref
  ) => {
    const { pending } = useFormStatus();

    return (
      <div className="space-y-2 w-full">
        <div className="space-y-1 w-full">
          {label ? <Label>{label}</Label> : null}
          <Textarea
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onClick={onClick}
            ref={ref}
            required={required}
            name={id}
            placeholder={placeholder}
            id={id}
            disabled={pending || disabled}
            className={cn(
              `
              resize-none
              focus-visible:ring-0
              focus-visible:ring-offset-0
              ring-0
              focus:ring-0
              outline-none
              shadow-sm
            `,
              className
            )}
            aria-describedby={`${id}-error`}
            defaultValue={defaultValue}
          />
        </div>
        <FormErrors errors={errors} id={id} />
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";
