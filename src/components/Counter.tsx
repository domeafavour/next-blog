import React, { useState } from "react";
import { Button } from "./ui/button";

export function Counter() {
  const [count, setCount] = useState(0);
  return <Button onClick={() => setCount((c) => c + 1)}>{count}</Button>;
}
