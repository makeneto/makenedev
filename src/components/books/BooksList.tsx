import { getBooksHomeData } from "@/features/books/wispBooks"
import { coverImage } from "@/services/wisp"
import InteractiveList from "@/components/list/InteractiveList"

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
        icon: book.image ? "cover" : undefined,
        iconSrc: book.image ? coverImage(book.image) : undefined,
      }))}
    />
  )
}
