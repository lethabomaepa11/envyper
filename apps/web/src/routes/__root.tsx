import * as React from "react";
import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { HeroUIProvider } from "@heroui/react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <HeroUIProvider>
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <hr />
        <Outlet />
      </HeroUIProvider>
    </React.Fragment>
  );
}
