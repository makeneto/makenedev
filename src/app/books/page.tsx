import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import DefaultHeader from "@/components/headers/DefaultHeader"
import BookResume from "@/components/books/BookResume"
import ShowcaseHeader from "@/components/showcase-section/ShowcaseHeader"
import { books } from "@/data/books"
import PageTitle from "@/components/PageTitle"

export default function BookPage() {
  return (
    <React.Fragment>
      <PageTitle title="Books Read" />

      <DefaultHeader
        title="Books Read"
        description={`A living list of the books that passed by me and left a mark. It's not a "best of all time" list, it's simply what I read, what made me think differently, and what I think is worth your time. I'm updating this list as I finish new readings, so check back here every now and then.`}
      />

      <section>
        <ShowcaseHeader title="Recommended Books" count={books.length} />

        <ul className="book-list">
          {books.map((book) => (
            <Link href={book.link} key={book.title} className="book-card">
              <div className="book-cover">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={200}
                  height={240}
                />
              </div>

              <div className="book-content">
                <div>
                  <h3>{book.title}</h3>
                  <ExternalLink />
                </div>

                <p>{book.author}</p>
              </div>
            </Link>
          ))}
        </ul>
      </section>

      <BookResume />
    </React.Fragment>
  )
}
