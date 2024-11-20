import { global } from "styled-jsx/css";
import React from "react";
import Sidebarnav from "./ui/sidebarnav";
import { Dashboard } from "./ui/dashboard";

export default function Page() {
  return (
    <main>
      <Sidebarnav />

      <Dashboard />
    </main>
  );
}
