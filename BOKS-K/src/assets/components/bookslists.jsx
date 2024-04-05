import Bookcard from "./bookcard"
export default function BookList({ books, searchTerm }) {
    return (
        <div className="book_list">
            <h2>{searchTerm} Books</h2>
            <div className="cards">
                {books.map((book, index) => (
                    <Bookcard
                        key={index}
                        title={book.title}
                        first_publish_year={book.first_publish_year}
                        author_name={book.author_name}
                        ratings_average={book.ratings_average}
                        cover_i={book.cover_i}
                    />
                ))}
            </div>
        </div>
    );
}