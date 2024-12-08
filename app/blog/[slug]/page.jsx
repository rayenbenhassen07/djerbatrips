import React from "react";
import SinglePageBlog from "../../../components/blog/SinglePageBlog";

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
    title: `${formattedSlug}`,
  };
}

const page = async ({ params }) => {
  const { slug } = await params; // Await `params`
  return (
    <div className="pt-10">
      <SinglePageBlog slug={slug} />
    </div>
  );
};

export default page;
