import SinglePageProduct from "@/components/excursion/SinglePageProduct";
import React from "react";

function capitalizeSlug(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // Await `params`
  const formattedSlug = capitalizeSlug(slug);
  return {
    title: `Djerbatrips | ${formattedSlug}`,
  };
}

const Page = async ({ params }) => {
  const { slug } = await params; // Await `params`
  return (
    <div className="mt-20">
      <SinglePageProduct slug={slug} />
    </div>
  );
};

export default Page;
