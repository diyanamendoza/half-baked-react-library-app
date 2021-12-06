import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Book from '../../components/book/Book'
import { getBookById } from '../../services/books'

function BookDetail() {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const linkStyle = {
    color: 'white',
  }

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data))
  }, [id])

  if (!book) return <h3>Loading book...</h3>

  return (
    <>
      <Book book={book} showDetail />
      <Link to="/books" style={linkStyle}>
        Back to Catalog
      </Link>
    </>
  )
}

export default BookDetail
