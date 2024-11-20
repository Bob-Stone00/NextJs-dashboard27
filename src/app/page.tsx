import React from "react";
import Image from "next/image";
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
