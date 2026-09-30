import { getBlogHomeData } from "@/features/blog/wispBlog";
import BlogRow from "./BlogRow";
import ShowcaseHeader from "../showcase-section/ShowcaseHeader";

export default async function VerticalBlogList({
  isHome = false
}: {
  isHome?: boolean;
}) {
  const { posts } = await getBlogHomeData();
  const recent = isHome ? posts.slice(0, 7) : posts;

  return (
    <section>
      <ShowcaseHeader title="Writing" linkSection="/blog" />

      <ul className="verticalBlogs">
        {recent.map((post) => (
          <BlogRow key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  );
}
