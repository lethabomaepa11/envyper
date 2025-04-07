import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@heroui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Button size="lg" color="primary">
        Click Me!
      </Button>
    </div>
  );
}
