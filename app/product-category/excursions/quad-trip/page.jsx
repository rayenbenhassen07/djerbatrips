import SinglePageProductQuad from "@/components/excursion/SinglePageProductQuad";
import React from "react";

export async function generateMetadata({ params }) {
  const formattedSlug = "Quad trip";
  return {
    title: `Djerbatrips | ${formattedSlug}`,
  };
}

const Page = async ({ params }) => {
  return (
    <div className="mt-20">
      <SinglePageProductQuad slug={"quad-trip"} />
    </div>
  );
};

export default Page;
