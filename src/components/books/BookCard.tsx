import { BlogPost, coverImage } from "@/services/wisp"
import Image from "next/image"

export default function BookCard({ book }: { book: BlogPost }) {
  return (
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
  )
}
