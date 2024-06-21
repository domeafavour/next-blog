import { CheckIcon, CopyIcon } from "lucide-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type Ref = React.ComponentRef<"button"> | null;

type Props = React.ComponentPropsWithoutRef<"button">;

export type { Props as CopyButtonProps, Ref as CopyButtonRef };

export const CopyButton = React.forwardRef<Ref, Props>(
  ({ children, className, onClick, ...props }, forwardedRef) => {
    const [copied, setCopied] = useState(false);

    return (
      <button
        ref={forwardedRef}
        type="button"
        className={twMerge(
          "p-1 bg-transparent text-sm leading-none cursor-pointer",
          "active:outline-2 border-none hover:bg-gray-50/20 active:bg-gray-50/10 rounded-md",
          className
        )}
        title="copy"
        disabled={copied}
        onClick={(e) => {
          onClick?.(e);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
        {...props}
      >
        {copied ? (
          <CheckIcon className="text-green-500" />
        ) : (
          <CopyIcon className="text-gray-500" />
        )}
      </button>
    );
  }
);

CopyButton.displayName = "CopyButton";
