export default function BookList( {books, searchTerm} ){
 
    return(

    <div className="søkt">
      <h2>"{searchTerm.replace(/\+/g, ' ')}" Books</h2>
      <ul className="book_list">
      {books.map((book, index) => (
      <li key={index}>{book?.title} av {book.author_name?.join(', ')} {book.first_publish_year}
      </li>
      ))}
      </ul>
      
    </div>

    )
}