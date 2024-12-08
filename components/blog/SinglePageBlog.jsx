"use client"; // needed for client-side fetch
import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import Image from "next/image";
import Error404 from "../Error";

const SinglePageBlog = ({ slug }) => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch the blog data");
        }
        const data = await response.json();
        setBlogData(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (blogData.data.length === 0) {
    return <Error404 />;
  }
  const {
    title,
    short_description,
    long_description,
    author,
    created_at,
    image,
  } = blogData.data[0];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-xl lg:text-3xl font-bold mb-4">{title}</h1>
      <p className="text-xs lg:text-sm text-gray-600">
        By {author} | {new Date(created_at).toLocaleDateString()}
      </p>

      <div className="my-4">
        <p
          className="mb-4 text-xs lg:text-base"
          dangerouslySetInnerHTML={{ __html: short_description }}
        ></p>
      </div>

      <div className="w-full my-6">
        <Image
          src={`http://75.119.130.218:8055/assets/${image}`} // replace with the correct image URL
          alt={title}
          width={800}
          height={500}
          className="rounded-lg w-full h-[600px] object-cover"
        />
      </div>

      <div className="my-6">
        <p
          className="text-xs lg:text-base"
          dangerouslySetInnerHTML={{ __html: long_description }}
        ></p>
      </div>
    </div>
  );
};

export default SinglePageBlog;
