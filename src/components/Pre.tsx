import React, { useRef } from "react";
import copyText from "copy-to-clipboard";
import { CopyButton } from "./CopyButton";

interface Props extends React.ComponentPropsWithoutRef<"pre"> {}

export type { Props as PreProps };

export function Pre({ children, className, ...props }: Props) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  return (
    <pre {...props} className="relative">
      <div ref={contentRef}>{children}</div>
      <CopyButton
        className="absolute top-2 right-2 "
        onClick={() => {
          copyText(contentRef.current?.innerText!);
        }}
      />
    </pre>
  );
}
