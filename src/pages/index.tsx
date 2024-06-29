import { BasicLayout } from "@/components";
import List from "./notes/_list.mdx";

export default function Home() {
  return (
    <BasicLayout>
      <h2 className="text-foreground">Notes</h2>
      <List />
    </BasicLayout>
  );
}
