import Bookcard from "./bookcard";

export default function SearchResults({content}){
    const thebooks = content?.docs;
    console.log(content?.docs)

    return (
    <span className="display-Books">
        {thebooks?.map(Book => 
        <Bookcard className="card" 
            key={Book._version_} 
            title={Book.title} 
            first_publish_year={Book.first_publish_year}
            author_name={singleBook.author_name}
            ratings_average={singleBook.ratings_average}
            img={imgbook.cover_img}>
        </Bookcard>)}
    </span>
    )
}