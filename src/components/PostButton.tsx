interface Props extends React.PropsWithChildren {}

export const PostButton: React.FC<Props> = ({ children }) => {
  return <div className="flex flex-row gap-2 items-center">{children}</div>;
};
