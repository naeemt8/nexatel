"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { packageData } from "@/data/packages";

import Footer from "../components/layout/Footer/Footer";
import PackagesContent from "./PackagesContent/PackagesContent";
import Navbar from "../components/layout/Header/Navbar/Navbar";

function PackagesPageContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const packages = packageData.filter(
    (item) => item.type.toLowerCase() === type?.toLowerCase()
  );

  return (
    <>
      <Navbar />
      <PackagesContent packages={packages} />
      <Footer />
    </>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={null}>
      <PackagesPageContent />
    </Suspense>
  );
}