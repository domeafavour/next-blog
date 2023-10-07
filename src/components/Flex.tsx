import React from "react";

export type FlexProperties = Pick<
  React.CSSProperties,
  "flex" | "gap" | "alignItems" | "justifyContent" | "flexDirection"
>;

interface Props
  extends React.PropsWithChildren<FlexProperties>,
    React.ComponentProps<"div"> {}

export type { Props as FlexProps };

export const Flex: React.FC<Props> = ({
  children,
  style,
  flex,
  gap,
  alignItems,
  justifyContent,
  flexDirection,
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        flex,
        gap,
        alignItems,
        justifyContent,
        flexDirection,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
