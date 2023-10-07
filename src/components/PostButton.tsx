import { Flex, FlexProps } from "./Flex";

interface Props extends FlexProps {}

export const PostButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Flex flexDirection="row" gap={8} alignItems="center" {...props}>
      {children}
    </Flex>
  );
};
