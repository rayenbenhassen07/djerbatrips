import BlogsPage from "@/components/blog/BlogsPage";

export async function generateMetadata() {
  return {
    title: `Djerbatrips | Blog`,
  };
}
export default function Page() {
  return (
    <div cla>
      <BlogsPage />
    </div>
  );
}
