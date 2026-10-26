import { getBooksHomeData } from "@/features/books/wisp-books"
import { coverImage } from "@/services/wisp"
import InteractiveList from "@/components/list/interactive-list"

export default async function BooksList() {
  const { posts } = await getBooksHomeData()

  return (
    <InteractiveList
      title="Bookcase"
      count={posts.length}
      items={posts.map((book) => ({
        id: book.id,
        title: book.title,
        description: book.description,
        icon: book.image ? "book" : undefined,
        iconSrc: book.image ? coverImage(book.image) : undefined
      }))}
    />
  )
}
