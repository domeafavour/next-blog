import { startTransition, useOptimistic, useState } from "react";
import { Button } from "../ui/button";

async function toggleLike(liked: boolean, success: boolean) {
  // simulate an API call
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(!liked);
      } else {
        reject(new Error("Failed to toggle like"));
      }
    }, 500);
  });
}

function LikeButton({
  initialLiked = false,
  willSuccess = true,
  asyncUpdater = true,
}: {
  initialLiked?: boolean;
  willSuccess?: boolean;
  asyncUpdater?: boolean;
}) {
  const [liked, setLiked] = useState(initialLiked);
  const [optimisticLiked, setOptimisticLiked] = useOptimistic(liked);
  return (
    <Button
      variant="secondary"
      onClick={() => {
        if (asyncUpdater) {
          startTransition(async () => {
            setOptimisticLiked(!optimisticLiked);
            const result = await toggleLike(optimisticLiked, willSuccess);
            setLiked(result);
          });
        } else {
          startTransition(() => {
            setOptimisticLiked(!optimisticLiked);
            toggleLike(optimisticLiked, willSuccess).then(setLiked);
          });
        }
      }}
    >
      {optimisticLiked ? "🩶" : "♡"}
    </Button>
  );
}

export function WhyIsYourUseOptimisticNotWorking() {
  const [liked, setLiked] = useState(false);
  const [optimisticLiked, setOptimisticLiked] = useOptimistic(liked);

  return (
    <table>
      <thead>
        <tr>
          <th className="w-[200px]">Async Updater</th>
          <th>Code</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Yes</td>
          <td>
            <code>{"startTransition(async () => {})"}</code>
          </td>
          <td>
            <LikeButton />
          </td>
        </tr>
        <tr>
          <td>No</td>
          <td>
            <code>{"startTransition(() => {})"}</code>
          </td>
          <td>
            <LikeButton asyncUpdater={false} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
