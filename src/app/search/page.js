"use client";

import { Suspense } from "react";
import Search from "../../components/Search";

export default function page() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}
