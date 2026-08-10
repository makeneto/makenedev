import React from "react"

import DefaultHeader from "@/components/headers/DefaultHeader"
import BlogArea from "@/components/blogs/BlogArea"
import LastBlog from "@/components/blogs/LastBlog"
import VerticalBlogList from "@/components/blogs/VerticalBlogList"
import BlogResume from "@/components/blogs/BlogResume"
import PageTitle from "@/components/PageTitle"

export default function BlogPage() {
  return (
    <React.Fragment>
      <PageTitle title="My Blogs" />

      <DefaultHeader
        title="My Blog"
        description="The world I write about is not fixed in one field or perspective. It shifts between technology, design, culture, business, and modern life. I explore ideas as they come, connect what seems unrelated, and understand how everything fits in a changing world. I’m not focused on mastering a single lane but building a broader understanding that evolves."
      />

      <BlogArea>
        <LastBlog vertical />
        <VerticalBlogList />
      </BlogArea>
      <BlogResume />
    </React.Fragment>
  )
}
