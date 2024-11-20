import React from "react";

import Sidebarnav from "./dashboard/ui/sidebarnav";
import { Dashboard } from "./dashboard/ui/dashboard";

export default function Home() {
  return (
    <div>
      <Sidebarnav />

      <Dashboard />
    </div>
  );
}
