import Excursions from "@/components/excursion/Excursions";
import React from "react";

export async function generateMetadata() {
  return {
    title: `Djerbatrips | Excursion`,
  };
}

const page = () => {
  return (
    <div>
      <Excursions />
    </div>
  );
};

export default page;
