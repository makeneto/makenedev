import { getBooksHomeData } from "@/features/books/wispBooks"
import ShowcaseHeader from "../showcase-section/ShowcaseHeader"
import BookCard from "./BookCard"

export default async function ShowcaseBooks() {
  const { posts } = await getBooksHomeData()

  return (
    <section>
      <ShowcaseHeader title="Bookcase" count={posts.length} />

      <ul className="book-list">
        {posts.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </section>
  )
}
