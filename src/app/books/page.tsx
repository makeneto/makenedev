import React from "react"
import Image from "next/image"

import DefaultHeader from "@/components/headers/DefaultHeader"
import BookResume from "@/components/books/BookResume"
import ShowcaseHeader from "@/components/showcase-section/ShowcaseHeader"
import PageTitle from "@/components/PageTitle"
import { coverImage } from "@/services/wisp"
import { getBooksHomeData } from "@/features/books/wispBooks"

export default async function BooksPage() {
  const { posts } = await getBooksHomeData()

  return (
    <React.Fragment>
      <PageTitle title="Books Read" />

      <DefaultHeader
        title="Books Read"
        description={`A living list of the books that passed by me and left a mark. It's not a "best of all time" list, it's simply what I read, what made me think differently, and what I think is worth your time. I'm updating this list as I finish new readings, so check back here every now and then.`}
      />

      <section>
        <ShowcaseHeader title="Bookcase" count={posts.length} />

        <ul className="book-list">
          {posts.map((book) => (
            <li key={book.title} className="book-card">
              <div className="book-cover">
                <div />
                <Image
                  src={coverImage(book.image)}
                  alt={book.title}
                  width={200}
                  height={240}
                />
              </div>

              <div className="book-content">
                <p>{book.description}</p>
                <h3>{book.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <BookResume />
    </React.Fragment>
  )
}
